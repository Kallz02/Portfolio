package initializer

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
)

var Pool *pgxpool.Pool

func InitializeDBPool() error {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
		return err
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
