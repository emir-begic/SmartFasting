import Image from "next/image"

import {Bangers, Poppins} from "next/font/google"
import QRCode from "../../components/images/QRCode.png"

const bangers = Bangers({
    weight:'400',
    subsets:["latin"],
  });
  const popins = Poppins({
    weight:'400',
    subsets:["latin"],
  });

export default function DownloadApp() {
  return (
    <section className={` ${popins.className}  max-container padding-container flex flex-col gap-20 px-10 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row`}>
        <div className="flex flex-col w-[100%] ">
            <div className="flex items-center justify-center mb-12">
        <button className="bg-primary text-white rounded-full h-full p-4 text-3xl font-semibold">Get Started Now - Fulfill Form</button>
            </div>
            <div className="flex flex-row justify-between mt-12">
                <div>
                    <div className={`${bangers.className}`}>
                    <h1 className="text-black text-2xl">Download  Our 
                    <h1 className="text-primary">
                    fasting app Today ! 
                        </h1> 
                    </h1>
                    </div>
                    <h1 className="mt-4">Lorem Ipsum has been the industry's standard dummy<br/> 
                    text ever since the 1500s, when an unknown printer took</h1>
                    <h1 className="mt-4">Lorem Ipsum has been the industry's standard dummy<br/> 
                    text ever since the 1500s, when an unknown printer took</h1>
                </div>
                <div className="flex justify-around w-[30%] h-[100%]">
                    <div className="text-center items-center justify-center">
                        <div className={`${bangers.className}`}>
                        <h1 className="font-noraml text-xl">For iOS</h1>
                        </div>
                        <h1 className="text-[#6C6C6C] font-normal text-md">iOS 15.6 +</h1>
                        <button className="p-2 bg-[#FFC659] rounded-full mt-4 text-white " >Download App</button>
                        <div className="flex justify-center mt-8">
                        <Image src={QRCode} alt=""/>
                        </div>
                    </div>
                    <div className="text-center items-center justify-center">
                        <div className={`${bangers.className}`}>
                        <h1 className="font-noraml text-xl">For Android</h1>
                        </div>
                        <h1 className="text-[#6C6C6C] font-normal text-md">Android 8.6 +</h1>
                        <button className="p-2 bg-[#FFC659] rounded-full mt-4 text-white " >Download App</button>
                        <div className="flex justify-center mt-8">
                        <Image src={QRCode} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}
