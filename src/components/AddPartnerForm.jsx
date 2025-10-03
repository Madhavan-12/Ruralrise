import React, { useState } from "react";

const AddPartnerForm = ({ addPartner }) => {
  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !percentage) return;

    // Send the image URL temporarily
    addPartner({
      name,
      percentage: Number(percentage),
      image: imageFile ? URL.createObjectURL(imageFile) : null,
    });

    // Reset form
    setName("");
    setPercentage("");
    setImageFile(null);
    setPreview(null);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded-md">
      <h2 className="font-bold mb-2">Add Partner</h2>

      <input
        type="text"
        placeholder="Partner Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
      />

      <input
        type="number"
        placeholder="Commission %"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="border p-2 mr-2 mb-2 w-full"
      />

      {/* Preview */}
      {preview && (
        <div className="mb-2">
          <p className="text-sm mb-1">Preview:</p>
          <img src={preview} alt="Preview" className="h-24 object-contain border rounded-md" />
        </div>
      )}

      <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
        Add
      </button>
    </form>
  );
};

export default AddPartnerForm;
