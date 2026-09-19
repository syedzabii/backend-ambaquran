import express from "express";
import {
  allStudents,
  deleteStudentById,
  getStudentById,
  getStudentsByPagination,
  registerStudent,
  updateStudentStatus,
} from "../controllers/student.js";
import { isAuthenticated } from "../middleware/auth.js";
import { upload } from "../cloud/cloudStorage.js";

const router = express.Router();

// Public routes
router.post("/register", upload.single("studentPhoto"), registerStudent);
router.post("/new", upload.single("studentPhoto"), registerStudent);

// Protected routes (require authentication)
router.get("/", isAuthenticated, getStudentsByPagination);
router.get("/all", isAuthenticated, allStudents);
router.get("/pagination", isAuthenticated, getStudentsByPagination);
router.get("/paginStudents", isAuthenticated, getStudentsByPagination);

router.get("/:id", isAuthenticated, getStudentById);
router.patch("/:id/status", isAuthenticated, updateStudentStatus);
router.delete("/:id", isAuthenticated, deleteStudentById);

export default router;
