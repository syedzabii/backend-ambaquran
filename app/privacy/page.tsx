import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: 13th October 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">INTRODUCTION</h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy describes how Worry Less Meds ("we," "our," or "us") collects, uses, and protects your information when you use our mobile application (the "App"). By using our App, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">INFORMATION WE COLLECT</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Email address (for account creation and authentication)</li>
                    <li>Display name (e.g., "Mom," "John")</li>
                    <li>User role (caregiver or patient)</li>
                    <li>Account creation and last update timestamps</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Health and Medication Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Medication names and dosages</li>
                    <li>Medication schedules and timing</li>
                    <li>Medication adherence history (taken, missed, delayed, skipped doses)</li>
                    <li>Care group information and patient names</li>
                    <li>Medication review status by patients</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Device and Technical Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Device tokens for push notifications</li>
                    <li>Device connectivity status</li>
                    <li>App usage data and preferences</li>
                    <li>Timezone information for medication scheduling</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Communication Data</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Push notification preferences</li>
                    <li>Notification history and read status</li>
                    <li>Care group membership and relationships</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">HOW WE USE YOUR INFORMATION</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide medication management and reminder services</li>
                <li>Send push notifications for medication reminders</li>
                <li>Enable communication between caregivers and patients</li>
                <li>Track medication adherence and provide health insights</li>
                <li>Maintain and improve our App's functionality</li>
                <li>Ensure proper authentication and account security</li>
              </ul>
            </section>

            {/* Data Storage and Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">DATA STORAGE AND SECURITY</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Your data is stored securely using Google Firebase services</li>
                <li>We implement appropriate security measures to protect your personal information</li>
                <li>Data is encrypted in transit and at rest</li>
                <li>Access to your data is restricted to authorized personnel only</li>
                <li>We use Firebase Authentication for secure user authentication</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">THIRD-PARTY SERVICES</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our App uses the following third-party services:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Google Firebase (authentication, database, messaging)</li>
                <li>Firebase Cloud Messaging (push notifications)</li>
                <li>Flutter Local Notifications (local device notifications)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            {/* Data Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">DATA SHARING</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in app operation (under strict confidentiality agreements)</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">YOUR RIGHTS</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Opt out of push notifications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">DATA RETENTION</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your information for as long as your account is active or as needed to provide services. You may delete your account at any time, which will remove your personal information from our systems.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">CHILDREN'S PRIVACY</h2>
              <p className="text-gray-700 leading-relaxed">
                Our App is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            {/* International Data Transfers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">INTERNATIONAL DATA TRANSFERS</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">CHANGES TO THIS PRIVACY POLICY</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the App. Changes are effective immediately upon posting.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">CONTACT INFORMATION</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
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

            {/* Compliance */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">COMPLIANCE</h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy complies with applicable data protection laws, including GDPR, CCPA, and other relevant regulations. By using our App, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
