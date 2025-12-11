import express from "express";
import {
  adminLogin,
  adminLogout,
  registerAdmin,
  getMyProfile,
  forgotPassword,
} from "../controllers/admin.js";
import { isAuthenticated } from "../middleware/auth.js";
const router = express.Router();

router.post("/new", isAuthenticated, registerAdmin);
router.post("/login", adminLogin);
router.get("/logout", isAuthenticated, adminLogout);
router.get("/me", isAuthenticated, getMyProfile);
router.post("/forgot-password", forgotPassword); // New route for forgot password
router.get("/test-auth", isAuthenticated, (req, res) => {
  res.json({ success: true, message: "Authentication working!", admin: req.admin });
});

export default router;
