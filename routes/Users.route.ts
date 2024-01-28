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

// GET: ALL USER
UsersRoute.get("/all", showAllUser);

// GET: SINGLE USER
UsersRoute.get("/user/:email", showSingleUser);

// CREATE: CREATE NEW USER
UsersRoute.post("/create", createUser);

// UPDATE: UPDATE ARTICLE
UsersRoute.put("/update", updateUser);

// DELETE: DELETE SINGLE USER
UsersRoute.delete("/single/:id", deleteOneUser);

// AUTH: LOGIN
UsersRoute.post("/login", loginUser);

export default UsersRoute;
