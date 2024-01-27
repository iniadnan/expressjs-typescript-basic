import DBConnection from "../configs/Connnection";

// GET ALL USERS
export const getAllUser = (result: any) => {
  try {
    DBConnection.query(
      "SELECT * FROM users ORDER BY created_at",
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

// CREATE NEW USER
export const insertUser = (data, result) => {
  try {
    DBConnection.query(
      "INSERT INTO users (id, email, username, password) VALUES (?, ?, ?, ?)",
      [data.id, data.email, data.username, hashPassword],
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
