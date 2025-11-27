import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-4">
      {/* SVG Illustration */}
      <svg
        className="w-80 h-80 mb-8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 500 500"
      >
        <circle cx="250" cy="250" r="200" fill="#E5E7EB" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="80"
          fill="#9CA3AF"
          fontFamily="Arial, sans-serif"
        >
          404
        </text>
      </svg>

      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">
        Page Not Found
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-center max-w-md mb-8">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
