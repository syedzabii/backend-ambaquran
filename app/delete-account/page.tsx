import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DeleteAccount() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How to Delete Your Account
            </h1>
            <p className="text-lg text-gray-600">
              Worry Less Meds
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last Updated: 13th October 2025
            </p>
          </div>

          {/* Warning Box */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-red-800">Important Warning</h3>
                <p className="text-red-700 mt-1">
                  Account deletion is permanent and cannot be reversed. All your data will be permanently removed from our systems.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                If you wish to delete your account and all associated data from Worry Less Meds, please follow these steps:
              </p>
            </section>

            {/* Step 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">STEP 1: ACCESS YOUR PROFILE</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                <li>Open the Worry Less Meds app on your device</li>
                <li>Navigate to your profile or account settings</li>
                <li>Look for "Account Settings" or "Profile" option</li>
              </ol>
            </section>

            {/* Step 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">STEP 2: FIND DELETE ACCOUNT OPTION</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                <li>In your profile/settings screen, scroll down to find account management options</li>
                <li>Look for "Delete Account" or "Remove Account" option</li>
                <li>This option is typically located at the bottom of the settings menu</li>
              </ol>
            </section>

            {/* Step 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">STEP 3: CONFIRM ACCOUNT DELETION</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                <li>Tap on "Delete Account" option</li>
                <li>You will be prompted to confirm your decision</li>
                <li>Read the warning message carefully as this action is irreversible</li>
                <li>Enter your password or provide additional verification if prompted</li>
                <li>Tap "Confirm Delete" or "Yes, Delete My Account"</li>
              </ol>
            </section>

            {/* Step 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">STEP 4: ACCOUNT DELETION PROCESS</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                <li>Your account deletion request will be processed immediately</li>
                <li>All your personal data will be permanently removed from our servers</li>
                <li>This includes:</li>
              </ol>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-8 mt-4">
                <li>Your profile information (email, display name)</li>
                <li>All medication data and schedules</li>
                <li>Medication adherence history</li>
                <li>Care group memberships</li>
                <li>Notification preferences</li>
                <li>Any other associated data</li>
              </ul>
            </section>

            {/* What Happens After Deletion */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">WHAT HAPPENS AFTER DELETION:</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>You will be logged out of the app automatically</li>
                <li>All your data will be permanently deleted from our systems</li>
                <li>You will no longer receive push notifications</li>
                <li>You will be removed from any care groups you were part of</li>
                <li>This action cannot be undone</li>
              </ul>
            </section>

            {/* Alternative Method */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">ALTERNATIVE METHOD - CONTACT SUPPORT:</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you cannot find the delete account option in the app or encounter any issues:
              </p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                <li>Send an email to: <strong>support@worrylessmeds.com</strong></li>
                <li>Use the subject line: "Account Deletion Request"</li>
                <li>Include the following information:</li>
              </ol>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-8 mt-4">
                <li>Your registered email address</li>
                <li>Your display name in the app</li>
                <li>Confirmation that you want to permanently delete your account</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our support team will process your request within 24-48 hours.
              </p>
            </section>

            {/* Important Notes */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">IMPORTANT NOTES:</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Account deletion is permanent and cannot be reversed</li>
                <li>Make sure to inform any caregivers or family members before deleting your account</li>
                <li>If you're a caregiver, consider transferring care responsibilities to another caregiver before deletion</li>
                <li>You can create a new account later if needed, but all previous data will be lost</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">DATA RETENTION:</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Your data will be completely removed from our servers within 30 days of account deletion</li>
                <li>We do not retain any personal information after account deletion</li>
                <li>Backup copies (if any) will also be deleted according to our data retention policy</li>
              </ul>
            </section>

            {/* Questions or Concerns */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">QUESTIONS OR CONCERNS:</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about account deletion or need assistance, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> support@worrylessmeds.com
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Jagan Arcade, 4th Floor, 1st main Road, Post, Anandnagar, RT Nagar, Bengaluru, Karnataka 560032
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
