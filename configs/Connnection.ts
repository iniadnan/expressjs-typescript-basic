import mysql from "mysql2";

// CREATE THE CONNECTION
const DBConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "express_db_blog",
});

export default DBConnection;
