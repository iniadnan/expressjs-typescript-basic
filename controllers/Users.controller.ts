import express, { Request, Response } from "express";

// GET ALL USER
export const showAllUser = (req: Request, res: Response) => {
  try {
    return res.status(200).send("GET ALL USER");
  } catch (Error) {
    console.log(Error);
  }
};

// GET SINGLE USER
export const showSingleUser = (req: Request, res: Response) => {
  try {
    return res.status(200).send("GET SINGLE USER");
  } catch (Error) {
    console.log(Error);
  }
};

// CREATE NEW USERS
export const createUser = (req: Request, res: Response) => {
  try {
    return res.status(200).send("CREATE NEW USERS");
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
