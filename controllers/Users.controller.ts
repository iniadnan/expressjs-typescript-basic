import { Request, Response } from "express";
import {
  getAllUser,
  getSingleUser,
  insertUser,
  updateUserById,
  deleteSingleUser,
} from "../models/Users.model";

// GET ALL USER
export const showAllUser = (req: Request, res: Response) => {
  try {
    getAllUser((err: any, results: any) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    });
  } catch (Error) {
    console.log(Error);
  }
};

// GET SINGLE USER
export const showSingleUser = (req: Request, res: Response) => {
  try {
    const email = req.params.email.trim().toLowerCase();
    getSingleUser(email, (err: any, results: any) => {
      if (err) {
        res.send(err);
      } else {
        return res.status(200).json(results);
      }
    });
  } catch (Error) {
    console.log(Error);
  }
};

// CREATE NEW USERS
export const createUser = (req: Request, res: Response) => {
  try {
    const data = {
      name: req.body.name.trim(),
      email: req.body.email.trim().toLowerCase(),
      password: req.body.password.trim(),
    };

    insertUser(data, (err: any, results: any) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send("Data Successfully Insert!");
      }
    });
  } catch (Error) {
    console.log(Error);
  }
};

// UPDATE USER
export const updateUser = (req: Request, res: Response) => {
  try {
    updateUserById("hello", (err: any, results: any) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send("OK");
      }
    });
  } catch (Error) {
    console.log(Error);
  }
};

// DELETE SINGLE USER
export const deleteOneUser = (req: Request, res: Response) => {
  try {
    deleteSingleUser(req.params.id, (err: any, results: any) => {
      if (err) {
        res.send(err);
      } else {
        if (results === 204) {
          res.status(200).send("User not deleted!");
        } else {
          res.status(200).send("User deleted!");
        }
      }
    });
  } catch (Error) {
    console.log(Error);
  }
};

// AUTH: LOGIN USER
export const loginUser = (req: Request, res: Response) => {
  try {
    return res.status(200).send("LOGIN USER");
  } catch (Error) {
    console.log(Error);
  }
};
