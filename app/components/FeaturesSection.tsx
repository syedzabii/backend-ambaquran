export default function FeaturesSection() {
  return (
    <div id="features-section" className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Everything You Need for Peace of Mind
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Simple app to keep your loved ones safe and healthy
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          
          {/* Feature 1: Smart Reminders */}
          <div className="flex flex-col group">
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden">
              <img 
                src="/images/jp1.jpg" 
                alt="Smart medication reminder notification on smartphone lock screen" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Reminders</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Your parents forget their meds. You worry. <span className="font-semibold text-gray-900">We send you instant alerts</span> so you can rest easy knowing they're taking their medications on time.
            </p>
          </div>

          {/* Feature 2: Real-Time Updates */}
          <div className="flex flex-col group">
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden">
              <img 
                src="/images/jp5.jpg" 
                alt="Real-time dose confirmation notification showing Mom took their Metamorfin dose" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-Time Updates</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-900">Get instant confirmation</span> when they take their medications. Stay connected and informed throughout your busy day.
            </p>
          </div>

          {/* Feature 3: Peace of Mind */}
          <div className="flex flex-col group">
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden">
              <img 
                src="/images/jp6.jpg" 
                alt="Medication details screen showing progress tracking and 7-day history for Metamorfin" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Keep Track of Med History</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              View detailed medication history and progress. <span className="font-semibold text-gray-900">Track adherence patterns</span> and ensure your loved ones stay on schedule.
            </p>
          </div>

        </div>

        {/* Screenshot Label */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Actual app screenshots
          </div>
        </div>
      </div>
    </div>
  );
}