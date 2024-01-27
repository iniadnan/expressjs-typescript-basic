import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  dialect: "mysql", // Change this to your database dialect (e.g., postgres, sqlite)
  database: "express_db_blog",
  username: "root",
  password: "",
  host: "localhost",
  port: 3306, // Change this to your database port
  models: [__dirname + "/models"], // Path to your models directory
  define: {
    timestamps: true,
  },
});

export default sequelize;
