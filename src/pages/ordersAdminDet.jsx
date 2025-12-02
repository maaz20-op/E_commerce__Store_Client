import React, { useState } from "react";
import { confirmOrder } from "../api/order";

export default function OrderCard({ order, onClose }) {
  const [orderStatus, setStatus] = useState(order?.status || "Pending");
  
  

  const onConfirmCompletion = async () => {
    try{
     const res = await confirmOrder(order?._id)
   if(res?.data?.success && res?.data?.data) return setStatus(res?.data?.data?.status)
    } catch(err){
      
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-auto p-4">
      <div className="bg-white w-full max-w-4xl h-full md:h-auto rounded-2xl shadow-lg relative overflow-y-auto p-6">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-red-600 transition"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-3 mb-3">
          <h2 className="text-xl font-semibold">Order Details</h2>
          <span className="text-xs sm:text-sm px-22 font-bold text-gray-600 mt-1 sm:mt-0">
            Order ID: {order?.transactionId}
          </span>
        </div>

        {/* PRODUCT LIST */}
        <div className="space-y-4 overflow-hidden">
          {order.buyedItems?.map((product, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-5 border p-3 rounded-lg shadow-sm"
            >
              <img
                src={product?.images[0]}
                alt={product?.productName}
                className="w-28 h-28 rounded-lg object-cover"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold">{product?.productName}</h3>
                <p className="text-gray-600 text-xs">Product Description: {product?.productDescription}</p>
                <p className="text-gray-600">Price: Rs {product?.price}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-4" />

        {/* BUYER DETAILS */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Buyer Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <p><b>Name:</b> {order?.userId.name}</p>
            <p><b>Email:</b> {order?.authUserId?.email}</p>
            <p><b>Phone:</b> {order?.userId?.phone}</p>
            <p><b>Address:</b> {order?.userId?.address}</p>
          </div>
        </div>

        <hr className="my-4" />

        {/* ORDER STATUS */}
        <div className="mb-4">
          <h3 className="font-semibold mb-1">Update Order Status</h3>
        </div>

        {/* CONFIRM COMPLETION BUTTON */}
        <div>
          {orderStatus === "Pending" ? (
            <button
              onClick={onConfirmCompletion}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Confirm Completion
            </button>
          ) : (
            <button
              disabled
              className="w-full bg-gray-400 text-white py-2 rounded-lg cursor-not-allowed"
            >
              Already Completed
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
