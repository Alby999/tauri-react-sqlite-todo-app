// src/main.rs

use tauri::{command, generate_context, Builder};
use sqlx::sqlite::SqlitePool;

// Command to add a new task
#[command]
async fn add_task(pool: SqlitePool, task: String) -> Result<(), String> {
    sqlx::query("INSERT INTO tasks (name) VALUES (?)")
        .bind(task)
        .execute(&pool)
        .await
        .map_err(|e| e.to_string())?;
    Ok(())
}

// Command to get all tasks
#[command]
async fn get_tasks(pool: SqlitePool) -> Result<Vec<String>, String> {
    let rows = sqlx::query("SELECT name FROM tasks")
        .fetch_all(&pool)
        .await
        .map_err(|e| e.to_string())?;
    Ok(rows.into_iter().map(|r| r.get(0)).collect())
}

fn main() -> Result<(), tauri::Error> {
    let pool = SqlitePool::connect("sqlite:database.db").await.unwrap();

    // Run database migrations
    sqlx::migrate!().run(&pool).await.unwrap();

    Builder::default()
        .manage(pool)
        .invoke_handler(tauri::generate_handler![add_task, get_tasks])
        .run(generate_context!())
}
