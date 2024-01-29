import DBConnection from "../configs/Connnection";
import { generateRandomStringNumber } from "../helpers/randomString";
import { generateToken } from "../configs/Jwt";

// GET ALL USERS
export const getAllUser = (result: any) => {
  try {
    DBConnection.query(
      "SELECT email, name, created_at FROM users ORDER BY created_at DESC",
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

// UPDATE USER
export const updateUserById = (data: any, result: any) => {
  try {
    DBConnection.query(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [data.name, data.email, data.id],
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

// DELETE SINGLE USER
export const deleteSingleUser = (id: string, result: any) => {
  try {
    DBConnection.query(
      "DELETE FROM users WHERE id = ?",
      [id],
      (err, results) => {
        if (err) {
          result(err, null);
        } else {
          if (result.affectedRows) {
            // IF THE USER DELETED
            result(null, results);
          } else {
            // IF THE USER NOT DELETED
            result(null, 204);
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// CHECK LOGIN USER
export const checkLoginUser = (data: any, result: any) => {
  try {
    const { email, password } = data;

    DBConnection.query(
      "SELECT email, name, created_at FROM users WHERE email = ? AND password = ?",
      [email, password],
      (err, results) => {
        if (err) {
          result(err, null);
        } else {
          if (Array.isArray(results) && results.length > 0) {
            const userId = generateRandomStringNumber(30);
            const token = generateToken(userId);
            result(null, token);
          } else {
            result(null, "Invalid username or password");
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
