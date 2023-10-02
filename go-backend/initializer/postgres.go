package initializer

import (
    "context"
    "os"
    "github.com/jackc/pgx/v5/pgxpool"
    "github.com/joho/godotenv"
    "fmt"
)

var Pool *pgxpool.Pool

func InitializeDBPool() error {
    err := godotenv.Load()
    if err != nil {
        fmt.Println("Error loading .env file")
    }
    config, err := pgxpool.ParseConfig(os.Getenv("POSTGRES"))
    if err != nil {
        return err
    }

    Pool, err = pgxpool.NewWithConfig(context.Background(), config)
    if err != nil {
        return err
    }

    return nil
}
