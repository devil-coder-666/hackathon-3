import Image from "next/image"
import Link from "next/link"
import UpperNav from "./UpperNav"
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import { navLinks } from "../utilies/page"
import { ShoppingBag } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
import { Heart } from 'lucide-react';

function Navbar() {
  let a = 0;

  return (
    <>
    <div className="hidden md:block">
      <UpperNav />
    </div>
    <header className="h-[60px] bg-white w-full">
        <nav className="flex justify-between  px-2 md:px-6 items-center">
            <div className="pt-1">
              <Link href={"./"}>
                <Image src={"/logo.png"} alt="logo" width={50} height={50}/></Link>
            </div>
            <div className=" hidden lg:block ">
            <div className=" gap-8 pt-2 pl-14 flex ">
                {navLinks.map((elem:any,i:any)=>{
                    return(
                        <ul className="flex border-transparent">
                            <li key={i} >
                                <Link href={"/Product"} className="hover:border-b-[1.5px] hover:border-black border-transparent" >{elem}</Link>
                            </li>
                        </ul>
                    )
                })}
            </div>
            </div>
            <div className="flex gap-2 md:gap-3 pt-2">
                
                    <div className="flex ">
                    <div className="w-10  bg-[#f5f5f5] rounded-l-2xl h-10">
                    <Search className="mt-2 ml-1 w-9 h-6 " />
                    </div>
                    <input type="text"placeholder="Search" className=" focus:outline-none bg-[#f5f5f5] w-24  h-10 rounded-r-2xl "/>
                     </div>
                     <div className="mt-1">
                        <Heart className="w-7 h-[33px]" />
                     </div>
                   <div className="bg-red-600 text-white rounded-[50%]  px-[6px] absolute top-2  right-10 z-50 text-sm md:right-16 md:top-11 lg:right-4">
{a}
                   </div>
                     <div className="mt-2 z-10" >
                      <Link href={"/Cart"}>
                        <ShoppingBag />
                      </Link>
                     </div>
                     <div className="mt-1 lg:hidden">
            <DropdownMenu>
  <DropdownMenuTrigger><Menu className="h-8 w-8"/></DropdownMenuTrigger>
  <DropdownMenuContent>
   
    <DropdownMenuSeparator />
    <DropdownMenuItem>Products</DropdownMenuItem>
    <Link href={"/SignIn"}><DropdownMenuItem>Sign In</DropdownMenuItem></Link>
    <Link href={"/JoinUs"}><DropdownMenuItem>Join Us</DropdownMenuItem></Link>
    <DropdownMenuItem>Help</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

            </div>
            </div>
           
        </nav>
    </header>
    </>
  )
}

export default Navbar