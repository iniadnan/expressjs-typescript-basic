import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../configs/Jwt";

// Extend the Express Request type
interface AuthenticatedRequest extends Request {
  user?: any; // or your user object type
}

export const authMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const tokenReplaceBearer = token.replace("Bearer ", "");
    const decoded = verifyToken(tokenReplaceBearer);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    } else {
      req.user = decoded; // Attach user information to the request
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid token" });
  }
};
