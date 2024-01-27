import express, { Request, Response } from "express";
// import SEQUELIZE from "../configs/sequelize";
// import sequelize from "./sequelize";
// import Users from "../models/Users.model";
import UsersRoute from "./routes/Users.route";

const APP = express();
const PORT = 3000;

// MIDDLEWARE EXPRESS JSON
APP.use(express.json());

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

const start = async (): Promise<void> => {
  try {
    // await SEQUELIZE.sync();
    APP.listen(3000, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
