import { client } from '@/sanity/lib/client';
import { product } from '../utilies/page';
import {  SlidersHorizontal } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
 async function page() {
  type a ={
desciption:string,
productName:string,
inventory:number,
price:number,
_id:string,
category:string,
status:string,
image:string

  }
 
  let main = await client.fetch(`*[_type=="product" ]{
  description,productName,inventory,
    price,_id,category,status,
    image
}
`)


  return (
    <div>
      <div className='flex justify-between px-6'>
        <h5 className=''>New (500)</h5>
        <div className='hidden md:block'>
        <div className='flex gap-4 '>
          <span className='flex'>Hide Filters <SlidersHorizontal /></span>
          <h6 className='flex '>Sort By<ChevronDown /></h6>
        </div></div>
      </div>
      
      <div className='w-full mt-10 flex '>
        <div className='w-[30%] mt-2 hidden md:block'>
          <Image src={"/slider.png"} alt='slider' width={352095809} height={943590}/>
        </div>
        <div className='w-full md:[70%]  '>
         <div className='flex flex-wrap justify-center items-center gap-5'>
          {main.map((elem:a,i:any)=>{
            return(
              <Link href={`/Product/${elem._id}`} className='hover:shadow-xl cursor-pointer' key={i}>
              <div>
                <Image src={urlFor(elem.image)} height={300} width={300} alt='products'/>
              </div>
              <div className='mt-2'>
              <div className='flex justify-between'>
                <span>{elem.productName}</span>
                <span>{elem.price}</span>
              </div>
              <div>
                {elem.category}
              </div>
              </div>
              </Link>
            )
          })}
         </div>
         
        </div>
        
      </div>

    </div>
  )
}

export default page