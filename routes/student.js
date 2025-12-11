import express from "express";
import {
  allStudents,
  deleteStudentById,
  getStudentsByPagination,
  registerStudent,
} from "../controllers/student.js";
import { isAuthenticated } from "../middleware/auth.js";
import { upload } from "../cloud/cloudStorage.js";

const router = express.Router();

router.post("/new", upload.single("studentPhoto"), registerStudent);
router.get("/all", isAuthenticated, allStudents);
router.get("/paginStudents", isAuthenticated, getStudentsByPagination);
router.delete("/:id", isAuthenticated, deleteStudentById);

export default router;
