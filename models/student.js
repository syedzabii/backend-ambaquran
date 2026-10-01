import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
    },
    email: {
      type: String,
      sparse: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"],
    },
    phoneNumber: { type: String, default: "N/A" },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [1, "Age must be a valid positive number"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: {
        values: ["Male", "Female", "Other"],
        message: "Gender must be one of: Male, Female, Other",
      },
    },
    education: { type: String, default: "Not Specified" },
    parentName: { type: String, default: "N/A" },
    city: { type: String, default: "N/A" },
    country: { type: String, default: "N/A" },
    studentPhoto: {
      type: mongoose.Schema.Types.Mixed, // Supports both string URL and { url, publicId } object
    },
    rollNumber: { type: String, sparse: true, unique: true },
    status: {
      type: String,
      enum: ["PENDING", "APPROVED", "REJECTED"],
      default: "PENDING",
      index: true,
    },
    appliedAt: { type: Date, default: Date.now },
    enrolledAt: { type: Date },
  },
  { timestamps: true }
);

export const Student = mongoose.model("Student", studentSchema);