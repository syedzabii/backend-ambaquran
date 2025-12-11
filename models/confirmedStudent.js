import mongoose from "mongoose";

const schema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    unique: true
  },
  year: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'graduated', 'withdrawn', 'suspended'],
    default: 'active'
  },
  age: {},
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  parentName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  education: {
    type: String,
  },
  studentPhoto: {
    type: String,
  },
});

export const ConfirmedStudent = mongoose.model("ConfirmedStudent", schema);
