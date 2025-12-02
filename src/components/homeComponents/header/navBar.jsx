import { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { AuthContext } from "../../../context/AuthContext";
import { CartContext } from "../../../context/cartContext";
import { isAxiosError } from "axios";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isAuthUser, loading, logout } = useContext(AuthContext);
    const { cart } = useContext(CartContext);


    
  return (
    <nav className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/AppLogo.jpeg" alt="Logo" className="w-13 h-13 rounded-full object-contain" />
          <h1 className="font-bold text-xl text-red-600">Alkaram Cloth House</h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for items..."
            className="w-full border rounded-l-full px-4 py-2 outline-none"
          />
          <button className="bg-red-500 px-5 rounded-r-full text-white">Search</button>
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-4">
          {loading ? (
            <span>Loading...</span>
          ) : isAuthUser ? (
            <>
              <span className="mr-2 w-20 overflow-hidden text-sm">Hi, <p className="text-black font-medium">{isAuthUser?.userId?.name || "Guest"}</p></span>
              
            

              <button
                onClick={logout}
                className="bg-red-500 py-1 px-2 rounded text-white hover:scale-95"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to='/register'>
              <button className="bg-red-400 py-1 px-2 rounded hover:scale-95 text-white">
                Login / Signup
              </button>
            </Link>
          )}

          <Link to='/'> 
            <button className="hover:text-red-500">Home</button>
          </Link>

            <Link to='/contact'>
        <div className="hover:text-red-500 text-left flex items-center gap-2">
            contactUs
          </div>
          </Link> 
          {
         isAuthUser?.userId?.role === 'admin'?(<Link to='/dashboard'><span>Dashboard</span></Link> ):""}
          {
         isAuthUser?.userId?.role === 'admin'?(<Link to='/create-product'><span>Create Product</span></Link> ):""}
            {isAuthUser && isAuthUser?.userId?.role === "user"?(<Link to='/cart'><div className="relative hover:bg-red-600 p bg-red-400 p-1 rounded-full cursor-pointer hover:text-red-500">
           <span><ShoppingCart size={20} color="white"/></span>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length || 0}
            </span>
          </div> </Link>): ''}  
            
            
          

       
           {/* Profile Pic */}
              <div className="relative ml-13">
                <img
                  src={isAuthUser?.userId?.profilePic ||   "https://iili.io/FnrRren.png"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover border-2 border-red-500 cursor-pointer"
                />
              </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Search for items..."
            className="w-full border rounded-full px-4 py-2 outline-none"
          />

          {loading ? (
            <span>Loading...</span>
          ) : isAuthUser ? (
            <>
              <div className="flex items-center gap-2">
                <img
                  src={isAuthUser?.userId?.profilePic || "/default-profile.png"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover border-2 border-red-500"
                />
                <span className="block">Hi, {isAuthUser?.userId?.name}</span>
              </div>
              <button
                onClick={logout}
                className="bg-red-500 py-1 px-2 rounded text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to='/register'>
              <button className="hover:text-red-500 text-left">Login / Signup</button>
            </Link>
          )}

        <Link to='/contact'>
        <div className="hover:text-red-500 text-left flex items-center gap-2">
            contactUs
          </div>
          </Link> 

          <button className="hover:text-red-500 text-left flex items-center gap-2">
            🛒 Cart    {cart.length || 0} items
          </button>
        </div>
      )}
    </nav>
  );
}
