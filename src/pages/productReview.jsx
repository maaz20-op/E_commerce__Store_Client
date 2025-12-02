import React, { useState, useEffect, useContext } from "react";
import { Star, ShoppingCart } from "lucide-react";
import Increase_Decrease_Quatity from "../utils/incre_Deacre_Quantity";
import { useNavigate, useParams } from "react-router-dom";
import { getProductByID, createReview } from "../api/product";
import { CartContext } from "../context/cartContext";

export default function ProductReviewDetails() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {setDataToCart} = useContext(CartContext)
  const [productObj, setProductObj] = useState({});
  const [activeTab, setActiveTab] = useState("description");
  const [loading, setLoading] = useState(false);

  // Reviews
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [localReviews, setLocalReviews] = useState([]);

  // Rating
  const [reviewRating, setReviewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productdata = await getProductByID(id);
        if (!productdata) return navigate("/");
        setProductObj(productdata);

        // Always make sure reviews is an array
        setLocalReviews(Array.isArray(productdata.reviews) ? productdata.reviews : []);
      } catch (error) {
        navigate("/");
      }
    };
    fetchProduct();
  }, [id]);

  const images = productObj.images || [];
  const reviews = Array.isArray(localReviews) ? localReviews : [];

  const rating =
    reviews.length > 0
      ? (reviews.reduce((acc, r) => acc + Number(r.rating || 0), 0) / reviews.length).toFixed(1)
      : 0;

  const sizes = ["XS", "S", "M", "L", "XL"];

  // ⭐ Add Review Handler
  const handleAddReview = async (e) => {
    e.preventDefault();

    if (!reviewText.trim() || reviewRating === 0) return;

    const formData = new FormData();
    formData.append("review", reviewText);
    formData.append("rating", reviewRating);
    formData.append("productId", id);

    try {
      const newReview = await createReview(formData);

      if (!newReview) return;

      // ⬇⬇ FIX — ADD THE NEW REVIEW IN THE LOCAL STATE
      setLocalReviews((prev) => [...prev, newReview]);

      setShowReviewForm(false);
      setReviewText("");
      setReviewRating(0);
    } catch (error) {
    }
  };

  return (
    <div className="min-h-screen w-[92%] max-w-6xl mx-auto mb-24 py-8">
      <div className="px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold mb-3">Product Details</h1>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Explore product details fetched from backend in real-time.
        </p>
      </div>

   <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6 lg:px-8">
  {/* LEFT: IMAGE SLIDER */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="w-full h-80 md:h-[70vh] lg:h-[70vh] relative flex items-center justify-center">
      {/* Previous Button */}
      <button
        onClick={() =>
          setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
          )
        }
        className="absolute left-2 z-10 bg-gray-100 rounded-full p-2 hover:bg-gray-200"
      >
        &#8592;
      </button>

      {/* Main Image */}
      <img
        src={images[currentImageIndex] || "https://iili.io/fznBEWx.jpg"}
        className="w-full h-full object-cover rounded-md"
      />

      {/* Next Button */}
      <button
        onClick={() =>
          setCurrentImageIndex(
            currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
          )
        }
        className="absolute right-2 z-10 bg-gray-100 rounded-full p-2 hover:bg-gray-200"
      >
        &#8594;
      </button>
    </div>

    {/* Thumbnails */}
    <div className="px-4 py-3 border-t flex items-center gap-3 justify-center">
      {images.map((img, i) => (
        <button
          key={i}
          className={`w-20 h-14 md:w-24 md:h-16 rounded-md overflow-hidden border ${
            i === currentImageIndex ? "border-blue-500" : "border-gray-300"
          }`}
          onClick={() => setCurrentImageIndex(i)}
        >
          <img src={img} className="w-full h-full object-cover" />
        </button>
      ))}
    </div>
  </div>

  {/* RIGHT: DETAILS + REVIEWS */}
  <div className="flex flex-col p-4 md:p-6 bg-white rounded-lg shadow-md">
    {/* PRODUCT INFO */}
    <h2 className="text-2xl font-semibold">{productObj.productName}</h2>
    <p className="text-sm text-gray-500 mt-1">
      Category: {productObj.category || "N/A"}
    </p>

    {/* PRICE + RATING */}
    <div className="mt-4 flex items-center justify-between gap-4">
      <div>
        <div className="text-2xl font-bold text-red-600 flex items-baseline gap-1">
          <span className="text-red-800">PKR</span>
          <span>{productObj.price || "0"}</span>
        </div>
        <p className="text-xs text-gray-500">Incl. all taxes</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < rating ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <div className="text-sm text-gray-600">
          {rating} ({reviews.length} reviews)
        </div>
      </div>
    </div>

    {/* QUANTITY + ADD TO CART */}
    <div className="mt-4 border-t pt-4 border-gray-200 flex flex-col gap-4">
      <button
        onClick={() => setDataToCart(productObj?._id)}
        className="flex-1 px-4 py-2 bg-blue-600 active:scale-95 text-white rounded-lg flex items-center justify-center gap-2"
      >
        <ShoppingCart size={16} /> Add to Cart
      </button>
    </div>

    {/* TABS: DESCRIPTION + REVIEWS */}
    <div className="mt-4 border-t pt-4 border-gray-200">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-3 py-2 rounded-md ${
            activeTab === "description" ? "bg-gray-100" : "bg-white"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-3 py-2 rounded-md ${
            activeTab === "reviews" ? "bg-gray-100" : "bg-white"
          }`}
        >
          Reviews ({reviews.length})
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "description" && (
          <div className="text-gray-700 leading-relaxed">
            {productObj.productDescription}
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            {/* ADD REVIEW FORM */}
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-3 py-2 mb-3 bg-blue-600 text-white rounded-md"
            >
              {showReviewForm ? "Close" : "Add Review"}
            </button>

            {showReviewForm && (
              <div className="p-4 border rounded-md mb-4 bg-gray-50">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={22}
                      className={`cursor-pointer ${
                        (hoverRating || reviewRating) >= star
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setReviewRating(star)}
                    />
                  ))}
                </div>

                <textarea
                  placeholder="Write your review..."
                  className="w-full p-2 border rounded-md mb-2"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                />

                <button
                  onClick={handleAddReview}
                  className="px-4 py-2 bg-green-600 text-white rounded-md"
                >
                  Submit Review
                </button>
              </div>
            )}

            {/* REVIEWS LIST */}
            {reviews.length > 0 ? (
              reviews
                .slice()
                .reverse()
                .map((r) => (
                  <div
                    key={r._id || Math.random()}
                    className="p-4 border rounded-md mb-3 bg-white"
                  >
                    <b>{r.userId?.name || "User"}</b>
                    <div className="flex gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          className={
                            star <= r.rating ? "text-yellow-400" : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-sm mt-1">{r.reviewText}</p>
                  </div>
                ))
            ) : (
              <p className="text-gray-500">No reviews yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
