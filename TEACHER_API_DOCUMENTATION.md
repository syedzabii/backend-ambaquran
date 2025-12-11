# Teacher Registration API Documentation

## Overview

The Teacher Registration API allows Islamic education teachers to register with the Ambaa ul Uloom platform. Teachers can apply with their qualifications, specializations, and availability preferences.

## Base URL

```
http://localhost:8000/api/v1/teacher
```

## Endpoints

### 1. Teacher Registration

**Endpoint:** `POST /register`

**Description:** Register a new teacher with the platform

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "firstName": "string (required)",
  "lastName": "string (required)", 
  "email": "string (required, valid email format)",
  "phone": "string (required)",
  "age": "number (required, min: 18, max: 100)",
  "gender": "string (required, enum: 'male', 'female', 'other')",
  "qualification": "string (required)",
  "experience": "string (required, enum: 'beginner', 'intermediate', 'advanced', 'expert')",
  "specializations": "array of strings (required, min: 1)",
  "languages": "array of strings (required, min: 1)",
  "availability": "string (required, enum: 'full-time', 'part-time', 'weekends', 'evenings', 'flexible')",
  "bio": "string (required, max: 1000 characters)",
  "termsAccepted": "boolean (required, should be true)"
}
```

**Field Details:**

#### Personal Information:
- `firstName`: Teacher's first name
- `lastName`: Teacher's last name  
- `email`: Valid email address (will be used for login)
- `phone`: Phone number with country code
- `age`: Must be 18 or older
- `gender`: One of: "male", "female", "other"

#### Professional Information:
- `qualification`: Examples: "Hafiz", "Qari", "Islamic Studies Degree", "Certified Tajweed Teacher"
- `experience`: Experience level mapping:
  - "beginner" = 1-2 years
  - "intermediate" = 3-5 years  
  - "advanced" = 6-10 years
  - "expert" = 10+ years

#### Teaching Details:
- `specializations`: Array of course types they can teach:
  - "noorani" (Noorani Qaida)
  - "nazeera" (Nazeera)
  - "hifz" (Hifz)
  - "tajweed" (Advanced Tajweed)

- `languages`: Array of languages they can teach in:
  - "english", "arabic", "urdu", "hindi", "bengali", "turkish", "malay", "indonesian"

- `availability`: Teaching schedule preference:
  - "full-time", "part-time", "weekends", "evenings", "flexible"

- `bio`: Teaching philosophy and experience description (max 1000 characters)

**Success Response (201 Created):**
```json
{
  "success": true,
  "message": "Teacher registration successful",
  "data": {
    "teacherId": "string",
    "email": "string",
    "status": "pending_approval",
    "registrationDate": "2024-01-15T10:30:00Z"
  }
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Email is already registered"
    },
    {
      "field": "specializations", 
      "message": "At least one specialization is required"
    }
  ]
}
```

**Error Response (409 Conflict):**
```json
{
  "success": false,
  "message": "Email already exists"
}
```

**Error Response (429 Too Many Requests):**
```json
{
  "success": false,
  "message": "Too many registration attempts. Please try again later."
}
```

### 2. Get All Teachers (Protected)

**Endpoint:** `GET /all`

**Description:** Retrieve all registered teachers (requires authentication)

**Headers:**
```
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "teacher_id",
      "firstName": "Ahmed",
      "lastName": "Hassan",
      "email": "ahmed.hassan@example.com",
      "status": "pending_approval",
      "registrationDate": "2024-01-15T10:30:00Z",
      // ... other fields
    }
  ]
}
```

### 3. Get Teachers with Pagination (Protected)

**Endpoint:** `GET /pagination?page=1&limit=20`

**Description:** Retrieve teachers with pagination support

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "totalPages": 5,
    "totalTeachers": 100
  }
}
```

### 4. Get Teacher by ID (Protected)

**Endpoint:** `GET /:id`

**Description:** Retrieve a specific teacher by ID

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "_id": "teacher_id",
    "firstName": "Ahmed",
    "lastName": "Hassan",
    // ... all teacher fields
  }
}
```

### 5. Update Teacher Status (Protected)

**Endpoint:** `PATCH /:id/status`

**Description:** Update teacher approval status

**Request Body:**
```json
{
  "status": "approved" // or "rejected", "active", "inactive"
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Teacher status updated successfully",
  "data": {
    "teacherId": "teacher_id",
    "status": "approved"
  }
}
```

### 6. Delete Teacher (Protected)

**Endpoint:** `DELETE /:id`

**Description:** Delete a teacher record

**Success Response (204 No Content):**
No response body

## Validation Rules

1. **Email**: Must be unique, valid email format
2. **Phone**: Valid phone number format
3. **Age**: Must be 18 or older
4. **Specializations**: Must have at least 1 selected
5. **Languages**: Must have at least 1 selected
6. **Bio**: Maximum 1000 characters
7. **All required fields**: Must not be empty
8. **Terms**: Must be accepted (true)

## Rate Limiting

- Maximum 5 registration attempts per IP address per 15 minutes
- Returns 429 status code when limit exceeded

## Example Usage

### cURL Example

```bash
curl -X POST http://localhost:8000/api/v1/teacher/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Ahmed",
    "lastName": "Hassan",
    "email": "ahmed.hassan@example.com",
    "phone": "+1234567890",
    "age": 28,
    "gender": "male",
    "qualification": "Hafiz with Islamic Studies Degree",
    "experience": "intermediate",
    "specializations": ["noorani", "hifz"],
    "languages": ["english", "arabic", "urdu"],
    "availability": "full-time",
    "bio": "I am a dedicated Quran teacher with 4 years of experience teaching children and adults. I specialize in Noorani Qaida and Hifz programs.",
    "termsAccepted": true
  }'
```

### JavaScript Example

```javascript
const teacherData = {
  firstName: "Ahmed",
  lastName: "Hassan",
  email: "ahmed.hassan@example.com",
  phone: "+1234567890",
  age: 28,
  gender: "male",
  qualification: "Hafiz with Islamic Studies Degree",
  experience: "intermediate",
  specializations: ["noorani", "hifz"],
  languages: ["english", "arabic", "urdu"],
  availability: "full-time",
  bio: "I am a dedicated Quran teacher with 4 years of experience teaching children and adults. I specialize in Noorani Qaida and Hifz programs.",
  termsAccepted: true
};

fetch('http://localhost:8000/api/v1/teacher/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(teacherData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

## Status Codes

- `201`: Teacher registered successfully
- `200`: Request successful (GET operations)
- `204`: Teacher deleted successfully
- `400`: Validation errors
- `401`: Unauthorized (missing or invalid token)
- `404`: Teacher not found
- `409`: Email already exists
- `429`: Rate limit exceeded
- `500`: Server error

## Testing

Use the provided `test-teacher-api.js` file to test the API endpoints:

```bash
node test-teacher-api.js
```

## Notes

- Teachers start with "pending_approval" status
- Admin review required for approval
- Email addresses are stored in lowercase
- Registration timestamps are automatically added
- All protected endpoints require valid JWT authentication
