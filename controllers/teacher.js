import { Teacher } from "../models/teacher.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const registerTeacher = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      age,
      gender,
      qualification,
      experience,
      specializations,
      languages,
      availability,
      bio,
      termsAccepted,
    } = req.body;

    // Check if email already exists
    const existingTeacher = await Teacher.findOne({ email: email.toLowerCase() });
    if (existingTeacher) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Create new teacher
    const teacher = await Teacher.create({
      firstName,
      lastName,
      email,
      phone,
      age,
      gender,
      qualification,
      experience,
      specializations,
      languages,
      availability,
      bio,
      termsAccepted,
    });

    // Return success response
    res.status(201).json({
      success: true,
      message: "Teacher registration successful",
      data: {
        teacherId: teacher._id,
        email: teacher.email,
        status: teacher.status,
        registrationDate: teacher.registrationDate,
      },
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      const errors = Object.keys(error.errors).map((field) => ({
        field,
        message: error.errors[field].message,
      }));

      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
      });
    }

    // Handle duplicate key error (email already exists)
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Handle other errors
    return next(new ErrorHandler(error.message, 500));
  }
};

export const getAllTeachers = async (req, res, next) => {
  try {
    const status = req.query.status; // Add status filter
    
    // Build query object
    const query = {};
    if (status) {
      query.status = status;
    }

    const teachers = await Teacher.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: teachers,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

export const getTeachersByPagination = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    const status = req.query.status; // Add status filter

    // Build query object
    const query = {};
    if (status) {
      query.status = status;
    }

    const teachers = await Teacher.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);

    const totalTeachers = await Teacher.countDocuments(query);
    const totalPages = Math.ceil(totalTeachers / limit);

    res.status(200).json({
      success: true,
      data: teachers,
      pagination: {
        page,
        limit,
        totalPages,
        totalTeachers,
      },
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

export const getTeacherById = async (req, res, next) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
      return next(new ErrorHandler("Teacher not found", 404));
    }

    res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

export const updateTeacherStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
      return next(new ErrorHandler("Teacher not found", 404));
    }

    teacher.status = status;
    await teacher.save();

    res.status(200).json({
      success: true,
      message: "Teacher status updated successfully",
      data: {
        teacherId: teacher._id,
        status: teacher.status,
      },
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

export const deleteTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
      return next(new ErrorHandler("Teacher not found", 404));
    }

    await teacher.deleteOne();

    res.status(204).end();
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};
