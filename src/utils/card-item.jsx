import Increase_Decrease_Quatity from "../utils/incre_Deacre_Quantity"
import { Trash2 } from "lucide-react"

export default function CardItem({title, description, price, image, indx, handleDeleteItem}) {


return   <div  className="flex lg:flex-row md:flex-row w-full flex-col gap-4 py-4  border-b border-gray-300">
            {/* product image */}
        <div className="">
          <img src={image} alt="product image" className="h-[150px] object-cover" />
        </div>

        {/* product details */}
        <div className="flex gap-4">
          <div className="flex flex-col lg:gap-0 gap-4 justify-between">
             <div>
               <h2 className="lg:text-lg text-sm font-semibold">{title}</h2>
            <p className="text-gray-600 text-xs lg:text-sm max-w-[190px] max-h-5"> {description}</p>
             </div>
        <div className="pt-8">
              <Increase_Decrease_Quatity/>
        </div>
          </div>
             <div className="flex flex-col p-1 w-[200px] justify-between  items-end">
               <div className="bg-gray-200 p-1 rounded-xl shadow-lg hover:bg-red-600 hover:shadow-red-800"><Trash2 onClick={function(){handleDeleteItem(indx)}}/></div> 
              <h2 className="text-gray-500 font-medium">Total Price: <span className="text-black font-bold">{price}</span></h2>
             </div>
        </div> 
         </div>
}