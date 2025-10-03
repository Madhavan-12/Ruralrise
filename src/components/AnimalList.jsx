import React from "react";
import AnimalCard from "./Animalcard";

const AnimalList = ({ animals }) => {
  if (animals.length === 0) {
    return <p className="text-red-500 text-center">No animals/products available</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
};

export default AnimalList;
