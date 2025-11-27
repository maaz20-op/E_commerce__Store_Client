import { useRef } from "react"

export default function VerifyAccount() {
const inputRef = useRef([]);
 
function moveToNextField(value, index){
  if(value === 1 && index >= 0 && index <= 2) {
    inputRef.current[index + 1 ].focus() 
  }

  if(value == "" && index > 0){
    inputRef.current[index - 1].focus()
  }
 
}

    return <div className="h-screen w-full flex select-none items-center justify-center bg-[#e2dcdc]">
        <div className="px-4 py-7  flex flex-col space-y-4 items-center rounded-2xl shadow-lg bg-white">
            <h1 className="text-red-400 font-bold text-3xl">Alkaram Cloth House</h1>
            <h1 className="text-black font-bold text-2xl">Verify Your Account </h1>
          <p className="text-sm text-gray-700 max-w-[80%] text-center">Enter the 4-digit verfication code that was sent to email <span className="text-red-700 font-medium">malaika@gmail.com</span></p>
            <form action="" className="flex flex-col items-center  w-[80%] lg:w-full gap-5 ">
                <div className="flex gap-2">
        { Array(4).fill(undefined).map((_, index) => 
        <input 
        ref={(el) => inputRef.current[index] = el}
        key={index} 
        type="text"
         maxLength={1}
         onChange={(e) =>
          {
             moveToNextField(e.target.value.length, index)
           console.log("maaz")
          }}
          className="verify-account-box" />) 
          }  
                </div>
       
<button className="px-6 py-2 cursor-pointer rounded shadow-lg active:scale-95 w-[98%] sm:w-[75%] md:w-[75%] lg:w-[75%] bg-red-400">Verify Account</button>
            </form>
 <p>Didn't Receive Code? <span className="text-red-600 cursor-pointer font-medium">Resend</span></p>

        </div>
    </div>
}