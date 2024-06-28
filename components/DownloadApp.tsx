import Image from "next/image"

import QRCode from "../components/images/QRCode.png"
import {Bangers, Poppins} from "next/font/google"

import Time from "../components/images/Time.png"
import Pace from "../components/images/Pace.png"
import Cost from "../components/images/Cost.png"
import Fast from "../components/images/Fast.png"


const bangers = Bangers({
    weight:'400',
    subsets:["latin"],
  });
  const popins = Poppins({
    weight:'400',
    subsets:["latin"],
  });

function DownloadApp() {
  return (
    <section className={` ${popins.className}  max-container padding-container flex flex-col gap-20 px-10 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row`}>
        <div className="flex flex-col w-[100%]">
            <div className="flex flex-row justify-between">
                <div>
                    <div className={`${bangers.className}`}>
                    <h1 className="text-black text-2xl">PREUZMI NAŠU fasting  
                    <h1 className="text-primary">
                    APLIKACIJU JOŠ DANAS !
                        </h1> 
                    </h1>
                    </div>
                    <h1 className="mt-4 text-black text-sm font-bold">Pođi u susret zdravlju, dužem i kvalitetnijem životu,<br/> te LJEPŠEM IZGLEDU, uz optimalan broj kilograma!</h1>
                    <h1 className="mt-4 text-black text-sm font-bold">“Sve što možeš učiniti danas, ne ostavljaj za sutra.”</h1>
                </div>
                <div className="flex justify-around w-[30%] h-[100%]">
                    <div className="text-center items-center justify-center">
                        <div className={`${bangers.className}`}>
                        <h1 className="font-noraml text-xl">Za iOS</h1>
                        </div>
                        <h1 className="text-[#6C6C6C] font-normal text-md">iOS 15.6 +</h1>
                        <button className="p-2 bg-[#FFC659] rounded-full mt-4 text-white " >Preuzmi aplikaciju</button>
                        <div className="flex justify-center mt-8">
                        <Image src={QRCode} alt=""/>
                        </div>
                    </div>
                    <div className="text-center items-center justify-center">
                        <div className={`${bangers.className}`}>
                        <h1 className="font-noraml text-xl">Za Android</h1>
                        </div>
                        <h1 className="text-[#6C6C6C] font-normal text-md">Android 8.6 +</h1>
                        <button className="p-2 bg-[#FFC659] rounded-full mt-4 text-white " >Preuzmi aplikaciju</button>
                        <div className="flex justify-center mt-8">
                        <Image src={QRCode} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-12">
                <div className="flex flex-row justify-between mt-32 mb-12">
                    <div>
                        <div className={`${bangers.className}`}>
                        <h1 className="text-xl flex-row flex"><h1 className="text-primary mr-2">-</h1>BENEFITI FASTINGA</h1>
                        </div>
                        <h1 className="mt-2 text-primary text-2xl font-medium">Izdvojeni benefiti<h1 className="text-black">naše aplikacije</h1></h1>
                    </div>
                    <div className="border-l-2 border-black flex items-center">
                        <h1 className="ml-3">Program kreiran prema tebi. Prepoznaje tvoje kvalitete i mane.<br/> 
                        Vodi te od početka do kraja, uz stalne napomene, samo tvojim puteem do željenog cilja.</h1>
                    </div>
                </div>
                <div className="flex flex-row mt-16  justify-evenly">
                   <div className="flex flex-col w-[12%] justify-center text-center items-center">
                        <Image src={Time} alt=""/>
                        <div className={`${bangers.className} mt-8 mb-2`}>
                        <h1 className="text-primary text-xl">
                        UŠTEDA VREMENA  
                         </h1> 
                        </div>
                        <div className="flex  text-center">
                        <h1 className="mt-2 text-sm">Jednostavne funkcionalnosti čine praćenje FASTING-a brzim i jednostavnim - Prilagođeno tebi!</h1>
                        </div>
                    </div> 
                    <div className="flex flex-col  w-[12%] justify-center text-center items-center">
                        <Image src={Pace} alt=""/>
                        <div className={`${bangers.className} mt-8 mb-2`}>
                        <h1 className="text-primary text-xl">
                        PERSONALIZACIJA  
                         </h1> 
                        </div>
                        <div className="flex  text-center">
                        <h1 className="mt-2 text-sm">Program adaptiran prema tebi, vodeći računa o tvojim navikama, stanju organizma, kao i željenom rezultatu.</h1>
                        </div>
                    </div> 
                    <div className="flex flex-col w-[12%] justify-center text-center items-center">
                        <Image src={Cost} alt=""/>
                        <div className={`${bangers.className} mt-8 mb-2`}>
                        <h1 className="text-primary text-xl">
                        UŠTEDA NOVCA 
                         </h1> 
                        </div>
                        <div className="flex text-center">
                        <h1 className="mt-2 text-sm">Uštedi na silnim skupocjenim preparatima. Uz START FASTING - pomozi sebi, svoj zdravlju i izgledu!</h1>
                        </div>
                    </div> 
                    <div className="flex flex-col w-[12%] justify-center text-center items-center">
                        <Image src={Fast} alt=""/>
                        <div className={`${bangers.className} mt-8 mb-2`}>
                        <h1 className="text-primary text-xl">
                        BRZO I PRECIZNO
                         </h1> 
                        </div>
                        <div className="flex  text-center">

                        <h1 className="mt-2 text-sm">Vaš individualni program je određen brzo i precizno. Uz našu podršku - uspjeh je zagarantovan!</h1>
                        </div>
                    </div> 

                </div>
            </div>
        </div>
    </section>
  )
}

export default DownloadApp