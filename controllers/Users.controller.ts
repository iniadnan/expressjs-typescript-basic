import express, { Request, Response } from "express";
import { getAllUser, getSingleUser, insertUser } from "../models/Users.model";
import { IShowUsers } from "../types";

// GET ALL USER
export const showAllUser = (req: Request, res: Response) => {
  try {
    getAllUser((err: null, results: any) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  } catch (Error) {
    console.log(Error);
  }
};

// GET SINGLE USER
export const showSingleUser = (req: Request, res: Response) => {
  try {
    getSingleUser(req.params.email, (err: any, results: any) => {
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
    return res.status(200).send("UPDATE USER");
  } catch (Error) {
    console.log(Error);
  }
};

// DELETE SINGLE USER
export const deleteOneUser = (req: Request, res: Response) => {
  try {
    return res.status(200).send("DELETE SINGLE USER");
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
