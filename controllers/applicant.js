import { Applicant } from "../models/applicant.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// Register a new applicant
export const registerApplicant = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    age,
    gender,
    course,
    remarks,
    termsAccepted,
  } = req.body;

  // Check if the applicant already exists
  const existingApplicant = await Applicant.findOne({ email });
  if (existingApplicant) {
    return next(
      new ErrorHandler("Applicant with this email already exists", 400)
    );
  }

  // Create a new applicant
  const applicant = await Applicant.create({
    firstName,
    lastName,
    email,
    age,
    gender,
    course,
    remarks,
    termsAccepted,
  });

  res.status(201).json({
    success: true,
    message: "Applicant registered successfully",
    applicant,
  });
};

// Get all applicants
export const getAllApplicants = async (req, res, next) => {
  const applicants = await Applicant.find({});

  if (!applicants || applicants.length === 0) {
    return next(new ErrorHandler("No applicants found", 404));
  }

  res.status(200).json({
    success: true,
    applicants,
  });
};

// Delete an applicant by ID
export const deleteApplicant = async (req, res, next) => {
  const { id } = req.params;

  const applicant = await Applicant.findByIdAndDelete(id);

  if (!applicant) {
    return next(new ErrorHandler("Applicant not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Applicant deleted successfully",
  });
};
