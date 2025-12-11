// Test file for Teacher Approval Workflow
// This demonstrates the next steps after teacher registration

const API_BASE_URL = 'http://localhost:8000/api/v1/teacher';
const TEACHER_ID = '689ef9719afca95eb7bb15eb'; // Replace with actual teacher ID

// Function to test getting pending teachers
async function testGetPendingTeachers() {
  console.log('Testing Get Pending Teachers...\n');
  
  try {
    const response = await fetch(`${API_BASE_URL}/pagination?status=pending_approval`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer YOUR_JWT_TOKEN_HERE', // Admin token required
        'Content-Type': 'application/json',
      }
    });

    const result = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Function to test approving a teacher
async function testApproveTeacher() {
  console.log('\nTesting Teacher Approval...\n');
  
  try {
    const response = await fetch(`${API_BASE_URL}/${TEACHER_ID}/status`, {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer YOUR_JWT_TOKEN_HERE', // Admin token required
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'approved'
      })
    });

    const result = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Function to test rejecting a teacher
async function testRejectTeacher() {
  console.log('\nTesting Teacher Rejection...\n');
  
  try {
    const response = await fetch(`${API_BASE_URL}/${TEACHER_ID}/status`, {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer YOUR_JWT_TOKEN_HERE', // Admin token required
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'rejected'
      })
    });

    const result = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Function to test getting approved teachers
async function testGetApprovedTeachers() {
  console.log('\nTesting Get Approved Teachers...\n');
  
  try {
    const response = await fetch(`${API_BASE_URL}/pagination?status=approved`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer YOUR_JWT_TOKEN_HERE', // Admin token required
        'Content-Type': 'application/json',
      }
    });

    const result = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run tests
if (typeof window === 'undefined') {
  // Node.js environment
  console.log('Teacher Approval Workflow Test\n');
  console.log('Note: You need to replace YOUR_JWT_TOKEN_HERE with a valid admin JWT token');
  console.log('Also update TEACHER_ID with the actual teacher ID from your registration response\n');
  
  // Uncomment the functions you want to test:
  // testGetPendingTeachers();
  // testApproveTeacher();
  // testRejectTeacher();
  // testGetApprovedTeachers();
  
  console.log('To run these tests:');
  console.log('1. Get a valid admin JWT token');
  console.log('2. Replace YOUR_JWT_TOKEN_HERE in the functions');
  console.log('3. Update TEACHER_ID with your actual teacher ID');
  console.log('4. Uncomment the test functions you want to run');
} else {
  // Browser environment
  console.log('This test file is designed to run in Node.js environment');
  console.log('You can use the example requests to test the API manually');
}

// Export for use in other files
export { 
  testGetPendingTeachers, 
  testApproveTeacher, 
  testRejectTeacher, 
  testGetApprovedTeachers 
};
