import React from "react";

const PartnerList = ({ partners, totalIncome }) => {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
        🤝 Our Trusted Partners
      </h2>

      {partners.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🌱</div>
          <p className="text-gray-500 text-lg italic">No partners yet. Be the first to join us!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((p) => {
            const commission = (p.percentage / 100) * totalIncome;

            return (
              <div
                key={p.id}
                className="group bg-gradient-to-br from-white via-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden relative"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Partner Image with fancy frame */}
                <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                  <img
                    src={p.image || "/images/Farmer.jpg"}
                    alt={p.name}
                    className="h-32 w-32 object-cover rounded-full border-4 border-white shadow-xl transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Floating percentage badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    {p.percentage}%
                  </div>
                </div>

                {/* Partner Info */}
                <div className="p-6 text-center relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                  
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-3">
                    {p.name}
                  </h3>
                  
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 bg-white/80 py-2 px-4 rounded-lg border border-green-100 shadow-sm">
                      Partnership Share: <span className="font-bold text-green-700">{p.percentage}%</span>
                    </p>
                    
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                      <p className="text-sm font-semibold">💰 Commission Earned</p>
                      <p className="text-xl font-bold mt-1">₹{commission.toFixed(2)}</p>
                    </div>
                  </div>

                  {/* Progress bar indicator */}
                  <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${Math.min(p.percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-300 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-300 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-300 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-300 rounded-br-2xl"></div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PartnerList;