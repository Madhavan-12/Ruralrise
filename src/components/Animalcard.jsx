import React from "react";

const AnimalCard = ({ animal }) => {
  // Auto pick image based on name (fallback to Cow)
  const imageMap = {
    Cow: "/images/Cow.jpg",
    Hen: "/images/Hen.jpg",
    Goat: "/images/Goat.jpg",
    Carrot: "/images/Carrot.jpg",
    Wheat: "/images/Wheat.jpg",
    Egg:"/images/Egg.jpg",
    Chili:"/images/Chili.jpg"
  };

  const imageSrc = animal.image || imageMap[animal.name] || "/images/Default.png";

  return (
    <div className="bg-gradient-to-br from-white to-green-50 border border-green-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-center group relative">
      
      {/* Product Image with nice frame */}
      <div className="mb-4 flex justify-center">
        <div className="relative">
          <img 
            src={imageSrc} 
            alt={animal.name}
            className="w-28 h-28 object-cover rounded-2xl border-4 border-white shadow-lg group-hover:border-green-200 transition-colors duration-300"
          />
          <div className="absolute inset-0 rounded-2xl border-2 border-green-100 pointer-events-none"></div>
        </div>
      </div>
      
      {/* Animal Name */}
      <h3 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-3">
        {animal.name}
      </h3>
      
      {/* Product Type */}
      <div className="flex items-center justify-center mb-4">
        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold border border-green-200 shadow-sm">
          📦 {animal.product}
        </span>
      </div>
      
      {/* Income with nice styling */}
      <div className="mb-4 p-4 bg-white rounded-xl border border-green-100 shadow-sm">
        <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">Monthly Income</p>
        <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
          ₹{animal.income}
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mx-auto mt-2"></div>
      </div>
      
      {/* Best Seller Badge with animation */}
      {animal.income > 600 && (
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
          ⭐ <span className="drop-shadow-sm">Best Seller!</span>
        </div>
      )}
      
      {/* Subtle hover effect border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-300 transition-colors duration-300 pointer-events-none"></div>
    </div>
  );
};

export default AnimalCard;
