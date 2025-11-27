import { Shirt, Baby, Watch, Camera, Bike } from "lucide-react";

export default function ProductCategories() {
  const categories = [
    { id: 1, name: "Men's Wear", icon: <Shirt size={32} className="text-red-500" /> },
    { id: 2, name: "Women's Wear", icon: <Shirt size={32} className="text-red-500" /> },
   
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title Row */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            Product Categories
          </h2>

          <button className="text-red-500 hover:underline text-sm font-medium">
            View More
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-8">

          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center gap-2 p-4 rounded-lg shadow-sm  hover:shadow-lg transition cursor-pointer bg-white"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-100 ">
                {cat.icon}
              </div>

              <p className="text-sm font-medium text-gray-700 text-center">
                {cat.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
