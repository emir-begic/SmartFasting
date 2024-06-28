'use client'
import Image from "next/image"
import Link from "next/link"
import {Bangers, Poppins} from "next/font/google"

import SmartFastingLogo from "../components/images/SmartFastingLogo.png"

import { NAV_LINKS } from "@/app/constants"
import { usePathname } from 'next/navigation'


const bangers = Bangers({
  weight:'400',
  subsets:["latin"],
});
const popins = Poppins({
  weight:'400',
  subsets:["latin"],
})



function Navbar() {
  const pathname = usePathname()
  return (
    <nav className={`flexBetween max-container padding-container relative z-30 py-5 mt-4 mb-4 flex flex-row items-center w-[100%] h-[48px]`}>
        <Link className='ml-4' href="/">
        <Image src={SmartFastingLogo} alt="logo" width={146} height={52}/>
        </Link>
        <ul className=' hidden h-full gap-11 lg:flex w-[100%] justify-center'>
                {NAV_LINKS.map((link)=>(
                    <Link href={link.href} key={link.key} className={`${bangers.className} text-xl  flexCenter cursor-pointer pb-1.5 transition-all  hover:text-primary ${pathname === link.href ? "text-primary": "text-black"} `}>
                        {link.label}
                    </Link>
                ))}
        </ul>
        <div className='lg:flexCenter absolute:end mr-8 '>
        <button className='bg-primary rounded-full p-1.5 text-white w-[175px] h-[43px]'>
        Start with Fasting
        </button>
        </div>
    </nav>
  )
}

export default Navbar