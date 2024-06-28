import React from 'react'
import Image from 'next/image'

import CojkPraviSalatu from "./images/cojkpravisalatu.png"

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

export default function HowItWorks() {
  return (
    <section className={`${bangers.className} max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[url('../components/images/BackgroundImage.png')]`}>
        <div className="flex flex-row">
            <div className="flex flex-col mt-12 ml-12">
              <div className={`${popins.className}`}>
            <h1 className="text-xl font-bold  flex flex-row mt-12"><h1 className="text-primary text-xl font-bold mr-2">-</h1>Nema opravdanja, sada postoji podsjetnik</h1>
              </div>
            <h1 className="text-4xl font-normal  font-titles mt-12">kako
            <h1 className="text-primary flex flex-row">start fasting</h1><h1 className='text-black'>radi</h1></h1>
            <div className={`${popins.className}`}>
            <h1 className={`text-sm font-normal w-[70%] mt-12`}>Uz informacije o vama, naš algoritam određuje Vaš program i raspored fastinga.
Algoritam je tu da postavi realne ciljeve, i uz zavisnosti od Vašeg pridržavanja ciljevi se prilagođavaju.
Ono što je potrebno od Vas je posvećenost, kao i strpljenje - Rezultati ne dolaze preko noći.
            </h1>
            <h1 className={`text-sm font-normal w-[50%]`}>Potrebno je da naviku fastinga postepeno integrirate u Vašu svakodnevnu rutinu, a mi smo tu da Vam u tme pomognemo.
            Ukoliko želite znati više o Fastingu, ili Vam trebaju savjeti - Obratite nam se. Stručnjaci iz našeg time će Vam rado pomoći.
            </h1>

            </div>
            <div className={`${popins.className}`}>
            <button className={"text-white bg-primary w-[225px] h-[38px] rounded-full mt-12"}>Get Started With Fasting</button>
            </div>
            </div>
            <div className="w-[100%] h-[100%] m-12">
                <Image src={CojkPraviSalatu} width={427} height={690} alt="Manpot" priority/>
            </div>
        </div>
    </section>
  )
}
