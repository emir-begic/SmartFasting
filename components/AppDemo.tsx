import {Bangers} from "next/font/google"
import { Poppins } from "next/font/google";

import BackgroundImage from "../components/images/BackgroundImage.png"
import AppDemoImage from "../components/images/AppDemoImage.png"

import Image from "next/image";
const bangers = Bangers({
  weight:'400',
  subsets:["latin"],
});
const popins = Poppins({
  weight:'400',
  subsets:["latin"],
});

function AppDemo() {
  return (
    <section className={`${popins.className} max-container padding-container justify-center flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row`}>
          <div>
          <div className="flex flex-col text-center items-center mb-32">
            <div className={`${bangers.className}`}>
                <h1 className="text-primary flex flex-row font-xl">-<h1 className="text-black flex flex-row ml-2">App demo</h1></h1>
            </div>
            <h1 className="mt-2 text-primary flex flex-row text-2xl font-medium">View Our <h1 className="text-black text-2xl font-medium ml-2">App Demo</h1></h1>
            </div>
            <div>
             <Image src={AppDemoImage} alt="appDemo" /> 
            </div>
          </div>
    </section>
  )
}

export default AppDemo