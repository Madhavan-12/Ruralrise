import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Add from "./pages/Add";
import AnimalList from "./components/AnimalList";
import PartnerList from "./components/PartnerList";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  // Images state (shared between Home & Add)
  const [images, setImages] = useState([
    { id: 1, url: "/images/Cow.jpg", name: "Cow" },
    { id: 2, url: "/images/Goat.jpg", name: "Goat" },
    { id: 3, url: "/images/Wheat.jpg", name: "Wheat" },
  ]);

  const [animals, setAnimals] = useState([
    { id: 1, name: "Cow", product: "Milk", income: 500 },
    { id: 2, name: "Hen", product: "Eggs", income: 300 },
  ]);

  const [partners, setPartners] = useState([
    { id: 1, name: "FreshMart", percentage: 10 },
  ]);

  const totalIncome = animals.reduce((sum, a) => sum + a.income, 0);

  // Methods to add data
  const addAnimal = (animal) => setAnimals([...animals, { ...animal, id: Date.now() }]);
  const addPartner = (partner) => setPartners([...partners, { ...partner, id: Date.now() }]);
  const addImage = (image) => setImages([...images, { ...image, id: Date.now() }]);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home images={images} totalIncome={totalIncome} />} />
          <Route path="/animals" element={<AnimalList animals={animals} />} />
          <Route path="/partners" element={<PartnerList partners={partners} totalIncome={totalIncome} />} />
          <Route path="/add" element={<Add addAnimal={addAnimal} addPartner={addPartner} addImage={addImage} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
