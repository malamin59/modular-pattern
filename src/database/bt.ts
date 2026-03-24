import { Pool } from "pg";

export const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_jcZ5pyEOMF8r@ep-fancy-dust-a8g05i93-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require",
});

// CREATE TABLE
export const initDB = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR (200) NOT NULL,
    email VARCHAR (200) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role VARCHAR (100) NOT NULL, 
    age INT,
    create_at TIMESTAMP DEFAULT NOW(),
    update_at TIMESTAMP DEFAULT NOW()
    )
   
      `);
  console.log("database Connected ");
};