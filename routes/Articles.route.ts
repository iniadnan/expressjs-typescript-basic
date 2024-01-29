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

const ArticlesRoute = express.Router();

// [PUBLIC API]
// GET: ALL USER [http://localhost:3000/api/users/all]
ArticlesRoute.get("/all", showAllUser);
// GET: SINGLE USER [http://localhost:3000/api/users/user/email@email.com]
ArticlesRoute.get("/user/:email", showSingleUser);
// CREATE: CREATE NEW USER [http://localhost:3000/api/users/create]
ArticlesRoute.post("/create", createUser);
// AUTH: LOGIN [http://localhost:3000/api/users/login]
ArticlesRoute.post("/login", loginUser);

// [AUTHENTICATION API]
// UPDATE: UPDATE ARTICLE [http://localhost:3000/api/users/update]
ArticlesRoute.put("/update", authMiddleware, updateUser);
// DELETE: DELETE SINGLE USER [http://localhost:3000/api/users/single/1234]
ArticlesRoute.delete("/single/:id", authMiddleware, deleteOneUser);

export default ArticlesRoute;
