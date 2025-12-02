import { Trash2 } from "lucide-react";
import CardItem from "../utils/card-item";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext.jsx";
import { getCartProducts } from "../api/product.js";
import UserDetailsCard from '../utils/confirmOrder.jsx'


export default function CartPage() {
const { setDataToCart, cart, setCart} = useContext(CartContext);
const navigate = useNavigate();
const [loading, setLoading] = useState(true);
const [mapData, setDataToMap] = useState([]);
const [showConfirmation, setConfirmation] = useState(false)
const [showTotalPrice, setTotalPrice] = useState(0)

 function handleDeleteItem(id) {

  // 1️⃣ Update localStorage (IDs)
  const storedIds = JSON.parse(localStorage.getItem("prevCartItem")) || [];

  const updatedIds = storedIds.filter(prodId => (prodId._id || prodId) !== id);
  localStorage.setItem("prevCartItem", JSON.stringify(updatedIds));


  // 2️⃣ Update cart state
  setCart(updatedIds);

  // 3️⃣ Update mapData state (products)
  const updatedMapData = mapData.filter(item => item._id !== id);
  setDataToMap(updatedMapData);
 
}


const fetchCartProduct = async (cartData)=> {

  if(!cartData || cartData.length === 0) return console.log("cart data is not present")
   try {
 const res = await getCartProducts(cartData);
  if(res?.data?.success){
 setDataToMap(res?.data?.data)
 setLoading(false)
  }
   }catch(err){
setLoading(true)
   }
}

useEffect(()=> { 
 const cartData = cart;
 
  fetchCartProduct(cartData);
},[])

useEffect(()=> {
  const total = mapData.reduce((acc, item) => acc + item.price, 0);
  setTotalPrice(total);
},[mapData])

  return (

    <div className="min-h-screen w-full bg-gray-100 flex flex-col lg:flex-row lg:gap-8 p-4 md:p-6 lg:p-8">
      
      {/* Cart Items Section */}
      <div className="bg-white shadow-lg px-4 py-4 rounded-xl flex-1 max-w-full lg:max-w-[65%]">
        <h1 className="text-black font-bold text-2xl mb-6 md:mb-10">My Cart</h1>
        <div className="space-y-4 overflow-y-auto max-h-[600px] md:max-h-[700px]">
         {cart.length === 0 ?(<div className="font-bold mt-[30%] ml-[30%] text-red-800">No items In Your Cart</div>):(loading?<div className="ml-7">Loading ...</div>:mapData && mapData.map(({ _id, productName, productDescription, price, images, category }, indx) => (
            <CardItem
              key={_id}
              id={_id}
              title={productName}
              description={productDescription}
              price={price}
              image={images[0] || ""}
              indx={indx}
              handleDeleteItem={handleDeleteItem}
            />
          )))} 
        </div>
      </div>

      {/* Payment Summary */}
      <div className="bg-white shadow-lg px-6 py-6 rounded-xl mt-6 lg:mt-0 lg:w-[350px] flex-shrink-0">
        <h1 className="text-black text-2xl mb-6 md:mb-8 font-bold text-center lg:text-left">Order Summary</h1>
        
        <div className="border-b-2 border-gray-300 pb-4 space-y-2">
          {[
            { price_type: "Subtotal", amount: "PKR N/A" },
            { price_type: "Discount", amount: "PKR 0%" },
            { price_type: "Delivery", amount: "PKR N/A" },
          ].map(({ price_type, amount }, indx) => (
            <div key={indx} className="flex justify-between px-2 md:px-4 py-1 text-sm md:text-base">
              <h2 className="font-medium">{price_type}</h2>
              <h2>{amount}</h2>
            </div>
          ))}
        </div>

        <div className="flex flex-col mt-4 justify-center text-black font-bold">
          <div className="flex justify-between mt-4 text-black font-bold text-base md:text-lg">
            <h2>Total Amount</h2>
            <h2>PKR {showTotalPrice}</h2>
          </div>

      {/* Proceed button */}
<button 
  onClick={() => setConfirmation(true)}
  className="text-white rounded mt-6 py-3 px-4 bg-black hover:bg-gray-900 transition font-semibold text-sm md:text-base"
>
  Proceed To Checkout
</button>

{/* Show UserDetailsCard on confirmation */}
{showConfirmation && (
  <UserDetailsCard 
    showTotalPrice={showTotalPrice}
    productsData={mapData} 
    setCart={setCart}
    onClose={() => setConfirmation(false)} 
  />
)}

        </div>

        {/* Extra info / note for user */}
        <p className="text-xs text-gray-500 mt-4 text-center lg:text-left">
          Shipping & taxes calculated at checkout.
        </p>
      </div>
    </div>

  );
}
