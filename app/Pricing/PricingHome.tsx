import Image from "next/image"
import Link from "next/link";

import {Bangers} from "next/font/google"
import { Poppins } from "next/font/google";

const bangers = Bangers({
  weight:'400',
  subsets:["latin"],
});
const popins = Poppins({
  weight:'400',
  subsets:["latin"],
});

import Zenameditira from "./images/zenameditira.png"


function Hero() {
  return (
    <section className={`${bangers.className} max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[url('../components/images/BackgroundImage.png')]`}>
        <div className="flex flex-row">
            <div className="flex flex-col mt-12 ml-12">
              <div className={`${popins.className}`}>
            <h1 className="text-xl font-bold  flex flex-row mt-12"><h1 className="text-primary text-xl font-bold mr-2">-</h1>Your Fasting Reminder</h1>
              </div>
            <h1 className="text-4xl font-normal  font-titles mt-12">Start your new life
            <h1 className="text-primary">start fasting</h1></h1>
            <div className={`${popins.className}`}>
            <h1 className={`text-sm font-normal w-[50%] mt-12`}>Lorem Ipsum is simply dummy text of the printing and t
                ypesetting industry. Lorem Ipsum has been the industry
                's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it 
                to make a type specimen book. It has survived not only 
                five centuries,
            </h1>
            </div>
            <div className={`${popins.className}`}>
            <button className={"text-white bg-primary w-[225px] h-[38px] rounded-full mt-12"}>Get Started With Fasting</button>
            </div>
            </div>
            <div className="w-[100%] h-[100%] m-12">
                <Image src={Zenameditira} width={427} height={690} alt="WomenMed" priority/>
            </div>
        </div>
    </section>
  )
}



export default Hero