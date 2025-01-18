import Image from "next/image"
import Link from "next/link"
import { upperNavLinks } from "../utilies/page"
function UpperNav() {
  return (
    <header className="h-9 w-full bg-[#f5f5f5] ">
        <nav className="flex items-center pt-1 justify-between px-8" >
            <div>
                <Image src={'/nav.png'} alt="nav" width={25} height={25}/>
            </div>
            <div className="flex gap-6">
                {upperNavLinks.map((elem,i)=>{
                    return(
                        <ul className={`border-l-[1.5px] border-black pl-3 ${i ===0 && 'border-transparent'}`}>
                            <li key={i} >
                                <Link href={`${i === 3 ? "/SignIn" : "/JoinUs"} `}>{elem}</Link>
                            </li>
                        </ul>
                    )
                })}
            </div>
        </nav>
    </header>
  )
}

export default UpperNav