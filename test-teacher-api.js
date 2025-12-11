// Test file for Teacher Registration API
// This file demonstrates how to use the teacher registration endpoint

const API_BASE_URL = 'http://localhost:8000/api/v1/teacher';

// Example valid teacher registration data
const validTeacherData = {
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
  bio: "I am a dedicated Quran teacher with 4 years of experience teaching children and adults. I specialize in Noorani Qaida and Hifz programs. My teaching approach focuses on proper pronunciation and understanding of the Holy Quran.",
  termsAccepted: true
};

// Example invalid teacher registration data (for testing validation)
const invalidTeacherData = {
  firstName: "", // Missing required field
  lastName: "Hassan",
  email: "invalid-email", // Invalid email format
  phone: "+1234567890",
  age: 16, // Below minimum age
  gender: "invalid", // Invalid gender
  qualification: "Hafiz",
  experience: "beginner",
  specializations: [], // Empty array
  languages: ["english"],
  availability: "full-time",
  bio: "Short bio",
  termsAccepted: false // Not accepted
};

// Function to test the API
async function testTeacherRegistration() {
  console.log('Testing Teacher Registration API...\n');

  // Test 1: Valid registration
  console.log('Test 1: Valid Teacher Registration');
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validTeacherData)
    });

    const result = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // Test 2: Invalid registration (validation errors)
  console.log('Test 2: Invalid Teacher Registration (Validation Errors)');
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invalidTeacherData)
    });

    const result = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // Test 3: Duplicate email registration
  console.log('Test 3: Duplicate Email Registration');
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validTeacherData) // Same email as Test 1
    });

    const result = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Function to test getting all teachers (requires authentication)
async function testGetAllTeachers() {
  console.log('\nTesting Get All Teachers API...\n');
  console.log('Note: This endpoint requires authentication');
  console.log('You would need to include a valid JWT token in the Authorization header');
  
  // Example of how it would be called with authentication
  /*
  try {
    const response = await fetch(`${API_BASE_URL}/all`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer YOUR_JWT_TOKEN_HERE',
        'Content-Type': 'application/json',
      }
    });

    const result = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
  */
}

// Run tests
if (typeof window === 'undefined') {
  // Node.js environment
  testTeacherRegistration().then(() => {
    testGetAllTeachers();
  });
} else {
  // Browser environment
  console.log('This test file is designed to run in Node.js environment');
  console.log('You can use the example data to test the API manually');
}

// Export for use in other files
export { validTeacherData, invalidTeacherData, testTeacherRegistration, testGetAllTeachers };
