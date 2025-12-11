import { Admin } from "../models/admin.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/features.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const forgotPassword = async (req, res, next) => {
  try {
    const { email, newPassword, confirmPassword } = req.body;

    // Check if email exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return next(new ErrorHandler("Admin not found", 404));
    }

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      return next(new ErrorHandler("Passwords do not match", 400));
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the admin's password
    admin.password = hashedPassword;
    await admin.save();

    res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const registerAdmin = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    let admin = await Admin.findOne({ email });
    if (admin) return next(new ErrorHandler("Admin already exists!", 409));

    const hashedPassword = await bcrypt.hash(password, 10);

    admin = await Admin.create({ name, email, password: hashedPassword });
    // sendCookies(admin, 200, "Admin registered successfully", res);
    res.status(200).json({
      success: true,
      message: "Admin registered succesfully",
    });
    req.admin = admin;
  } catch (error) {
    next(error);
  }
};

export const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt for email:", email);

    let admin = await Admin.findOne({ email }).select("+password");
    if (!admin) {
      console.log("Admin not found for email:", email);
      return next(new ErrorHandler("Email or password is incorrect", 401));
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      console.log("Password mismatch for email:", email);
      return next(new ErrorHandler("Email or password is incorrect", 401));
    }

    console.log("Login successful for admin:", admin.name);
    console.log("Admin object:", {
      _id: admin._id,
      name: admin.name,
      email: admin.email
    });
    
    // Generate JWT token
    const token = generateToken(admin);
    console.log("Generated token:", token.substring(0, 20) + "...");
    
    // Return token in response body
    res.status(200).json({
      success: true,
      message: `Welcome back ${admin.name}`,
      admin: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
      },
      token: token, // JWT token for frontend storage
    });
    
    console.log("Login response sent successfully");
  } catch (error) {
    console.log("Login error:", error);
    next(error);
  }
};

export const adminLogout = (req, res) => {
  // For JWT-based auth, logout is handled on the frontend by removing the token
  // The backend just confirms the logout
  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

export const getMyProfile = (req, res, next) => {
  return res.json({
    success: true,
    admin: req.admin,
  });
};
