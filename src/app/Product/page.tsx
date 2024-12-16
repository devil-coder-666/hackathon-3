import { product } from '../utilies/page';
import {  SlidersHorizontal } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
function page() {
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
          {product.map((elem,i)=>{
            return(
              <Link href={`${elem.id}`}>
              <div>
                <Image src={elem.img} height={300} width={300} alt='products'/>
              </div>
              <div className='mt-2'>
              <div className='flex justify-between'>
                <span>{elem.title}</span>
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