"use client"
import { ShoppingCart } from "lucide-react"
import AppRouter from "next/dist/client/components/app-router"
import { useState } from "react"




function Button() {
  
 const [first, setfirst] = useState(0)
  return (
   <>
    <button 
    onClick={()=>{setfirst(first+1) ; 
    }}
    className=" flex text-center md:text-left justify-center
     bg-black border border-transparent text-white px-8 py-2 rounded-3xl
      hover:bg-white hover:text-black hover:border-2 hover:border-slate-600
       mt-10 animate-bounce "><ShoppingCart className=" mr-4" /> Add To Cart</button>
   </>
  )
}

export default Button