import React from "react";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E9FFF4] p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <CheckCircle size={70} className="mx-auto text-green-500" />

        <h1 className="text-3xl font-bold mt-4 text-green-600">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mt-2">
          Thank you! Your payment has been processed successfully.
        </p>

        <a
          href="/"
          className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}
