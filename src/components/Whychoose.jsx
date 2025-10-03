import React from "react";

const WhyChoose = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-green-50/80 text-gray-800 rounded-3xl shadow-2xl mt-8 p-8 max-w-6xl w-full border border-green-200/60 backdrop-blur-sm">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-green-200/30 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-green-300/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-green-400/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-green-600 via-emerald-700 to-green-800 bg-clip-text text-transparent">
            🌟 Why Choose RuralRise?
          </span>
        </h2>
        
        <div className="grid gap-4">
          <div className="flex items-center gap-4 p-5 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100/50">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">✓</span>
            </div>
            <span className="font-semibold text-gray-700 text-lg">
              Fresh dairy products – Cow milk, goat milk, and more.
            </span>
          </div>
          
          <div className="flex items-center gap-4 p-5 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100/50">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">✓</span>
            </div>
            <span className="font-semibold text-gray-700 text-lg">
              Organic vegetables and crops directly from farms.
            </span>
          </div>
          
          <div className="flex items-center gap-4 p-5 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100/50">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">✓</span>
            </div>
            <span className="font-semibold text-gray-700 text-lg">
              Poultry and meat with guaranteed quality & hygiene.
            </span>
          </div>
          
          <div className="flex items-center gap-4 p-5 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100/50">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">✓</span>
            </div>
            <span className="font-semibold text-gray-700 text-lg">
              Fair-trade partnerships ensuring farmers get the right income.
            </span>
          </div>
          
          <div className="flex items-center gap-4 p-5 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100/50">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">✓</span>
            </div>
            <span className="font-semibold text-gray-700 text-lg">
              Supporting sustainable and eco-friendly farming practices.
            </span>
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full"></div>
    </div>
  );
};

export default WhyChoose;