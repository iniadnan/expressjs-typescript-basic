import express from "express";
// IMPORT CONTROLLER
import {
  showAllUser,
  showSingleUser,
  createUser,
  updateUser,
  deleteOneUser,
  loginUser,
} from "../controllers/Users.controller";

const UsersRoute = express.Router();

// GET: ALL USER [http://localhost:3000/api/users/all]
UsersRoute.get("/all", showAllUser);

// GET: SINGLE USER [http://localhost:3000/api/users/user/email@email.com]
UsersRoute.get("/user/:email", showSingleUser);

// CREATE: CREATE NEW USER [http://localhost:3000/api/users/create]
UsersRoute.post("/create", createUser);

// UPDATE: UPDATE ARTICLE [http://localhost:3000/api/users/update]
UsersRoute.put("/update", updateUser);

// DELETE: DELETE SINGLE USER [http://localhost:3000/api/users/single/1234]
UsersRoute.delete("/single/:id", deleteOneUser);

// AUTH: LOGIN [http://localhost:3000/api/users/login]
UsersRoute.post("/login", loginUser);

export default UsersRoute;
