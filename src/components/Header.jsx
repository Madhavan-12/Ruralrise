import React from "react";

const Header = ({ totalIncome }) => {
  return (
    <header className="bg-green-500 text-white p-4 rounded-lg mb-4 text-center">
      <h1 className="text-2xl font-bold">🌾 Farm Fresh Partner Marketing</h1>
      <h2 className="mt-2">Total Farmer Income: ₹{totalIncome}</h2>
    </header>
  );
};

export default Header;
