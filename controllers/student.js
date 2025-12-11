import { uploadToGCS } from "../cloud/cloudStorage.js";
import { Student } from "../models/student.js";
import ErrorHandler from "../utils/ErrorHandler.js";

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

    // Handle photo upload if a file exists
    let photoUrl = null;
    if (req.file) {
      photoUrl = await uploadToGCS(req.file);
    }

    // Create student with photo URL
    await Student.create({
      studentName,
      age,
      city,
      country,
      education,
      email,
      gender,
      parentName,
      phoneNumber,
      studentPhoto: photoUrl, // Add the photo URL
    });

    res.status(201).json({
      success: true,
      message: "Student added successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

export const allStudents = async (req, res) => {
  try {
    let students = await Student.find({});

    if (!students) return next(new ErrorHandler("Student not found", 404));

    res.json({
      success: true,
      students,
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

    const students = await Student.find({}).limit(limit).skip(skip);

    if (!students) {
      if (students.length === 0) {
        return res.status(404).json({
          message: "No students were found",
          students,
        });
      }
      next(new ErrorHandler(`No students were found on page:${page}`, 404));
    }

    const totalStudents = await Student.countDocuments({});
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

export const deleteStudentById = async (req, res, next) => {
  const student = await Student.findById(req.params.id);
  if (!student) return next(new ErrorHandler("Student doesn't exist", 404));
  await student.deleteOne();
  res.status(204).end();
  // const { email } = req.body;
  // const emailMatch = await Student.findOne({ email });
  // console.log(emailMatch, email, "emailmatch");

  // if (!emailMatch)
  //   return next(
  //     new ErrorHandler("Student doesn't exist, email not found", 404)
  //   );

  // await Student.deleteOne({ email });
  // res.status(204).end();
};
