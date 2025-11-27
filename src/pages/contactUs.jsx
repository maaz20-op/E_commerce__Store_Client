import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center py-16 px-4">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">
        Contact Us
      </h1>

      {/* Subtitle / Branding */}
      <p className="text-center text-gray-600 mb-12 max-w-3xl text-lg md:text-xl">
        Welcome to <span className="font-semibold text-indigo-600">Alkaram Cloth House</span> — where premium quality meets modern style. Reach out to us for any inquiries or support.
      </p>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="bg-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Our Mission</h2>
          <p className="text-gray-700">
            We bring you comfort, quality, and elegance in every stitch. Discover collections made to fit your lifestyle perfectly.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Our Style</h2>
          <p className="text-gray-700">
            From casual wear to classy outfits, we design clothes that express your personality. Shop confidently and look your best every day.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Comfort & Quality</h2>
          <p className="text-gray-700">
            Experience the perfect blend of style and comfort. Our clothing is crafted for those who want to stand out effortlessly.
          </p>
        </div>

        {/* Card 4 - Contact Info */}
        <div className="bg-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Get in Touch</h2>
          <p className="text-gray-700 mb-2">
            📧 Email: <a href="mailto:info@alkaramclothes.com" className="text-indigo-600">info@alkaramclothes.com</a>
          </p>
          <p className="text-gray-700 mb-2">
            📞 Phone: <a href="tel:+923001234567" className="text-indigo-600">+92 300 1234567</a>
          </p>
          <p className="text-gray-700">
            We are always happy to help! Send us a message and our support team will respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Footer / Branding */}
      <p className="mt-16 text-gray-500 text-center text-sm">
        &copy; 2025 <span className="font-semibold text-indigo-600">Alkaram Cloth House</span>. All rights reserved.
      </p>
    </div>
  );
}
