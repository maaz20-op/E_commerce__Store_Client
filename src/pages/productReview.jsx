import React, { useState } from "react";
import { Star, ShoppingCart, Heart, Truck, MapPin, CheckCircle, Minus, Plus } from "lucide-react";
import Increase_Decrease_Quatity from "../utils/incre_Deacre_Quantity";


export default function ProductReviewDetails() {
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("M");
 
  const [activeTab, setActiveTab] = useState("description");

  const colors = [
    { id: "red", class: "bg-red-500" },
    { id: "green", class: "bg-green-500" },
    { id: "yellow", class: "bg-yellow-400" },
    { id: "black", class: "bg-black" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];

  const reviews = [
    {
      id: 1,
      name: "Nida A.",
      rating: 5,
      text: "Very comfy and soft. True to size — loved it!",
      date: "2 days ago",
    },
    {
      id: 2,
      name: "Ali R.",
      rating: 4,
      text: "Great fabric, colour is exactly as pictured.",
      date: "1 week ago",
    },
  ];

  const rating = 4.6;
  const ratingBreakdown = [70, 15, 8, 5, 2]; // percent for 5->1 stars

  
 

  return (
    <div className="min-h-screen w-[92%] max-w-6xl mx-auto mb-24 py-8">
      {/* Header */}
      <div className="px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold mb-3">Product Details</h1>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          A modern product page layout inspired by your mock. Fully responsive — mobile, tablet
          and desktop friendly. Includes thumbnails, price, rating, color & size selectors,
          quantity, delivery info, and reviews.
        </p>
      </div>

      {/* Main content area: image + details */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6 lg:px-8">
        {/* Left: Images */}
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-80 md:h-[70vh] lg:h-[70vh] relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3O9DhUXDaibvo3gs2ZdA1aegw9QYPKdfWdA&s"
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="px-4 py-3 border-t flex items-center gap-3 overflow-x-auto">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-md overflow-hidden border hover:border-blue-500 transition"
                >
                  <img
                    src={`https://picsum.photos/seed/product-${i}/400/300`}
                    alt={`thumb-${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile condensed quick actions */}
          <div className="mt-4 flex gap-3 md:hidden">
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2">
              <ShoppingCart size={16} /> Add to Cart
            </button>
            <button className="px-4 py-2 border rounded-lg flex items-center gap-2">
              <Heart size={16} />
            </button>
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col p-4 md:p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Nebs Soft T-Shirt</h2>
          <p className="text-sm text-gray-500 mt-1">SKU: NST-234</p>

          {/* Price + Rating */}
          <div className="mt-4 flex items-center justify-between gap-4">
            <div>
              <div className="text-2xl font-bold text-red-600 flex items-baseline gap-1">
                <span className="text-red-800">$</span>
                <span>2,347</span>
              </div>
              <p className="text-xs text-gray-500">Incl. all taxes</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600">{rating} ({reviews.length} reviews)</div>
            </div>
          </div>

          {/* Color */}
          <div className="mt-4 border-t pt-4 border-gray-200">
            <h3 className="text-sm font-medium mb-2">Choose a Color</h3>
            <div className="flex items-center gap-3">
              {colors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedColor(c.id)}
                  className={`rounded-full h-6 w-6 ring-2 ${c.class} ${
                    selectedColor === c.id ? "ring-offset-2 ring-blue-400" : "ring-gray-200"
                  }`}
                />
              ))}

              <div className="text-sm text-gray-500 ml-3">Selected: {selectedColor}</div>
            </div>
          </div>

          {/* Size */}
          <div className="mt-4 border-t pt-4 border-gray-200">
            <h3 className="text-sm font-medium mb-2">Select Size</h3>
            <div className="flex items-center gap-2 flex-wrap">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-3 py-2 rounded-md border ${
                    selectedSize === s
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Actions */}
          <div className="mt-4 border-t pt-4 border-gray-200 flex flex-col gap-4">
            <div className="flex items-center gap-2 lg:gap-4">
             <Increase_Decrease_Quatity/>

              <button className="flex-1 lg:px-4 md:px-4 md:py-2 text-sm lg:py-2 py-1 px-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                <ShoppingCart size={16} /> Add to Cart
              </button>

              <button className="px-4 py-2 lg:block hidden border rounded-lg flex items-center gap-2">
                <Heart size={16} />
              </button>
            </div>

            {/* Delivery + icons */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Truck size={18} /> <span>Free delivery over $100</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} /> <span>Delivery to Lahore, PK — 2-4 days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} /> <span>30 days return</span>
              </div>
            </div>
          </div>

          {/* Tabs: Description/Reviews */}
          <div className="mt-4 border-t pt-4 border-gray-200">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-3 py-2 rounded-md ${
                  activeTab === "description" ? "bg-gray-100" : "bg-white"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-3 py-2 rounded-md ${
                  activeTab === "reviews" ? "bg-gray-100" : "bg-white"
                }`}
              >
                Reviews ({reviews.length})
              </button>
            </div>

            <div className="mt-4">
              {activeTab === "description" && (
                <div className="text-gray-700 leading-relaxed">
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, temporibus
                    necessitatibus placeat recusandae dolores excepturi culpa magni. Fugiat
                    laboriosam, sapiente magni commodi voluptates quidem earum tempora. Velit
                    perferendis beatae perspiciatis.
                  </p>

                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    <li>100% Cotton</li>
                    <li>Machine wash cold</li>
                    <li>Made in Pakistan</li>
                  </ul>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left: summary */}
                  <div className="md:col-span-1">
                    <div className="p-4 bg-gray-50 rounded-md">
                      <div className="text-3xl font-bold">{rating}</div>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Based on {reviews.length} reviews</p>

                      <div className="mt-4 space-y-2">
                        {ratingBreakdown.map((p, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="text-xs w-8">{5 - idx}★</div>
                            <div className="w-full bg-white rounded h-2 border">
                              <div style={{ width: `${p}%` }} className="h-2 bg-yellow-400 rounded" />
                            </div>
                            <div className="w-10 text-right text-xs">{p}%</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: individual reviews */}
                  <div className="md:col-span-2 space-y-4">
                    {reviews.map((r) => (
                      <div key={r.id} className="p-4 border rounded-md">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-medium text-gray-700">
                              {r.name.split(" ")[0][0]}
                            </div>
                            <div>
                              <div className="font-medium">{r.name}</div>
                              <div className="text-xs text-gray-500">{r.date}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(r.rating)].map((_, i) => (
                              <Star key={i} size={14} className="text-yellow-400" />
                            ))}
                          </div>
                        </div>

                        <p className="mt-3 text-gray-700 text-sm">{r.text}</p>
                      </div>
                    ))}

                    {/* Leave a review mockup */}
                    <div className="p-4 border rounded-md">
                      <h4 className="font-medium mb-2">Leave a review</h4>
                      <textarea className="w-full p-3 border rounded-md" rows={4} placeholder="Share your experience..." />
                      <div className="mt-3 flex items-center gap-3">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
                        <div className="text-sm text-gray-500">Login to post a review</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related / New collection section */}
      <div className="mt-12 px-4 md:px-6 lg:px-8">
        <h3 className="text-xl font-semibold mb-4">People also bought</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm p-3 text-center">
              <img src={`https://picsum.photos/seed/rel-${i}/400/300`} className="h-36 w-full object-cover rounded" />
              <div className="mt-2 text-sm font-medium">Product {i}</div>
              <div className="text-xs text-gray-500">$199</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
