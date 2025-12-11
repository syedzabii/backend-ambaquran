import express from "express";
import {
  registerApplicant,
  getAllApplicants,
  deleteApplicant,
} from "../controllers/applicant.js"; // Adjust the path as needed

const router = express.Router();

// Register a new applicant
router.post("/register", registerApplicant);

// Get all applicants
router.get("/applicants", getAllApplicants);

// Delete an applicant by ID
router.delete("/applicants/:id", deleteApplicant);

export default router;
