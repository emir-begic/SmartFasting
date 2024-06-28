'use client'
import Image from "next/image"
import Link from "next/link"


import {Bangers, Poppins} from "next/font/google"

import SmartFastingLogoWhite from "../components/images/SmartFastingLogoWhite.png"
import Social from "../components/images/Social.png"

import { FOOTER_LINKS } from "@/app/constants"
import { usePathname } from 'next/navigation'

const bangers = Bangers({
    weight:'400',
    subsets:["latin"],
  });
  const popins = Poppins({
    weight:'400',
    subsets:["latin"],
  })

function Footer() {
  const pathname = usePathname()
  return (
    <footer className={`${popins.className}flexBetween max-container padding-container relative  z-30 py-5 mt-4 mb-4 flex flex-row items-center w-[100%] h-[100%] bg-[#2B2B2B]`}>
        <div className="flex flex-row justify-between w-[100%] m-10">
            <div className="w-[20%] ">
                <Image src={SmartFastingLogoWhite} alt="logo"/>
                <h1 className="text-white mt-4">Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown printer took</h1>
                <div className="mt-8">
                    <Image src={Social} alt="social"/>
                </div>
            </div>
            <div className=" flex flex-col ">
                <div className="">
                <h1 className={`${bangers.className} text-primary text-sm`}>Get Started</h1>
                </div>
                <div className="">
                <ul className=' hidden h-full gap-11 lg:flex w-full justify-center mt-12'>
                {FOOTER_LINKS.map((link)=>(
                    <Link href={link.href} key={link.key} className={`${bangers.className} text-lg  font-medium flexCenter cursor-pointer pb-1.5 transition-all hover:text-primary  ${pathname === link.href ? "text-primary": "text-white"}`}>
                        {link.label}
                    </Link>
                ))}
                </ul>
                </div>
                <div className="mt-12 flex flex-col">
                <textarea name="Enter your email" placeholder="Enter your email" id="1" className="rounded-full bg-[#00000029] text-white text-base font-normal pl-4 pt-1"></textarea>
                <button type="submit" className="bg-primary rounded-3xl w-[94px] h-[36px] text-white mt-4">Submit</button>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer