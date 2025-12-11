import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 gap-3">
              <Image
                src="/images/Favico.png"
                alt="Worry less Meds Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="text-3xl lg:text-4xl font-light italic tracking-wide leading-tight">
                <span 
                  className="text-gray-600"
                  style={{
                    textShadow: '0 2px 4px rgba(102, 126, 234, 0.3)'
                  }}
                >
                  Worry less{' '}
                </span>
                <span 
                  className="text-[#667eea]"
                  style={{
                    textShadow: '0 2px 4px rgba(102, 126, 234, 0.3)'
                  }}
                >
                  Meds
                </span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Smart medication reminders for peace of mind
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Legal
            </h4>
            <div className="flex flex-col space-y-3">
               <a 
                 href="/privacy" 
                 className="text-gray-600 hover:text-[#667eea] transition-colors duration-200 inline-flex items-center group"
               >
                <span>Privacy Policy</span>
                <svg className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
               <a 
                 href="/delete-account" 
                 className="text-gray-600 hover:text-[#667eea] transition-colors duration-200 inline-flex items-center group"
               >
                <span>Delete Account</span>
                <svg className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

           {/* Contact/Social placeholder */}
           <div className="space-y-4">
             <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
               Connect
             </h4>
             <p className="text-gray-600 text-sm">
               Questions or feedback? We'd love to hear from you.
             </p>
             <a 
               href="mailto:support@worrylessmeds.com" 
               className="text-[#10b981] hover:text-[#059669] transition-colors duration-200 inline-flex items-center group text-sm font-medium"
             >
               <span>support@worrylessmeds.com</span>
               <svg className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
             </a>
           </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2025 Worry less Meds. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm flex items-center">
              Made with <span className="mx-1 text-red-500">❤️</span> for families everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}