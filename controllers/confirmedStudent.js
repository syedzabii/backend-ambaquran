import mongoose from "mongoose";
import { ConfirmedStudent } from "../models/confirmedStudent.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const confirmStudentRegistration = async (req, res, next) => {
  try {
    const {
      studentName,
      age,
      city,
      country,
      education,
      email,
      gender,
      parentName,
      phoneNumber,
      studentPhoto,
    } = req.body;

    const confirmedStudent = await ConfirmedStudent.findOne({ email });
    if (confirmedStudent)
      return next(new ErrorHandler("Student already confirmed", 409));

    // Generate roll number
    const currentYear = new Date().getFullYear();
    const lastStudent = await ConfirmedStudent.findOne({ year: currentYear })
      .sort({ rollNumber: -1 })
      .limit(1);
    
    let rollNumber;
    if (lastStudent) {
      const lastNumber = parseInt(lastStudent.rollNumber.split('-')[1]);
      rollNumber = `${currentYear}-${String(lastNumber + 1).padStart(4, '0')}`;
    } else {
      rollNumber = `${currentYear}-0001`;
    }

    await ConfirmedStudent.create({
      studentName,
      age,
      city,
      country,
      education,
      email,
      gender,
      parentName,
      phoneNumber,
      studentPhoto,
      rollNumber,
      year: currentYear,
      status: 'active'
    });

    res.status(201).json({
      success: true,
      message: "Student is now confirmed successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const fetchAllConfirmedStudents = async (req, res, next) => {
  try {
    const confirmedStudents = await ConfirmedStudent.find({});
    if (!confirmedStudents)
      return next(new ErrorHandler("No students found!", 404));

    res.status(200).json({
      success: true,
      confirmedStudents,
    });
  } catch (error) {
    next(error);
  }
};

export const getStudentsByPagination = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const students = await ConfirmedStudent.find({}).limit(limit).skip(skip);

    if (!students) {
      if (students.length === 0) {
        return res.status(404).json({
          message: "No students were found",
          students,
        });
      }
      next(new ErrorHandler(`No students were found on page:${page}`, 404));
    }

    const totalStudents = await ConfirmedStudent.countDocuments({});
    const totalPages = Math.ceil(totalStudents / limit);
    res.status(200).json({
      success: true,
      students,
      itemsPerPage: limit,
      page,
      totalPages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// Delete student by ID
export const deleteStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new ErrorHandler("Invalid student ID", 400));
    }

    const student = await ConfirmedStudent.findByIdAndDelete(id);

    if (!student) {
      return next(new ErrorHandler("Student not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// Fetch student by ID
export const fetchStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new ErrorHandler("Invalid student ID", 400));
    }

    const student = await ConfirmedStudent.findById(id);

    if (!student) {
      return next(new ErrorHandler("Student not found", 404));
    }

    res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    next(error);
  }
};
//delete student by id
//fetch student by id
