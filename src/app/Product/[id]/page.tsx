"use client"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Button from "@/app/components/Button";



async function page(props:any) {

    
        let aa = await client.fetch(`*[_type=="product" && _id=="${props.params.id}" ]
            `)
    
   
         

  return (
    <div>
        {
               aa.map((elem:any,i:any)=>{
                return(
                    <div key={i} className=" flex justify-center flex-col md:grid md:grid-cols-2 md:gap-4 md:p-8 items-center md:pl-10">
                        <div className=" lg:pl-12 p-6">
                            <Image src={urlFor(elem.image)} height={500} width={500} alt="productImage" className="h-[400px] shadow:xl rounded-lg w-[4 00px]"></Image>
                        </div>
                        <div className=" md:w-96 lg:ml-12  justify-center flex flex-col items-center" >
                            <h3 className=" text-center md:text-left font-bold text-xl md:text-3xl">{elem.productName}</h3>
                            <p className="text-center text-balance md:text-left text-base lg:text-lg pt-10 font-medium">{elem.description}</p>
                            <h6 className="  text-left font-bold text-3xl pt-5" >₹ {elem.price}</h6>
                        
                        <div > <Button/></div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default page