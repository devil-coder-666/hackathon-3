import Image from "next/image"
import { MapPin } from 'lucide-react';
import { foot } from "../utilies/page";
function Footer() {
  return (
    <>
    <div className="h-[] w-full  bg-black flex flex-col items-center mt-5 text-white">
            <div className="w-[90%] mt-4">
                <Image src={"/footer.png"} alt="footer" height={5000} width={5000}/>
            </div>
            
        
    </div>
      


      <div className="flex justify-center p-5  items-center bg-black text-white text-sm ">
        <div className=" w-[90%]  flex justify-between ">
          <div className="flex justify-center ">
             <span><MapPin className="pb-1 " /></span>
             <h4>Pakiistan</h4>
          </div>
          <div className="flex gap-3">{foot.map((elem,i)=>{
            return(
                <ul className="hidden md:block" key={i}>
                    <li key={i}>
                        {elem}
                    </li>
                </ul>
            )
          })}</div>
      </div>
      </div>
    </>
  )
}

export default Footer