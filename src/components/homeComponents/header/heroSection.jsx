export default function HeroSection() {
  return (
    <section className="w-full bg-[#FFF5F6]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 items-center gap-10 px-6 py-12">

        {/* LEFT TEXT */}
        <div className="space-y-4">
          <p className="text-sm lg:mt-24 font-semibold text-red-500">
            Best Products
          </p>

          <h1 className="text-3xl md:text-4xl  font-bold leading-tight text-gray-800">
            The Name of Trust, <span className="text-red-500">Alkaram Cloths House!</span>
          </h1>

          <p className="text-gray-600 md:w-4/5">
            Discover your fashion style, dive into fashion’s depth, and make a splash with <span className="text-black">Alkaram Cloths House</span> – where the latest trends flow every day!
          </p>

          <button className="bg-red-500 px-6 py-3 rounded-full text-white font-medium hover:bg-red-600 transition">
            Shop Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className=" flex justify-center items-center min-h-[300px]">
          
          
       <div className=" w-[700px]  flex items-center  justify-center h-80 overflow-hidden">
           {/* Background SVG SHAPE */}
         <svg
            className="relative h-[350px] sm:h-[250px]  lg:h-[400px]  overflow-x-hidden opacity-80"
            viewBox="0 0 200 200"
          >
            <path
              fill="#FFD6D9"
              d="M43.3,-75.3C56.9,-66.1,68.3,-56,72.3,-43.1C76.3,-30.2,73,-14.6,72.5,0.3C72,15.2,74.3,30.4,68.9,41.3C63.6,52.2,50.7,58.8,37.9,65.4C25.1,72,12.6,78.6,-1.7,82C-16,85.4,-32,85.6,-45.5,79.5C-59,73.4,-70.1,61,-77.3,46.5C-84.5,32,-87.7,16,-85.5,1.2C-83.2,-13.6,-75.5,-27.2,-66.6,-38.5C-57.7,-49.8,-47.6,-58.7,-35.7,-68.3C-23.8,-77.9,-11.9,-88.2,1.3,-90.6C14.5,-93,29,-87.5,43.3,-75.3Z"
              transform="translate(100 100)"
            />
          </svg>
          {/* Girl Image */}
<div>
  
</div>
  <img
    src="https://iili.io/fdSOI1I.png"
    alt="Fashion Model"
    className=" object-cover  h-[350px]  sm:h-[250px] md:w-[300px] lg:h-[400px]  absolute "
  />
</div>

        </div>

      </div>
    </section>
  );
}
