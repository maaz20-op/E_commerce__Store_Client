import { Star } from "lucide-react";

export default function FlashSaleCard() {



  return (
   <div className="w-[90%]  flex gap-6 mb-7 flex-wrap m-h-102 mx-auto">
    
     <div className="lg:w-[23%]  hover:shadow-lg bg-[#e2dede] rounded-xl shadow  transition py-4 cursor-pointer">

      {/* Product Image */}
      <div className="relative">
        <img
          src="https://iili.io/fdSOI1I.png"
          alt="Product"
          className="w-[90%] mx-auto lg:h-58 bg-amber-50 object-cover rounded-lg"
        />

        {/* Discount Badge */}
       { /*<span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          30% OFF
        </span> */} 
      </div>

      {/* Product Info */}
      <div className="mt-3 ml w-[90%] mx-auto  space-y-1">

        {/* Title */}
        <h3 className="text-md font-semibold text-gray-800">
          Stylish Modern Shirt for Men
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="text-yellow-500 fill-yellow-500"
            />
          ))}
          <span className="text-xs text-gray-500">(120)</span>
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-red-500">$19.99</p>
          <p className="text-sm text-gray-400 line-through">$29.99</p>
        </div>

        {/* Add to Cart Button */}
        <div className="flex gap-2">
           <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>
         <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>

        </div>
       
      </div>
    </div>
     <div className="lg:w-[23%]  hover:shadow-lg bg-[#e2dede] rounded-xl shadow  transition py-4 cursor-pointer">

      {/* Product Image */}
      <div className="relative">
        <img
          src="https://iili.io/fdSOI1I.png"
          alt="Product"
          className="w-[90%] mx-auto lg:h-58 bg-amber-50 object-cover rounded-lg"
        />

        {/* Discount Badge */}
       { /*<span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          30% OFF
        </span> */} 
      </div>

      {/* Product Info */}
      <div className="mt-3 ml w-[90%] mx-auto  space-y-1">

        {/* Title */}
        <h3 className="text-md font-semibold text-gray-800">
          Stylish Modern Shirt for Men
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="text-yellow-500 fill-yellow-500"
            />
          ))}
          <span className="text-xs text-gray-500">(120)</span>
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-red-500">$19.99</p>
          <p className="text-sm text-gray-400 line-through">$29.99</p>
        </div>

        {/* Add to Cart Button */}
        <div className="flex gap-2">
           <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>
         <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>

        </div>
       
      </div>
    </div>
     <div className="lg:w-[23%]  hover:shadow-lg bg-[#e2dede] rounded-xl shadow  transition py-4 cursor-pointer">

      {/* Product Image */}
      <div className="relative">
        <img
          src="https://iili.io/fdSOI1I.png"
          alt="Product"
          className="w-[90%] mx-auto lg:h-58 bg-amber-50 object-cover rounded-lg"
        />

        {/* Discount Badge */}
       { /*<span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          30% OFF
        </span> */} 
      </div>

      {/* Product Info */}
      <div className="mt-3 ml w-[90%] mx-auto  space-y-1">

        {/* Title */}
        <h3 className="text-md font-semibold text-gray-800">
          Stylish Modern Shirt for Men
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="text-yellow-500 fill-yellow-500"
            />
          ))}
          <span className="text-xs text-gray-500">(120)</span>
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-red-500">$19.99</p>
          <p className="text-sm text-gray-400 line-through">$29.99</p>
        </div>

        {/* Add to Cart Button */}
        <div className="flex gap-2">
           <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>
         <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>

        </div>
       
      </div>
    </div>   
     <div className="lg:w-[23%]  hover:shadow-lg bg-[#e2dede] rounded-xl shadow  transition py-4 cursor-pointer">

      {/* Product Image */}
      <div className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHLpB3HqMi2i5O8yImvt3h1t7aPVpMH2QSg&s"
          alt="Product"
          className="w-[90%] mx-auto lg:h-58 bg-amber-50 object-cover rounded-lg"
        />

        {/* Discount Badge */}
       { /*<span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          30% OFF
        </span> */} 
      </div>

      {/* Product Info */}
      <div className="mt-3 ml w-[90%] mx-auto  space-y-1">

        {/* Title */}
        <h3 className="text-md font-semibold text-gray-800">
          Stylish Modern Shirt for Men
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="text-yellow-500 fill-yellow-500"
            />
          ))}
          <span className="text-xs text-gray-500">(120)</span>
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-red-500">$19.99</p>
          <p className="text-sm text-gray-400 line-through">$29.99</p>
        </div>

        {/* Add to Cart Button */}
        <div className="flex gap-2">
           <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>
         <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>

        </div>
       
      </div>
    </div>   
      <div className="lg:w-[23%]  hover:shadow-lg bg-[#e2dede] rounded-xl shadow  transition py-4 cursor-pointer">

      {/* Product Image */}
      <div className="relative">
        <img
          src="https://iili.io/fdSOI1I.png"
          alt="Product"
          className="w-[90%] mx-auto lg:h-58 bg-amber-50 object-cover rounded-lg"
        />

        {/* Discount Badge */}
       { /*<span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          30% OFF
        </span> */} 
      </div>

      {/* Product Info */}
      <div className="mt-3 ml w-[90%] mx-auto  space-y-1">

        {/* Title */}
        <h3 className="text-md font-semibold text-gray-800">
          Stylish Modern Shirt for Men
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="text-yellow-500 fill-yellow-500"
            />
          ))}
          <span className="text-xs text-gray-500">(120)</span>
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-red-500">$19.99</p>
          <p className="text-sm text-gray-400 line-through">$29.99</p>
        </div>

        {/* Add to Cart Button */}
        <div className="flex gap-2">
           <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>
         <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>

        </div>
       
      </div>
    </div> 
     <div className="lg:w-[23%]  hover:shadow-lg bg-[#e2dede] rounded-xl shadow  transition py-4 cursor-pointer">

      {/* Product Image */}
      <div className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHLpB3HqMi2i5O8yImvt3h1t7aPVpMH2QSg&s"
          alt="Product"
          className="w-[90%] mx-auto lg:h-58 bg-amber-50 object-cover rounded-lg"
        />

        {/* Discount Badge */}
       { /*<span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          30% OFF
        </span> */} 
      </div>

      {/* Product Info */}
      <div className="mt-3 ml w-[90%] mx-auto  space-y-1">

        {/* Title */}
        <h3 className="text-md font-semibold text-gray-800">
          Stylish Modern Shirt for Men
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="text-yellow-500 fill-yellow-500"
            />
          ))}
          <span className="text-xs text-gray-500">(120)</span>
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-red-500">$19.99</p>
          <p className="text-sm text-gray-400 line-through">$29.99</p>
        </div>

        {/* Add to Cart Button */}
        <div className="flex gap-2">
           <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>
         <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>

        </div>
       
      </div>
    </div> 
     <div className="lg:w-[23%]  hover:shadow-lg bg-[#e2dede] rounded-xl shadow  transition py-4 cursor-pointer">

      {/* Product Image */}
      <div className="relative">
        <img
          src="https://iili.io/fdSOI1I.png"
          alt="Product"
          className="w-[90%] mx-auto lg:h-58 bg-amber-50 object-cover rounded-lg"
        />

        {/* Discount Badge */}
       { /*<span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          30% OFF
        </span> */} 
      </div>

      {/* Product Info */}
      <div className="mt-3 ml w-[90%] mx-auto  space-y-1">

        {/* Title */}
        <h3 className="text-md font-semibold text-gray-800">
          Stylish Modern Shirt for Men
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="text-yellow-500 fill-yellow-500"
            />
          ))}
          <span className="text-xs text-gray-500">(120)</span>
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-red-500">$19.99</p>
          <p className="text-sm text-gray-400 line-through">$29.99</p>
        </div>

        {/* Add to Cart Button */}
        <div className="flex gap-2">
           <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>
         <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>

        </div>
       
      </div>
    </div> 
     <div className="lg:w-[23%]  hover:shadow-lg bg-[#e2dede] rounded-xl shadow  transition py-4 cursor-pointer">

      {/* Product Image */}
      <div className="relative">
        <img
          src="https://iili.io/fdSOI1I.png"
          alt="Product"
          className="w-[90%] mx-auto lg:h-58 bg-amber-50 object-cover rounded-lg"
        />

        {/* Discount Badge */}
       { /*<span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          30% OFF
        </span> */} 
      </div>

      {/* Product Info */}
      <div className="mt-3 ml w-[90%] mx-auto  space-y-1">

        {/* Title */}
        <h3 className="text-md font-semibold text-gray-800">
          Stylish Modern Shirt for Men
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="text-yellow-500 fill-yellow-500"
            />
          ))}
          <span className="text-xs text-gray-500">(120)</span>
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-red-500">$19.99</p>
          <p className="text-sm text-gray-400 line-through">$29.99</p>
        </div>

        {/* Add to Cart Button */}
        <div className="flex gap-2">
           <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>
         <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>

        </div>
       
      </div>
    </div> 
     <div className="lg:w-[23%]  hover:shadow-lg bg-[#e2dede] rounded-xl shadow  transition py-4 cursor-pointer">

      {/* Product Image */}
      <div className="relative">
        <img
          src="https://iili.io/fdSOI1I.png"
          alt="Product"
          className="w-[90%] mx-auto lg:h-58 bg-amber-50 object-cover rounded-lg"
        />

        {/* Discount Badge */}
       { /*<span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          30% OFF
        </span> */} 
      </div>

      {/* Product Info */}
      <div className="mt-3 ml w-[90%] mx-auto  space-y-1">

        {/* Title */}
        <h3 className="text-md font-semibold text-gray-800">
          Stylish Modern Shirt for Men
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="text-yellow-500 fill-yellow-500"
            />
          ))}
          <span className="text-xs text-gray-500">(120)</span>
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-red-500">$19.99</p>
          <p className="text-sm text-gray-400 line-through">$29.99</p>
        </div>

        {/* Add to Cart Button */}
        <div className="flex gap-2">
           <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>
         <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>

        </div>
       
      </div>
    </div> 
     <div className="lg:w-[23%]  hover:shadow-lg bg-[#e2dede] rounded-xl shadow  transition py-4 cursor-pointer">

      {/* Product Image */}
      <div className="relative">
        <img
          src="https://iili.io/fdSOI1I.png"
          alt="Product"
          className="w-[90%] mx-auto lg:h-58 bg-amber-50 object-cover rounded-lg"
        />

        {/* Discount Badge */}
       { /*<span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          30% OFF
        </span> */} 
      </div>

      {/* Product Info */}
      <div className="mt-3 ml w-[90%] mx-auto  space-y-1">

        {/* Title */}
        <h3 className="text-md font-semibold text-gray-800">
          Stylish Modern Shirt for Men
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="text-yellow-500 fill-yellow-500"
            />
          ))}
          <span className="text-xs text-gray-500">(120)</span>
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-red-500">$19.99</p>
          <p className="text-sm text-gray-400 line-through">$29.99</p>
        </div>

        {/* Add to Cart Button */}
        <div className="flex gap-2">
           <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>
         <button className="w-[60%] bg-red-500 text-white py-1 px-1 rounded-lg mt-2 hover:bg-red-600 transition text-[12px] font-medium">
          Add to Cart
        </button>

        </div>
       
      </div>
    </div> 
      
   </div>
  );
}
