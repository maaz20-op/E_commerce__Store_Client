import { Trash2 } from "lucide-react"
import CardItem from "../utils/card-item"
import { useState } from "react";


export default function CartPage() {
const [cardFeatures, setCardFeatures] = useState([
    {
      id:1,
        title: "Free Shipping",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "$5000",
        image: "https://picsum.photos/seed/product-${8}/400/300"
    },
    {
      id:2,
        title: "Free Shipping",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "$5000",
        image: "https://picsum.photos/seed/product-${9}/400/300"
    },
    {
      id:3,
        title: "Free Shipping",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "$5000",
        image: "https://picsum.photos/seed/product-${1}/400/300"
    },
    {
      id:4,
        title: "Free Shipping",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "$5000",
        image: "https://picsum.photos/seed/product-${2}/400/300"
    },
    {
      id:5,
        title: "Free Shipping",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "$5000",
        image: "https://picsum.photos/seed/product-${3}/400/300"
    },
    {
      id:6,
        title: "Free Shipping",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "$5000",
        image: "https://picsum.photos/seed/product-${4}/400/300"
    },
    {
      id:7,
        title: "Free Shipping",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "$5000",
        image: "https://picsum.photos/seed/product-${5}/400/300"
    },
    {
      id:8,
        title: "Free Shipping",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "$5000",
        image: "https://picsum.photos/seed/product-${6}/400/300"
    }
]);


function handleDeleteItem(indx) {
  setCardFeatures(prev => prev.filter((_, i) => i !== indx));
}

return <div className="lg:h-[120vh] h-full lg:w-full lg:px-23 lg:py-6 bg-gray-200 flex lg:flex-row lg:gap-8 flex-col ">
  <div className=" bg-white shadow-lg px-4 py-4 md:max-w-[400px] max-w-[260px] mb-6  rounded-xl lg:w-[600px]">
      <h1 className="text-black font-bold text-2xl mb-10">My Cart</h1>
  <div className="lg:h-[700px]  h-[400px]  overflow-y-auto">
        {
         cardFeatures.map(({id,title,description,price, image}, indx) => (
            <CardItem key={id} title={title} description={description} price={price} image={image} indx={indx} handleDeleteItem={handleDeleteItem} />
         ))
        }
   </div>
  </div>
  {/* Payment card */}
 <div className=" bg-white shadow-lg  px-4 py-4 w-[300px] h-[400px]  rounded-xl">
   <h1 className="text-black text-2xl mb-16 font-bold">Oder Summary</h1>
   <div className="border-b-2 border-gray-300 pb-4">
 {
    [
      {
      price_type: "subtotal",
      amount: "$234"
    },
    {
      price_type: "Discount",
      amount: "30%"
    },
    {
      price_type: "Delivery",
      amount: "$0"
    },
  ].map(({price_type, amount},indx) => (


    <div key={indx} className="flex justify-between px-4 py-2 gap-2 ">
    <h2 className="text-black font-medium">{price_type}</h2><h2>{amount}</h2>
    </div>
  

  ))}
 
   </div>
  <div className="flex flex-col mt-4 justify-center text-black font-bold">
 <div className="flex justify-between mt-4 text-black font-bold">
  <h2>Total Amount</h2> <h2>$5555</h2>
 </div>
  <button className="text-white rounded mt-6 py-2 px-4  bg-black active:scale-95">Proceed To Checkout</button>
  </div>
 
 </div>
    
</div>
} 