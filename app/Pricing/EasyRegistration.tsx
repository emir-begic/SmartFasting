import {Bangers} from "next/font/google"
import { Poppins } from "next/font/google";
import Image from "next/image";

import YellowCheckCircle from "./images/YellowCheckCircle.png"
import Illustration from "./images/Illustration.png"

const bangers = Bangers({
  weight:'400',
  subsets:["latin"],
});
const popins = Poppins({
  weight:'400',
  subsets:["latin"],
});

export default function EasyRegistration() {
  return (
    <section className={`${popins.className}  max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#FFC65933]`}>
        <div className="flex flex-col m-12  w-full h-full">
            <div className="flex flex-col justify-center text-center m-4 gap-4">
                <h1 className="text-[#1C1934] text-5xl font-semibold">Easy registration process</h1>
                <h1 className="text-[#5E5D6D] text-xl font-normal">Help users discover and understand your product's value across their<br/>
                entire journey, from new user to power user.</h1>
            </div>
            <div className="flex flex-row mt-2 justify-around">
                <div className="mt-8 w-[50%]">
                    <h1 className="text-[#1C1934] text-2xl font-semibold mb-2">First step is to fill out the detailed form</h1>
                    <h1 className="text-[#5E5D6D] text-xl font-normal mb-8">Take a 15 minute survey so we can get to know you and prepare a tailored plan to achieve your goals.</h1>
                    <div className="flex flex-col">
                   <h1 className="text-[#5E5D6D] text-xl font-semibold mb-4">
                     What do we want to know
                    </h1>
                    <div className="flex flex-row gap-2 mb-4">
                        <Image src={YellowCheckCircle} alt="Check"/>
                        <h1 className="text-[#1C1934] text-xl font-normal">Activity and health habits</h1>
                    </div>
                    <div className="flex flex-row gap-2 mb-4">
                        <Image src={YellowCheckCircle} alt="Check"/>
                        <h1 className="text-[#1C1934] text-xl font-normal">Your diatary habits</h1>
                    </div>
                    <div className="flex flex-row gap-2">
                        <Image src={YellowCheckCircle} alt="Check"/>
                        <h1 className="text-[#1C1934] text-xl font-normal">Current body status</h1>
                    </div>
                    </div>
                </div>
                <div>
                    <Image src={Illustration} alt="slika"/>
                </div>
            </div>
        </div>
    </section>
  )
}
