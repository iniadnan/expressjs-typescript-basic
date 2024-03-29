import express from "express";
import ArticlesRoute from "./routes/Articles.route";
import UsersRoute from "./routes/Users.route";

const APP = express();
const PORT = 3000;

// MIDDLEWARE EXPRESS JSON
APP.use(express.json());

// MIDDLEWARE BODY PARSER
APP.use(express.urlencoded({ extended: false }));

// API ARTICLES
APP.use("/api/articles", ArticlesRoute);
// API USERS
APP.use("/api/users", UsersRoute);

const start = async (): Promise<void> => {
  try {
    APP.listen(3000, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
