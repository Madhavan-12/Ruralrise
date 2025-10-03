import React from "react";

const Banner = () => {
  return (
    <div className="w-full flex justify-center my-6">
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-2xl shadow-2xl flex flex-col md:flex-row items-center md:items-start p-6 md:p-10 max-w-6xl w-full transition-all duration-300 hover:shadow-green-900/20">
        
        {/* 🔹 Left Side: Farmer Image with Discount */}
        <div className="relative flex-shrink-0 mb-6 md:mb-0 md:mr-10 transform hover:scale-105 transition-transform duration-300">
          <img
            src="/images/Farmericon.png"
            alt="Farmer"
            className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-xl"
          />
          <div className="absolute bottom-2 right-2 bg-yellow-400 text-green-900 rounded-full px-4 py-2 text-center shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            <p className="font-bold text-lg">15%</p>
            <p className="text-xs font-semibold">Fresh Products</p>
          </div>
        </div>

        {/* 🔹 Right Side: Text & Contact Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide uppercase bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
            Agriculture is Our Strength
          </h1>
          <p className="text-yellow-300 text-lg mb-2 font-medium">Empowering Farmers • Feeding Nations</p>

          <p className="text-sm md:text-base text-green-100 mb-6 leading-relaxed bg-green-800/30 rounded-lg p-4 backdrop-blur-sm">
            At <span className="font-semibold text-yellow-300">RuralRise</span>, we believe farming is not just a livelihood, 
            but the backbone of our economy. By connecting farmers directly with consumers, 
            we ensure fair prices, fresh products, and a brighter future for rural communities.
          </p>

          {/* 🔹 Contact Information */}
          <div className="space-y-2 text-sm md:text-base bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="flex items-center justify-center md:justify-start gap-2">📞 <span className="font-semibold">+012-3456789</span></p>
            <p className="flex items-center justify-center md:justify-start gap-2">✉️ <span className="font-semibold">ruralrise@email.com</span></p>
            <p className="flex items-center justify-center md:justify-start gap-2">🌐 <span className="font-semibold">www.ruralrise.com</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
