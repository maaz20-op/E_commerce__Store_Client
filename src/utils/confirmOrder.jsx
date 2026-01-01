import { SubmitOrder } from "../api/order.js";
import PaymentLoader from './loader.jsx';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../api/auth.js";

export default function UserDetailsCard({ showTotalPrice, productsData, onClose, setCart }) {
  const [loading, setLoading] = useState(false);
  const [transactionId, setTransactionId] = useState(""); 
  const [errorMsg, setErrorMsg] = useState(""); //  Add error state
  const navigate = useNavigate();
  const [user, setUserData] = useState({}); //et login user data

  const handlePayment = async () => {
    if (!transactionId.trim()) return;

    setLoading(true);
    setErrorMsg(""); // reset previous error

    try {
      const res = await SubmitOrder(showTotalPrice, productsData, transactionId);

      if (res?.data?.success) {
        setCart([]);
        onClose();
        navigate('/payment/success');
      } else {
        setErrorMsg(res?.data?.message || "Something went wrong");
      }
    } catch (err) {
      console.log(err);
      setErrorMsg("Something went wrong");
    } finally {
      setLoading(false); // button enable again after response
    }
  }

const fetchLoginUser = async ()=> {
   try {
const res = await getLoggedInUser();
if(res?.data?.success) {
  return setUserData(res?.data?.data);
}
  } catch(err){

  }
}

 useEffect(()=> {
 fetchLoginUser();
 }, [])

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50 p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6 sm:p-8 relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Warning */}
        <div className="bg-red-600 text-white text-center font-semibold rounded-md p-3 mb-5">
          ⚠️ Confirm your details to get the order
        </div>

        {/* Error Message */}
        {errorMsg && (
          <p className="mb-4 text-center text-red-600 font-medium bg-red-100 py-2 rounded-lg">
            {errorMsg}
          </p>
        )}

        {/* User Details */}
        <h2 className="text-md font-bold text-red-600 mb-4 text-center">
          Your Details, if any problem go to reset your account details in home
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-700">Name:</span>
            <span className="text-gray-900">{user?.userId?.name || "N/A"}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-700">Email:</span>
            <span className="text-gray-900">{user?.email || "N/A"}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-700">Phone:</span>
            <span className="text-gray-900">{user?.userId?.phone || "N/A"}</span>
          </div>
          <div className="flex justify-between pb-2">
            <span className="font-semibold text-gray-700">Address:</span>
            <span className="text-gray-900 text-right">{user?.userId?.address || "N/A"}</span>
          </div>
        </div>

        <hr />

        {/* Total Price */}
        <div className="flex justify-between mt-4 font-bold text-lg">
          <span>Total Amount:</span>
          <span>PKR {showTotalPrice}</span>
        </div>

        {/* Easy Paisa Manual Transfer */}
        <div className="flex justify-between mt-4 font-bold text-md">
          <span>Our EasyPaisa Account Number:</span>
          <span>dummy Number</span>
        </div>

        {/* Transaction Input */}
        <div className="mt-8">
          <label className="block font-semibold mb-1 text-gray-700">
            Enter a Valid Transaction ID to get Parcel
          </label>
          <input
            type="text"
            required
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            placeholder="Enter your payment transaction ID"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Confirm & Proceed Button */}
        <button 
          onClick={handlePayment}
          disabled={!transactionId || loading} // 🔥 disable if loading
          className="mt-6 w-full bg-red-600 flex justify-center items-center gap-2.5 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition disabled:bg-red-300"
        >
          {loading ? (
            <>
              Processing Your Order <PaymentLoader size={20}/>
            </>
          ) : (
            <>Confirm & Pay</>
          )}
        </button>

      </div>
    </div>
  );
}
