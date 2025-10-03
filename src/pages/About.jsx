import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Hero Section with Girl Speaking */}
      <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Container */}
          <div className="lg:w-2/5 relative">
            <img
              src="/images/Hero.jpg"
              alt="Farmers working"
              className="w-full h-96 lg:h-auto object-cover lg:min-h-[500px]"
            />
            {/* Speech Bubble */}
            <div className="absolute top-6 right-6 lg:top-10 lg:right-10 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl max-w-xs transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -left-3 top-6 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent"></div>
              <p className="text-sm text-gray-700 font-medium">
                "Join us in building a sustainable future for farming communities!"
              </p>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="lg:w-3/5 p-8 lg:p-12">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-6">
              About RuralRise
            </h1>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                RuralRise is dedicated to helping farmers market their products directly to consumers. 
                We focus on <span className="font-semibold text-green-700">transparency</span>, <span className="font-semibold text-green-700">fair trade</span>, and ensuring farmers receive the right income for their hard work.
              </p>
              <p className="text-lg leading-relaxed">
                Through our platform, customers can access fresh dairy, poultry, vegetables, and more, 
                all sourced <span className="font-semibold text-green-700">responsibly</span> and <span className="font-semibold text-green-700">sustainably</span>.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { number: "500+", label: "Farmers" },
                { number: "50+", label: "Products" },
                { number: "10k+", label: "Customers" },
                { number: "100%", label: "Natural" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-3 bg-white/80 rounded-xl shadow-sm">
                  <div className="text-xl font-bold text-green-700">{stat.number}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to revolutionizing the way you experience farm-fresh products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              image: "/images/Milk.jpg",
              title: "Fresh Dairy Products",
              description: "Milk and other dairy products directly from farms.",
              icon: "🥛"
            },
            {
              image: "/images/Egg.jpg",
              title: "Quality Eggs",
              description: "Hen and duck eggs delivered fresh to your doorstep.",
              icon: "🥚"
            },
            {
              image: "/images/Vegetables.jpg",
              title: "Organic Vegetables",
              description: "Farm-to-table vegetables grown sustainably and naturally.",
              icon: "🥦"
            },
            {
              image: "/images/Farmer3.jpg",
              title: "Supporting Farmers",
              description: "We ensure fair-trade partnerships and support rural communities.",
              icon: "👨‍🌾"
            },
            {
              image: "/images/Sustainable.jpg",
              title: "Eco-friendly Practices",
              description: "Sustainable farming to protect the environment for future generations.",
              icon: "🌍"
            },
            {
              image: "/images/Delivery.jpg",
              title: "Fast Delivery",
              description: "Fresh products delivered quickly to maintain quality and freshness.",
              icon: "🚚"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-green-100"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 text-2xl bg-white/90 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                  {item.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 text-center text-white shadow-2xl">
        <div className="max-w-3xl mx-auto">
          <div className="text-4xl mb-4">🌱</div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-green-100 leading-relaxed">
            To create a sustainable ecosystem where farmers thrive, consumers get the freshest products, 
            and our planet benefits from eco-friendly agricultural practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;