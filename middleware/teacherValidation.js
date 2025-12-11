import ErrorHandler from "../utils/ErrorHandler.js";

// Rate limiting store (in production, use Redis or similar)
const requestCounts = new Map();

export const validateTeacherRegistration = (req, res, next) => {
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

    const errors = [];

    // Validate required fields
    if (!firstName || firstName.trim().length === 0) {
      errors.push({ field: "firstName", message: "First name is required" });
    }

    if (!lastName || lastName.trim().length === 0) {
      errors.push({ field: "lastName", message: "Last name is required" });
    }

    if (!email || email.trim().length === 0) {
      errors.push({ field: "email", message: "Email is required" });
    } else {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(email)) {
        errors.push({ field: "email", message: "Please enter a valid email" });
      }
    }

    if (!phone || phone.trim().length === 0) {
      errors.push({ field: "phone", message: "Phone number is required" });
    }

    if (!age || isNaN(age)) {
      errors.push({ field: "age", message: "Age is required and must be a number" });
    } else if (age < 18 || age > 100) {
      errors.push({ field: "age", message: "Age must be between 18 and 100" });
    }

    if (!gender || !["male", "female", "other"].includes(gender)) {
      errors.push({ field: "gender", message: "Gender must be one of: male, female, other" });
    }

    if (!qualification || qualification.trim().length === 0) {
      errors.push({ field: "qualification", message: "Qualification is required" });
    }

    if (!experience || !["beginner", "intermediate", "advanced", "expert"].includes(experience)) {
      errors.push({ field: "experience", message: "Experience must be one of: beginner, intermediate, advanced, expert" });
    }

    if (!specializations || !Array.isArray(specializations) || specializations.length === 0) {
      errors.push({ field: "specializations", message: "At least one specialization is required" });
    } else {
      const validSpecializations = ["noorani", "nazeera", "hifz", "tajweed"];
      const invalidSpecializations = specializations.filter(spec => !validSpecializations.includes(spec));
      if (invalidSpecializations.length > 0) {
        errors.push({ field: "specializations", message: "Invalid specializations. Must be from: noorani, nazeera, hifz, tajweed" });
      }
    }

    if (!languages || !Array.isArray(languages) || languages.length === 0) {
      errors.push({ field: "languages", message: "At least one language is required" });
    } else {
      const validLanguages = ["english", "arabic", "urdu", "hindi", "bengali", "turkish", "malay", "indonesian"];
      const invalidLanguages = languages.filter(lang => !validLanguages.includes(lang));
      if (invalidLanguages.length > 0) {
        errors.push({ field: "languages", message: "Invalid languages. Must be from: english, arabic, urdu, hindi, bengali, turkish, malay, indonesian" });
      }
    }

    if (!availability || !["full-time", "part-time", "weekends", "evenings", "flexible"].includes(availability)) {
      errors.push({ field: "availability", message: "Availability must be one of: full-time, part-time, weekends, evenings, flexible" });
    }

    if (!bio || bio.trim().length === 0) {
      errors.push({ field: "bio", message: "Bio is required" });
    } else if (bio.length > 1000) {
      errors.push({ field: "bio", message: "Bio cannot exceed 1000 characters" });
    }

    if (termsAccepted !== true) {
      errors.push({ field: "termsAccepted", message: "Terms must be accepted" });
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
      });
    }

    next();
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

export const rateLimitTeacherRegistration = (req, res, next) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Maximum 5 registration attempts per 15 minutes

  if (!requestCounts.has(clientIP)) {
    requestCounts.set(clientIP, { count: 1, resetTime: now + windowMs });
  } else {
    const clientData = requestCounts.get(clientIP);
    
    if (now > clientData.resetTime) {
      // Reset window
      requestCounts.set(clientIP, { count: 1, resetTime: now + windowMs });
    } else {
      clientData.count++;
      
      if (clientData.count > maxRequests) {
        return res.status(429).json({
          success: false,
          message: "Too many registration attempts. Please try again later.",
        });
      }
    }
  }

  next();
};
