import jwt from "jsonwebtoken";

export const generateToken = (admin) => {
  console.log("generateToken - Starting function");
  console.log("generateToken - Admin _id:", admin._id);
  console.log("generateToken - JWT_SECRET exists:", !!process.env.JWT_SECRET);
  
  const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET);
  console.log("generateToken - JWT token generated:", token.substring(0, 20) + "...");
  
  return token;
};
