package main

import (
	"backend/controllers"
	"backend/initializer"
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/jackc/pgx/v5/pgxpool"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

type Comment struct {
	ID         int    `json:"id"`
	UserID     int    `json:"userid"`
	ProfilePic string `json:"profilepic"`
	Content    string `json:"content"`
	Timestamp  string `json:"timestamp"`
	PostID     int    `json:"postid"`
}

var (
	googleOauthConfig = oauth2.Config{
		ClientID:     "645222916320-aoujseicl9i0c25usr7k2t8dmmeaikmg.apps.googleusercontent.com",
		ClientSecret: "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",
		RedirectURL:  "http://localhost:8080/callback", // Update with your redirect URI
		Scopes:       []string{"profile", "email"},
		Endpoint:     google.Endpoint,
	}

	oauthStateString = "randomString"
)

var Pool *pgxpool.Pool

func main() {
	controllers.Lol()
	// config, err := pgxpool.ParseConfig(os.Getenv(`postgres://admin:Flixdin@123@68.233.112.42:5432/flixdin?pool_max_conns=80`))
	// if err != nil {
	//   fmt.Println("DB error",err)
	// }
	// Pool, err := pgxpool.NewWithConfig(context.Background(), config)

	// if err != nil {
	//   fmt.Println("DB2 error",err)
	// }
	// defer Pool.Close()

	if err := initializer.InitializeDBPool(); err != nil {
		fmt.Println("DB initialization error:", err)
		return
	}

	Pool = initializer.Pool
	defer Pool.Close()
	mux := http.NewServeMux()
	mux.HandleFunc("/", handleMain)
	mux.HandleFunc("/login", handleLogin)
	mux.HandleFunc("/callback", handleCallback)

	port := "8080"
	fmt.Printf("Server started at http://localhost:%s\n", port)
	http.ListenAndServe(":"+port, mux)
}

func handleMain(w http.ResponseWriter, r *http.Request) {
	html := `<html><body><a href="/login">Login with Google</a></body></html>`
	fmt.Fprint(w, html)
}

func handleLogin(w http.ResponseWriter, r *http.Request) {
	url := googleOauthConfig.AuthCodeURL(oauthStateString)
	http.Redirect(w, r, url, http.StatusTemporaryRedirect)
}

func handleCallback(w http.ResponseWriter, r *http.Request) {
	state := r.FormValue("state")
	if state != oauthStateString {
		fmt.Println("Invalid oauth state")
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	code := r.FormValue("code")
	token, err := googleOauthConfig.Exchange(r.Context(), code)
	if err != nil {
		fmt.Printf("Code exchange failed: %v\n", err)
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	// Fetch the user's profile information
	client := googleOauthConfig.Client(r.Context(), token)
	resp, err := client.Get("https://www.googleapis.com/oauth2/v3/userinfo")
	if err != nil {
		fmt.Printf("Failed to fetch user info: %v\n", err)
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}
	defer resp.Body.Close()

	var userInfo map[string]interface{}
	if err := json.NewDecoder(resp.Body).Decode(&userInfo); err != nil {
		fmt.Printf("Failed to decode user info: %v\n", err)
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	// You can use userInfo as needed in your application
	// ...

	// You can also send the JSON response to the client
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(userInfo)
}

func CreateComment(w http.ResponseWriter, r *http.Request) {
	var comment Comment
	_ = json.NewDecoder(r.Body).Decode(&comment)

	// Insert the comment into the database
	_, err := Pool.Exec(context.Background(), `
        INSERT INTO comments (userid, profilepic, content, postid)
        VALUES ($1, $2, $3, $4)`, comment.UserID, comment.ProfilePic, comment.Content, comment.PostID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(comment)
}

func GetCommentsByPostID(w http.ResponseWriter, r *http.Request) {
	params := r.URL.Query()
	postID := params.Get("postid")

	// Retrieve comments for a specific postid in order
	rows, err := Pool.Query(context.Background(), `
        SELECT id, userid, profilepic, content, timestamp, postid
        FROM comments
        WHERE postid = $1
        ORDER BY timestamp ASC`, postID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	comments := []Comment{}
	for rows.Next() {
		var comment Comment
		err := rows.Scan(
			&comment.ID, &comment.UserID, &comment.ProfilePic, &comment.Content, &comment.Timestamp, &comment.PostID)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		comments = append(comments, comment)
	}

	json.NewEncoder(w).Encode(comments)
}
