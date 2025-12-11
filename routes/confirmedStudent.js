import express from "express";
import {
  confirmStudentRegistration,
  deleteStudentById,
  fetchStudentById,
  getStudentsByPagination,
} from "../controllers/confirmedStudent.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, confirmStudentRegistration);

router.get("/paginStudents", isAuthenticated, getStudentsByPagination);

router.delete("/:id", deleteStudentById);
router.get("/:id", fetchStudentById);

export default router;
