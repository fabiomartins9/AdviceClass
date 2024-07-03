import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

let dbPath = path.resolve(process.cwd(), 'default-database.sqlite');

export async function setDatabasePath(newPath) {
  dbPath = path.resolve(process.cwd(), newPath);
  console.log("Database Path Set To: ", dbPath);
}

export async function getDatabaseConnection() {
  try {
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });
    console.log("Database Connection Opened");
    return db;
  } catch (error) {
    console.error("Error Opening Database Connection:", error);
    throw error;
  }
}
