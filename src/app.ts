import express, { Request, Response } from "express";
// import sequelize from "./sequelize";
// import Users from "../models/Users.model";

const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
