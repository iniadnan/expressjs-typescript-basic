import { sign, verify } from "jsonwebtoken";

const secretKey = "your_secret_key"; // Replace with your own secret key

export const generateToken = (userId: string): string => {
  return sign({ userId }, secretKey, { expiresIn: "1h" });
};

export const verifyToken = (token: string): any => {
  try {
    return verify(token, secretKey);
  } catch (error) {
    return null;
  }
};
