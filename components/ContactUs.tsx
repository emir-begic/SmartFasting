import Image from "next/image"
import BackgroundImage from "../components/images/BackgroundImage.png"

import Profile1 from "../components/images/Profile1.png"
import Profile2 from "../components/images/Profile2.png"
import Profile3 from "../components/images/Profile3.png"
import Profile4 from "../components/images/Profile4.png"
import Profile5 from "../components/images/Profile5.png"
import Profile6 from "../components/images/Profile6.png"

import { Poppins,Bangers } from "next/font/google"

const bangers = Bangers({
    weight:'400',
    subsets:["latin"],
  });
  const popins = Poppins({
    weight:'400',
    subsets:["latin"],
  });

function ContactUs() {
  return (
    
    <section className={`${popins.className} h-[1056px] max-container padding-container flex flex-col justify-center  gap-20 px-10 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[url('../components/images/BackgroundImage.png')]`}>
        <div  className="flex flex-col">
            <div className="flex flex-col text-center items-center mb-32">
            <div className={`${bangers.className}`}>
                <h1 className="text-primary flex flex-row font-xl">-<h1 className="text-black flex flex-row ml-2">NAŠI SAVJETNICI</h1></h1>
            </div>
            <h1 className="mt-2 text-primary flex flex-row text-2xl font-medium">Globalno priznati<h1 className="text-black text-2xl font-medium ml-2">Fitness 
            </h1></h1>
            <h1 className="text-black text-2xl font-medium">treneri stoje iza naše aplikacije!</h1>
            </div>
        <div className="mt-32 text-center">
            <Image src={Profile1}  alt="profile1" className="absolute left-[450px] top-[2400px] xl:left-[200px] xl:top-[2220px]"/>
            <Image src={Profile6} alt="profile6" className="absolute left-[590px] top-[2150px] xl:left-[420px] xl:top-[2000px] "/>
            <Image src={Profile2} alt="profile2" className="absolute right-[600px] top-[2200px] xl:right-[350px] xl:top-[2060px]" />
            <Image src={Profile3} alt="profile3" className="absolute right-[400px] top-[2450px] xl:right-[160px] xl:top-[2220px]"/>
            <div className={`${bangers.className}`} >
            <h1 className="text-primary text-5xl">KONTAKTIRAJ NAS</h1>
            </div>
            <h1 className="mt-12 text-contrast font-bold ">Ukoliko imate neka specifična pitanja,</h1><h1 className="flex flex-row text-contrast font-bold">kontaktirajte nas putem emaila:<h1 className="text-primary ml-2 font-bold">email@email.com</h1></h1>
            <Image src={Profile4} alt="profile4" className="absolute right-[700px] top-[2650px] xl:right-[400px] xl:top-[2430px]" />
            <Image src={Profile5} alt="profile5" className="absolute left-[700px] top-[2650px] xl:left-[400px] xl:top-[2410px]" />
        </div>
        </div>
    </section>
  )
}

export default ContactUs