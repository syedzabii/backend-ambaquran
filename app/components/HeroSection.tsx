'use client';

export default function HeroSection() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white px-6 py-20 font-sans min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
           {/* Left Column - Text Content */}
           <div className="space-y-8">
             {/* Main Headline */}
             <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-gray-900 tracking-tight">
               Stop Worrying.
               <br />
               <span className="text-blue-600">
                 Start Knowing.
               </span>
             </h1>
             <p className="text-sm uppercase tracking-[0.35em] text-blue-600">Best pill reminder companion</p>
             
             {/* Subheadline */}
             <p className="text-xl text-gray-600 leading-relaxed">
               Your parents miss medications. You can't always be there. 
               <span className="font-semibold text-gray-900"> Get instant alerts</span> when they <span className="text-green-600 font-semibold">take</span> or <span className="text-red-600 font-semibold">forget</span> their meds.
             </p>

             {/* Stats */}
             <div className="flex items-center gap-8 py-6">
               <div>
                 <p className="text-4xl font-bold text-gray-900">125K+</p>
                 <p className="text-sm text-gray-600 mt-1.5 leading-tight">Deaths yearly from<br/>missed medications</p>
               </div>
               <div className="h-16 w-px bg-gray-300"></div>
               <div>
                 <p className="text-4xl font-bold text-blue-600">Join Now</p>
                 <p className="text-sm text-gray-600 mt-1.5 leading-tight">Be an early<br/>adopter</p>
               </div>
             </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.worrylessmeds.com&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Get it on Google Play
                </a>
                
                <a 
                  href="https://apps.apple.com/in/app/worry-less-meds/id6755103983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-gray-900/25 flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  Download on App Store
                </a>
              </div>

              <button 
                onClick={scrollToFeatures}
                className="text-gray-700 px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-100 active:bg-gray-200 transition-all border border-gray-300 w-full sm:w-auto"
              >
                See How It Works →
              </button>
            </div>

             {/* Trust Badge */}
             <div className="flex items-center gap-2 pt-2">
               <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
               </svg>
               <p className="text-sm text-gray-500">HIPAA compliant • Privacy protected</p>
             </div>
           </div>

          {/* Right Column - Visual */}
          <div className="flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative">
              <div className="w-[320px] sm:w-[400px] lg:w-[450px] h-[400px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 relative z-10">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Smart Alerts</h3>
                    <p className="text-gray-600 mb-6">Real-time notifications when medications are taken or missed</p>
                    <div className="bg-white rounded-lg shadow-md p-4 text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-gray-900">Mom took her medication</p>
                          <p className="text-xs text-gray-500">8:00 AM • Blood pressure pill</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-0 top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl opacity-60"></div>
            </div>
          </div>
         </div>
       </div>
     </div>
   );
 }