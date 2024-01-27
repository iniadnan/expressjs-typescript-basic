import { Sequelize } from "sequelize-typescript";
import Users from "../models/Users.model";

const SEQUELIZE = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "express_db_blog",
  logging: false,
  models: [Users],
});

export default SEQUELIZE;
