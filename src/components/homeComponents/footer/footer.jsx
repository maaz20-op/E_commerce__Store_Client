import { Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-red-100 text-white w-full ">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Alkaram Collections</h3>
          <p className="text-gray-800 text-sm sm:text-base">
            Trendy clothes for all seasons. Stay stylish and feel confident with our curated collections.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Quick Links</h3>
          <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
            <li><a href="#" className="hover:text-red-500 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Shop</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Collections</a></li>
            <li  className="hover:text-red-500 transition-colors">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact Us</h3>
          <p className="text-gray-800 text-sm sm:text-base">Support Email: s90144834@gmail.com</p>
          <p className="text-gray-800 text-sm sm:text-base">Phone: 03115437638</p>
          <p className="text-gray-800 text-sm sm:text-base">Address: Pakistan, punjab, Chakwal, Chapar Bazar</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-400 flex gap-6 justify-center items-center text-white text-center py-4 mt-8 text-sm sm:text-base">
       <span> © 2025 Alkaram Collections. All rights reserved.</span> <span className="text-black font-medium">Website Developer: Maaz Javed
         <p className="text-black font-medium">Website Developer Email: maazcoding54@gmail.com</p></span>
      </div>
    </footer>
  );
}
