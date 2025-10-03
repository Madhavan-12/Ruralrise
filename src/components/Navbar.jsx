import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) => 
    `relative px-4 py-2 font-semibold transition-all duration-300 group ${
      isActive 
        ? "text-green-700 font-bold" 
        : "text-white hover:text-yellow-200"
    }`;

  return (
    <nav className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 shadow-2xl border-b-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-3 group cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative">
              <div className="text-4xl">🌾</div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                RuralRise
              </span>
              <span className="text-xs text-green-200 italic group-hover:text-yellow-200 transition-colors duration-300">
                Empowering rural communities
              </span>
            </div>
          </NavLink>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1 bg-green-800/30 backdrop-blur-sm rounded-2xl p-1 border border-green-500/20">
            {[
              { path: "/", label: "Home", icon: "🏠" },
              { path: "/animals", label: "Animals", icon: "🐄" },
              { path: "/partners", label: "Partners", icon: "🤝" },
              { path: "/add", label: "Add", icon: "➕" },
              { path: "/about", label: "About", icon: "🌱" }
            ].map((item) => (
              <NavLink 
                key={item.path}
                to={item.path}
                className={linkClass}
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center space-x-2">
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded-t-full transform scale-x-105"></div>
                    )}
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 rounded-xl scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* User/Action Button */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2 bg-green-800/40 px-4 py-2 rounded-full border border-green-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-100 text-sm font-medium">Live</span>
            </div>
            
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 border-2 border-yellow-300">
              Join Us
            </button>
          </div>
        </div>

        {/* Mobile menu button (hidden by default) */}
        <div className="md:hidden flex justify-center mt-4">
          <div className="bg-green-800/30 rounded-full px-4 py-1">
            <span className="text-green-200 text-sm">🌱 Fresh from farms daily</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-60"></div>
    </nav>
  );
};

export default Navbar;