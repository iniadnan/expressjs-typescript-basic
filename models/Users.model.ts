import DBConnection from "../configs/Connnection";
import { generateRandomStringNumber } from "../helpers/randomString";

// GET ALL USERS
export const getAllUser = (result: any) => {
  try {
    DBConnection.query(
      "SELECT email, name, created_at FROM users ORDER BY created_at",
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// GET SINGLE ARTICLE
export const getSingleUser = (email: string, result: any) => {
  try {
    DBConnection.query(
      "SELECT email, name, created_at FROM users WHERE email = ?",
      [email],
      (err, results) => {
        if (err) {
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// CREATE NEW USER
export const insertUser = (data: any, result: any) => {
  try {
    DBConnection.query(
      "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)",
      [generateRandomStringNumber(16), data.name, data.email, data.password],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
