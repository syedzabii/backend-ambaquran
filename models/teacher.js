import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [18, "Age must be at least 18"],
    max: [100, "Age cannot exceed 100"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: {
      values: ["male", "female", "other"],
      message: "Gender must be one of: male, female, other",
    },
  },
  qualification: {
    type: String,
    required: [true, "Qualification is required"],
    trim: true,
  },
  experience: {
    type: String,
    required: [true, "Experience level is required"],
    enum: {
      values: ["beginner", "intermediate", "advanced", "expert"],
      message: "Experience must be one of: beginner, intermediate, advanced, expert",
    },
  },
  specializations: {
    type: [String],
    required: [true, "At least one specialization is required"],
    validate: {
      validator: function(v) {
        return v.length >= 1;
      },
      message: "At least one specialization is required",
    },
    enum: {
      values: ["noorani", "nazeera", "hifz", "tajweed"],
      message: "Specializations must be from: noorani, nazeera, hifz, tajweed",
    },
  },
  languages: {
    type: [String],
    required: [true, "At least one language is required"],
    validate: {
      validator: function(v) {
        return v.length >= 1;
      },
      message: "At least one language is required",
    },
    enum: {
      values: ["english", "arabic", "urdu", "hindi", "bengali", "turkish", "malay", "indonesian"],
      message: "Languages must be from: english, arabic, urdu, hindi, bengali, turkish, malay, indonesian",
    },
  },
  availability: {
    type: String,
    required: [true, "Availability is required"],
    enum: {
      values: ["full-time", "part-time", "weekends", "evenings", "flexible"],
      message: "Availability must be one of: full-time, part-time, weekends, evenings, flexible",
    },
  },
  bio: {
    type: String,
    required: [true, "Bio is required"],
    maxlength: [1000, "Bio cannot exceed 1000 characters"],
    trim: true,
  },
  termsAccepted: {
    type: Boolean,
    required: [true, "Terms acceptance is required"],
    validate: {
      validator: function(v) {
        return v === true;
      },
      message: "Terms must be accepted",
    },
  },
  status: {
    type: String,
    default: "pending_approval",
    enum: ["pending_approval", "approved", "rejected", "active", "inactive"],
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

// Create compound index for email uniqueness
teacherSchema.index({ email: 1 }, { unique: true });

export const Teacher = mongoose.model("Teacher", teacherSchema);
