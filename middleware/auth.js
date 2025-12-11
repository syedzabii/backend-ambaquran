import jwt from "jsonwebtoken";
import { Admin } from "../models/admin.js";

export const isAuthenticated = async (req, res, next) => {
  // Get token from Authorization header
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log("Auth middleware - No valid Authorization header found");
    return res.status(401).json({ message: "No token provided" });
  }
  
  const token = authHeader.substring(7); // Remove 'Bearer ' prefix
  console.log("Auth middleware - Token extracted from header");
  
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Auth middleware - Token verified, _id:", _id);

    const admin = await Admin.findById({ _id });
    if (!admin) {
      console.log("Auth middleware - Admin not found");
      return res.status(401).json({ message: "Admin not found" });
    }
    
    req.admin = admin;
    console.log("Auth middleware - Authentication successful");
    next();
  } catch (error) {
    console.log("Auth middleware - Token verification failed:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};
