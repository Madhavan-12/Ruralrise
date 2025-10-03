import React, { useState } from "react";

const AddAnimalForm = ({ addAnimal }) => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [income, setIncome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !product || !income) return;
    addAnimal({ name, product, income: Number(income) });
    setName("");
    setProduct("");
    setIncome("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded-md">
      <h2 className="font-bold mb-2">Add Animal/Product</h2>
      <input
        type="text"
        placeholder="Animal Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="number"
        placeholder="Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="border p-2 mr-2"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
};

export default AddAnimalForm;
