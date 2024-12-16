import { ChevronRight, ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function SecLast() {
  return (
    <div className="w-full">
      <h5>
        Gear Up 
      </h5>
      <Link href={""} className="mt-10">
      <div className="w-[98%]  ">
        <Image src={"/product.png"}  alt="products"width={4000} height={4000} />
         
      </div>
      </Link>
      <h5>Don't Miss</h5>
      <div className="mt-5">
        <Link href={""}>
        <div>
          <Image src={"/seclast.png"} height={4000} width={4000} alt="main "/>
          </div></Link>
          </div>
           
           <h5>The Essential</h5>
           <div className="mt-5">
        <Link href={""}>
        <div>
          <Image src={"/last.png"} height={4000} width={4000} alt="last "/>
          </div></Link>
          </div>
<div className="flex justify-center mt-5">
          <div className="mt-5 w-[60%] ">
        <Link href={""} >
        <div >
          <Image src={"/end.png"} height={4000} width={4000} alt="end "/>
          </div></Link>
          </div>
          </div>
          </div>
)}

export default SecLast