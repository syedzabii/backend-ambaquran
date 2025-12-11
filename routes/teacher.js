import express from "express";
import {
  registerTeacher,
  getAllTeachers,
  getTeachersByPagination,
  getTeacherById,
  updateTeacherStatus,
  deleteTeacher,
} from "../controllers/teacher.js";
import { isAuthenticated } from "../middleware/auth.js";
import { validateTeacherRegistration, rateLimitTeacherRegistration } from "../middleware/teacherValidation.js";

const router = express.Router();

// Public route for teacher registration
router.post("/register", rateLimitTeacherRegistration, validateTeacherRegistration, registerTeacher);

// Protected routes (require authentication)
router.get("/all", isAuthenticated, getAllTeachers);
router.get("/pagination", isAuthenticated, getTeachersByPagination);
router.get("/:id", isAuthenticated, getTeacherById);
router.patch("/:id/status", isAuthenticated, updateTeacherStatus);
router.delete("/:id", isAuthenticated, deleteTeacher);

export default router;
