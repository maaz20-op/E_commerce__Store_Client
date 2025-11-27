import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
          <h1 className="font-bold text-xl text-red-600">Alkaram Cloth House</h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for items..."
            className="w-full border rounded-l-full px-4 py-2 outline-none"
          />
          <button className="bg-red-500 px-5 rounded-r-full text-white">
            Search
          </button>
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-6">
         <Link to='/register'> <button className="bg-red-400 py-1 px-2 rounded hover:scale-95 text-amber-100">Login</button></Link>
        <Link to='/'> <button className="hover:text-red-500">Home</button></Link>

          <div className="relative cursor-pointer hover:text-red-500">
            <span>❤️</span>
          </div>

          <div className="relative cursor-pointer hover:text-red-500">
            <Link to='/cart'><span >🛒</span></Link>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
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

          <button className="hover:text-red-500 text-left">Login</button>
          <button className="hover:text-red-500 text-left">Become a Seller</button>
          <button className="hover:text-red-500 text-left flex items-center gap-2">
            ❤️ Wishlist
          </button>
          <button className="hover:text-red-500 text-left flex items-center gap-2">
            🛒 Cart
          </button>
        </div>
      )}
    </nav>
  );
}
