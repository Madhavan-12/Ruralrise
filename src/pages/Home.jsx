import React from "react";
import Banner from "../components/Banner";
import WhyChoose from "../components/Whychoose";

const Home = ({ images, totalIncome }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <Banner />
      <WhyChoose />

      {/* Product Images Section */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            🌾 Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of farm-fresh products, cultivated with care and dedication
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:scale-105 transition-all duration-300 ease-out border border-green-100"
            >
              <div className="overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.name} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
                />
              </div>
              <div className="p-4 text-center">
                <span className="font-semibold text-green-800 text-lg bg-green-50 px-3 py-1 rounded-full inline-block">
                  {img.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Income Section */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Total Income from Animals</h3>
                <p className="text-green-100 text-sm">Annual revenue generated</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">₹{totalIncome}</div>
              <div className="text-green-200 text-sm">+12% from last year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing at bottom */}
      <div className="h-8"></div>
    </div>
  );
};

export default Home;