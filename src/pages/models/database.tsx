import mysql from "mysql";
import { Connection } from "./connection";

// Tạo kết nối database
const db: Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cozystay_db",
});

db.connect(function (err: any) {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Database is connected successfully !");
});
export default db;
