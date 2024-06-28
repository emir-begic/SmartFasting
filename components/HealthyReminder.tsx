import { Poppins,Bangers } from "next/font/google"

import Image from "next/image";

import SmartFastingPhones from "@/components/images/SmartFastingPhones.png"
import Phones from "../components/images/Phones.png"
import GooglePlay from "../components/images/GooglePlay.png"
import AppleStore from "../components/images/AppleStore.png"

const bangers = Bangers({
    weight:'400',
    subsets:["latin"],
  });
  const popins = Poppins({
    weight:'400',
    subsets:["latin"],
  });

function HealthyReminder() {
  return (
    <section className={`${popins.className} max-container padding-container flex flex-col gap-20  md:gap-28 xl:flex-row bg-primary`}>
        <div className="flex flex-row gap-32">
            <div className="gap-20 ml-32 mt-32">
                <h1 className="text-[#111827] text-5xl font-bold">Sve na jednom mjestu</h1>
                <h1 className="mt-2 text-black text-lg font-medium">Tako jednostavno, a prosto dovoljno!<br/>
                Naša aplikacija je tu da poboljša tvoje tijelo i napravi najbolju<br/> verziju tebe!</h1>
                <div className="mt-8">
                    <h1 className="text-black text-lg font-medium">Preuzmi aplikaciju</h1>
                    <div className="flex flex-row mt-4">
                    <Image src={GooglePlay} alt="googlePlay" />
                    <Image src={AppleStore} alt="appleStore"/>
                    </div>
                </div>
            </div>
            <div className=" ml-32">
                <Image src={SmartFastingPhones} alt="phones"/>
            </div>
        </div>
    </section>
  )
}

export default HealthyReminder