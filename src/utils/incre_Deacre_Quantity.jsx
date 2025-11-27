import { useState } from "react"
import {Minus, Plus} from 'lucide-react'

export default function Increase_Decrease_Quatity () {
   const [quantity, setQuantity]  = useState(1)
 function decQty(q) {
  return Math.max(1, q - 1)
  }
  function incQty(q) {
   return (q + 1)
  }
    return   <div className="flex items-center h-6  w-18  lg:h-8 lg:w-18 justify-center border rounded-md">
                <button onClick={
                  function(){
                let updatedQua = decQty(quantity)
                 setQuantity(updatedQua)

                  }} className="p-1">
                  <Minus size={16} />
                </button>
                <div className=" p-1 text-center">{quantity}</div>
                <button onClick={function(){
                  let updatedQua = incQty(quantity)
                  setQuantity(updatedQua)

                }} className="p-1">
                  <Plus size={16} />
                </button>
              </div>
}