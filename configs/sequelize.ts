import { Sequelize } from "sequelize-typescript";
import Users from "../models/Users.model";

const SEQUELIZE = new Sequelize({
  dialect: "mysql", // Change this to your database dialect (e.g., postgres, sqlite)
  database: "express_db_blog",
  username: "root",
  password: "",
  host: "localhost",
  port: 3306, // Change this to your database port
  models: [Users], // Path to your models directory
  define: {
    timestamps: true,
  },
});

export default SEQUELIZE;
