import React, { useState } from "react";
import AddAnimalForm from "../components/AddAnimalForm";
import AddPartnerForm from "../components/AddPartnerForm";

const Add = ({ addAnimal, addPartner, addImage }) => {
  const [imageName, setImageName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [activeTab, setActiveTab] = useState("animals"); // "animals", "partners", "images"

  const handleImageSubmit = (e) => {
    e.preventDefault();
    if (imageFile) {
      addImage({
        name: imageName || imageFile.name,
        url: URL.createObjectURL(imageFile),
      });
      setImageName("");
      setImageFile(null);
      e.target.reset();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">
          ➕ Add New Records
        </h1>
        <p className="text-gray-600 text-lg">Expand your Rural Rise network</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-8 bg-green-50 p-2 rounded-2xl border border-green-200">
        {[
          { id: "animals", label: "🐄 Animals", icon: "🐄" },
          { id: "partners", label: "🤝 Partners", icon: "🤝" },
          { id: "images", label: "🖼️ Images", icon: "🖼️" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-white text-green-700 shadow-lg border border-green-200 transform scale-105"
                : "text-gray-600 hover:text-green-600 hover:bg-white/50"
            }`}
          >
            <span className="text-lg mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animals Tab */}
      {activeTab === "animals" && (
        <div className="bg-white rounded-2xl shadow-lg border border-green-200 p-6 mb-6 transform transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold text-green-800">Add Animal Product</h2>
          </div>
          <AddAnimalForm addAnimal={addAnimal} />
        </div>
      )}

      {/* Partners Tab */}
      {activeTab === "partners" && (
        <div className="bg-white rounded-2xl shadow-lg border border-green-200 p-6 mb-6 transform transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold text-green-800">Add Business Partner</h2>
          </div>
          <AddPartnerForm addPartner={addPartner} />
        </div>
      )}

      {/* Images Tab */}
      {activeTab === "images" && (
        <div className="bg-white rounded-2xl shadow-lg border border-green-200 p-6 mb-6 transform transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-amber-500 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold text-green-800">Upload Product Image</h2>
          </div>

          <form onSubmit={handleImageSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📝 Product Name
              </label>
              <input
                type="text"
                placeholder="e.g., Organic Milk, Fresh Eggs..."
                value={imageName}
                onChange={(e) => setImageName(e.target.value)}
                className="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🖼️ Choose Image
              </label>
              <div className="border-2 border-dashed border-green-300 rounded-2xl p-6 text-center bg-green-50/50 hover:bg-green-50 transition-colors duration-300">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer block"
                >
                  <div className="text-4xl mb-2">📁</div>
                  <p className="text-gray-600 mb-2">
                    {imageFile ? imageFile.name : "Click to select an image"}
                  </p>
                  <p className="text-sm text-gray-500">PNG, JPG, JPEG up to 5MB</p>
                </label>
              </div>
            </div>

            {/* Preview */}
            {imageFile && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <h3 className="font-semibold text-amber-800 mb-3">👁️ Preview</h3>
                <div className="flex items-center space-x-4">
                  <img
                    src={URL.createObjectURL(imageFile)}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded-lg border-2 border-amber-300"
                  />
                  <div>
                    <p className="font-medium text-amber-700">{imageFile.name}</p>
                    <p className="text-sm text-amber-600">
                      {(imageFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!imageFile}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                imageFile
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              🚀 Upload Image
            </button>
          </form>
        </div>
      )}

      {/* Info Card */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center">
        <div className="text-3xl mb-2">🌱</div>
        <h3 className="text-xl font-bold mb-2">Growing Rural Rise Together</h3>
        <p className="text-green-100">
          Every addition helps strengthen our agricultural community
        </p>
      </div>
    </div>
  );
};

export default Add;