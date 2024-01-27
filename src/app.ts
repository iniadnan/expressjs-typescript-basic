import express, { Request, Response } from "express";
// import sequelize from "./sequelize";
// import Users from "../models/Users.model";
import UsersRoute from "../routes/Users.route"

const APP = express();
const PORT = 3000;

// Sync the models with the database
// sequelize.sync();

// app.get("/", async (req: Request, res: Response) => {
//   // Create a sample user
//   const newUser = await Users.create({
//     name: "John Doe",
//     email: "john@example.com",
//     password: "Hello World",
//   });

//   // Retrieve all users from the database
//   const users = await Users.findAll();

//   res.json(users);
// });

// API USERS
APP.use("/api/users", UsersRoute);

APP.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
