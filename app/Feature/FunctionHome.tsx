import Image from "next/image"


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

import Cojktrci from "./images/cojktrci.png"



function Hero() {
  return (
    <section className={`${bangers.className} max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[url('../components/images/BackgroundImage.png')]`}>
        <div className="flex flex-row gap-32">
            <div className="flex flex-col mt-12 ml-12">
              <div className={`${popins.className}`}>
            <h1 className="text-xl font-bold  flex flex-row mt-12"><h1 className="text-primary text-xl font-bold mr-2">-</h1>Nema opravdanja, sada postoji podsjetnik</h1>
              </div>
            <h1 className="text-4xl font-normal  font-titles mt-12">Započni novi život
            <h1 className="text-primary">start fasting</h1></h1>
            <div className={`${popins.className}`}>
            <h1 className={`text-sm font-normal w-[50%] mt-12`}>Započni mehanizam samoočuvanja putem kojeg tijelo može ukloniti nefunkcionalne, oštećene i bolesne ćelije.
            Uz FASTING tijelo reciklira oštećene ćelije i čisti tijelo od toksina, a pri tome GUBI KILOGRAME!
            </h1>
            <h1 className={`text-sm font-normal w-[50%] mt-12`}>Samoregulacija metabolizma uklanja otpatke iz ćelija, utiče na cijelo tijelo. te dovodi do optimalnog zdravlja i željene težine.</h1>
            </div>
            <div className={`${popins.className}`}>
            <button className={"text-white bg-primary w-[225px] h-[38px] rounded-full mt-12"}>Get Started With Fasting</button>
            </div>
            </div>
            <div className="w-[100%] h-[100%] m-12 ml-32">
                <Image src={Cojktrci} width={427} height={690} alt="ManRuning" priority/>
            </div>
        </div>
    </section>
  )
}



export default Hero