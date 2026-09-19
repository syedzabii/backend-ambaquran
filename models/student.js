import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true, trim: true },
    email: { type: String, sparse: true, unique: true, lowercase: true },
    phoneNumber: { type: String, default: "N/A" },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
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