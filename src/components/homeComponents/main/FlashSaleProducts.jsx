import { Star } from "lucide-react";
import { useEffect, useState, useContext } from "react";
import { deleteProduct, getAllProducts } from "../../../api/product"; // make sure API supports pagination
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { CartContext } from "../../../context/cartContext";
import { ShoppingCart } from "lucide-react";


export default function FlashSaleCard() {
  const {isAuthUser} = useContext(AuthContext)
  const { setDataToCart, currentCartData, cart} = useContext(CartContext);
  const [dataArray, setDataArray] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const pageSize = 6; // 6 products per page



  useEffect(() => {
    fetchProducts(1); // first page on mount
  }, []);



  const fetchProducts = async (pageNum = 1) => {
    setLoading(true);
    try {
      const res = await getAllProducts({ page: pageNum, limit: pageSize });
      const {products} = res?.data?.data || res; // adjust depending on API response

      if (products.length < pageSize) setHasMore(false); // no more products

      if (pageNum === 1) {
        setDataArray(products);
      } else {
        setDataArray(prev => [...prev, ...products]);
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleViewMore = () => {
    const nextPage = page + 1;
    fetchProducts(nextPage);
    setPage(nextPage);
  };

  const handleViewProduct = (id) => {
    navigate(`/product/${id}`);
  };



// for admin only, No user access for it
const handleDeleteProduct = async (prodId) =>{
 try {
  const res = await deleteProduct(prodId);
  if(res.data.success){
  const newArray = dataArray.filter(prod=> prod._id !== prodId);
  setDataArray(newArray);
  } 
 } catch(err){
  console.log('err in delete product')
 }
}

  return (
    <div className="w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataArray && dataArray.map((prod, indx) => (
          <div
            key={indx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer flex flex-col"
          >
            {/* Product Image */}
            <div className="relative w-full h-64 sm:h-56 lg:h-72 overflow-hidden">
              <img
                src={prod.images?.[0] || "https://iili.io/fdSOI1I.png"}
                alt={prod.productName || "Product"}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {prod.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                  {prod.discount}% OFF
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div className="space-y-2">
                <h3 className="text-md font-semibold text-gray-800 truncate">
                  {prod.productName || "Stylish Modern Shirt"}
                </h3>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                  ))}
                  <span className="text-xs text-gray-500">(120)</span>
                </div>

                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold text-red-500">PKR {prod.price || "N/A"}</p>
                  {prod.originalPrice && (
                    <p className="text-sm text-gray-400 line-through">PKR {prod.originalPrice}</p>
                  )}
                </div>
              </div>

              {/* Buttons */}
           {
           isAuthUser?.userId?.role === "use"?
             (  <div className="mt-4 flex gap-2">
                <button
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
                  onClick={() => handleEditproduct(prod._id)}
                >
                  Edit Product
                </button>
                <button
                  className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                  onClick={() => handleDeleteProduct(prod._id)}
                >
                Delete product
                </button>
              </div>): 
           ( <div className="mt-4 flex gap-2">
                <button
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
                  onClick={() => handleViewProduct(prod._id)}
                >
                  View Product
                </button>

                <button
                  className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                  onClick={() => setDataToCart(prod._id)}
                >
                 {cart.includes(prod._id)?
                 <div className="flex justify-center items-center gap-3">Added to Cart <ShoppingCart size={20} color="gray"/></div>: 
                 <div className="flex justify-center items-center gap-3">Add to Cart <ShoppingCart size={20} color="gray"/></div>}
                </button>
              </div>)
      
            }
             
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleViewMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Loading..." : "View More"}
          </button>
        </div>
      )}
    </div>
  );
}
