import { product } from "../utilies/page";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
function Aside() {
  return (
    <aside>
      <div className="flex justify-between h-[52px] w-full items-center px-7 mt-3">
        <h1>Best of Air Max</h1>
        <div className="hidden md:block">
          <div className="flex items-center ">
            <span>shop</span>
            <span className="bg-slate-300 rounded-2xl p-1  ml-3">
              {" "}
              <ChevronLeft />
            </span>
            <span className="bg-slate-300 rounded-2xl p-1 ml-3">
              {" "}
              <ChevronRight />
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:px-4 md:justify-center md:mt-10 ">
        {product.slice(0, 3).map((elem, i) => {
          return (
            <Link href={"/id"} className=" md:px-4 ">
              <div key={i} className=" flex flex-col  items-center  ">
                <div>
                  <Image
                    src={elem.img}
                    alt="product"
                    width={300}
                    height={300}
                    className="shadow-lg "
                  />
                </div>
                <div className="flex pt-3">
                  <h3>{elem.title}</h3>
                  <p className="pl-4">{elem.price}</p>
                </div>
                <span className="text-slate-300 font-normal  ">
                  {elem.category}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center mt-2 underline w-full">
        <Link
          href={"/Product"}
          className="bg-black  float-right px-4 text-white rounded-xl hover:underline  hover:bg-white hover:border hover:border-black hover:text-black"
        >
          More
        </Link>
      </div>
      <h5 className="ml-8">Featured</h5>
       <div className=" w-full flex justify-center flex-col ">
              <div className="flex justify-center mt-8">
                <Image
                  src={"/frame.png"}
                  alt="heroimage"
                  height={900}
                  width={900}
                  className=" w-[90vw] h-[vh]"
                />
              </div>
             
              </div >
             
    </aside>
  );
}

export default Aside;
