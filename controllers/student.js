import { uploadToGCS } from "../cloud/cloudStorage.js";
import { Student } from "../models/student.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// Public student registration (Default status: PENDING)
export const registerStudent = async (req, res, next) => {
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
    } = req.body;

    if (!studentName || !age || !gender) {
      return next(new ErrorHandler("Please fill in all required fields (name, age, gender)", 400));
    }

    // Check if email already exists if provided
    let userEmail;
    if (email && email.trim()) {
      userEmail = email.toLowerCase().trim();
      const existingStudent = await Student.findOne({ email: userEmail });
      if (existingStudent) {
        return res.status(409).json({
          success: false,
          message: "A student registration with this email already exists",
        });
      }
    } else {
      // Auto-generate a unique placeholder email if omitted to bypass MongoDB E11000 null index collision
      userEmail = `noemail-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}@ambaquran.internal`;
    }

    // Handle photo upload if a file exists
    let photoUrl = null;
    if (req.file) {
      try {
        photoUrl = await uploadToGCS(req.file);
      } catch (err) {
        console.error("GCS Upload Error:", err);
      }
    }

    const student = await Student.create({
      studentName,
      age: Number(age),
      city: city || "N/A",
      country: country || "N/A",
      education: education || "Not Specified",
      email: userEmail,
      gender,
      parentName: parentName || "N/A",
      phoneNumber: phoneNumber || "N/A",
      studentPhoto: photoUrl || req.body.studentPhoto || null,
      status: "PENDING",
      appliedAt: new Date(),
    });

    res.status(201).json({
      success: true,
      message: "Student application registered successfully",
      student,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

// Fetch all students with optional status filter & pagination
export const allStudents = async (req, res, next) => {
  try {
    const { status } = req.query;
    const query = {};
    if (status) {
      query.status = status.toUpperCase();
    }

    const students = await Student.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      students,
      data: students,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

// Fetch students with status filter and pagination
export const getStudentsByPagination = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const { status, search } = req.query;

    const query = {};
    if (status) {
      query.status = status.toUpperCase();
    }

    if (search) {
      query.$or = [
        { studentName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { rollNumber: { $regex: search, $options: "i" } },
      ];
    }

    const students = await Student.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);

    const totalStudents = await Student.countDocuments(query);
    const totalPages = Math.ceil(totalStudents / limit);

    res.status(200).json({
      success: true,
      students,
      data: students,
      itemsPerPage: limit,
      page,
      totalPages,
      totalStudents,
      pagination: {
        page,
        limit,
        totalPages,
        totalStudents,
      },
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

// Get single student by ID
export const getStudentById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return next(new ErrorHandler("Student not found", 404));
    }

    res.status(200).json({
      success: true,
      student,
      data: student,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

// Atomic Status Update (APPROVED / REJECTED)
export const updateStudentStatus = async (req, res, next) => {
  try {
    const { status, rollNumber } = req.body;
    if (!status || !["PENDING", "APPROVED", "REJECTED"].includes(status.toUpperCase())) {
      return next(new ErrorHandler("Invalid status value. Must be PENDING, APPROVED, or REJECTED", 400));
    }

    const student = await Student.findById(req.params.id);
    if (!student) {
      return next(new ErrorHandler("Student not found", 404));
    }

    student.status = status.toUpperCase();

    if (student.status === "APPROVED") {
      if (rollNumber) {
        student.rollNumber = rollNumber;
      } else if (!student.rollNumber) {
        // Auto-generate roll number if not provided
        const currentYear = new Date().getFullYear();
        const randomDigits = Math.floor(1000 + Math.random() * 9000);
        student.rollNumber = `AMB-${currentYear}-${randomDigits}`;
      }
      student.enrolledAt = new Date();
    }

    await student.save();

    res.status(200).json({
      success: true,
      message: `Student status updated to ${student.status}`,
      student,
      data: student,
    });
  } catch (error) {
    if (error.code === 11000) {
      return next(new ErrorHandler("Roll number or email already in use", 409));
    }
    return next(new ErrorHandler(error.message, 500));
  }
};

// Delete student by ID
export const deleteStudentById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return next(new ErrorHandler("Student doesn't exist", 404));
    }
    await student.deleteOne();
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};
