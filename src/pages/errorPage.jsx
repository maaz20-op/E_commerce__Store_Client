import React from "react";
import { XCircle } from "lucide-react";

export default function PaymentError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFECEC] p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <XCircle size={70} className="mx-auto text-red-500" />

        <h1 className="text-3xl font-bold mt-4 text-red-600">
          Payment Failed!
        </h1>

        <p className="text-gray-600 mt-2">
          Something went wrong. Please try again.
        </p>

        <a
          href="/"
          className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}
