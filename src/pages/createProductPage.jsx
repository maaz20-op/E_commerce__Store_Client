import React, { useState } from "react";
import { createProduct } from "../api/product.js";
import { Link, useNavigate } from "react-router-dom";

export default function AdminCreateProduct() {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [productDescription, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState({ img1: null, img2: null, img3: null });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // success or error message

  const categoryOptions = ["Men", "Women"];

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setImages({ ...images, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) {
      alert("Please select a category");
      return;
    }

    setLoading(true);      // Start loading
    setMessage("");        // Reset message

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("img1", images.img1);
    formData.append("img2", images.img2);
    formData.append("img3", images.img3);

    try {
      const res = await createProduct(formData, navigate);

      if (res?.data?.success) {
        setMessage("✅ Product created successfully!");
        // Optionally reset form
        setProductName("");
        setDescription("");
        setPrice("");
        setStock("");
        setCategory("");
        setImages({ img1: null, img2: null, img3: null });
      } else {
        setMessage("❌ Can't create product. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop loading in all cases
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-2xl space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">
          Create Product - Alkaram Cloth Shop
        </h1>

        {/* Product Name */}
        <div>
          <label className="font-semibold">Product Name</label>
          <input
            type="text"
            className="w-full p-3 border rounded-xl"
            placeholder="Enter cloth name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        {/* Product Description */}
        <div>
          <label className="font-semibold">Product Description</label>
          <textarea
            className="w-full p-3 border rounded-xl"
            placeholder="Enter product description"
            value={productDescription}
            onChange={(e) => setDescription(e.target.value)}
            required
            minLength={30}
            maxLength={120}
            rows={5}
          />
          <p className="text-sm text-gray-500 mt-1">
            {productDescription.length}/120 characters
          </p>
        </div>

        {/* Category Select */}
        <div>
          <label className="font-semibold">Category</label>
          <select
            className="w-full p-3 border rounded-xl"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categoryOptions.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="font-semibold">Price (PKR)</label>
          <input
            type="number"
            className="w-full p-3 border rounded-xl"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Stock */}
        <div>
          <label className="font-semibold">Available Stock</label>
          <input
            type="number"
            className="w-full p-3 border rounded-xl"
            placeholder="Enter stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>

        {/* Images */}
        <div className="space-y-3">
          <label className="font-semibold">Upload 3 Images</label>
          <input
            type="file"
            name="img1"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
            required
          />
          <input
            type="file"
            name="img2"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
            required
          />
          <input
            type="file"
            name="img3"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
            required
          />
        </div>

        {/* Message */}
        {message && (
          <div
            className={`text-center font-semibold ${
              message.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}

        {/* Submit Button */}
    <div className="flex gap-2 justify-center items-center">
         <button
          type="submit"
          className={`w-full py-3 rounded-xl text-lg font-semibold text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
        <Link to="/" className="w-full py-3 rounded-xl text-center bg-green-500 text-lg font-semibold text-white"> 
        Go Home
        </Link>
    </div>
      </form>
    </div>
  );
}
