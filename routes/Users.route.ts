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
import { authMiddleware } from '../middleware/authMiddleware';

const UsersRoute = express.Router();

// [PUBLIC API]
// GET: ALL USER [http://localhost:3000/api/users/all]
UsersRoute.get("/all", showAllUser);
// GET: SINGLE USER [http://localhost:3000/api/users/user/email@email.com]
UsersRoute.get("/user/:email", showSingleUser);
// CREATE: CREATE NEW USER [http://localhost:3000/api/users/create]
UsersRoute.post("/create", createUser);
// AUTH: LOGIN [http://localhost:3000/api/users/login]
UsersRoute.post("/login", loginUser);

// [AUTHENTICATION API]
// UPDATE: UPDATE ARTICLE [http://localhost:3000/api/users/update]
UsersRoute.put("/update", authMiddleware, updateUser);
// DELETE: DELETE SINGLE USER [http://localhost:3000/api/users/single/1234]
UsersRoute.delete("/single/:id", authMiddleware, deleteOneUser);

export default UsersRoute;
