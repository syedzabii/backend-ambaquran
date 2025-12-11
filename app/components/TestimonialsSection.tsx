const testimonials = [
  {
    name: "Syed",
    location: "Bangalore",
    initial: "R",
    quote: "Finally, I don't have to call my mother 5 times a day to check if she took her pills.",
    rating: 5,
    colorFrom: "from-blue-50",
    borderColor: "border-blue-100",
    bgColor: "bg-blue-600",
  },
  {
    name: "Sam",
    location: "Bangalore",
    initial: "P",
    quote: "Often juggling work and family life, I tend to forget to take my medications. This app keeps me on track and reminds me",
    rating: 5,
    colorFrom: "from-green-50",
    borderColor: "border-green-100",
    bgColor: "bg-green-600",
  },
  {
    name: "Anonymous User",
    location: "Delhi",
    initial: "A",
    quote: "No more missed doses. This app is a lifesaver.",
    rating: 4,
    colorFrom: "from-purple-50",
    borderColor: "border-purple-100",
    bgColor: "bg-purple-600",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Real Stories, Real Peace of Mind
          </h2>
          <p className="text-lg text-gray-600">Join families who sleep better at night</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${testimonial.colorFrom} to-white rounded-2xl p-8 border ${testimonial.borderColor} hover:shadow-xl transition-shadow`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  {/* <p className="text-sm text-gray-600">{testimonial.location}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Banner */}
        {/* <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gray-50 px-8 py-6 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold text-sm">R</div>
                <div className="w-10 h-10 bg-green-600 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold text-sm">P</div>
                <div className="w-10 h-10 bg-purple-600 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold text-sm">A</div>
                <div className="w-10 h-10 bg-orange-600 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold text-sm">+</div>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Families trust us</p>
              </div>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">4.8★</p>
              <p className="text-sm text-gray-600">Average rating</p>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}