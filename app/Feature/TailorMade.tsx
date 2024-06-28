import Image from "next/image"
import IconaJedan from "./images/IconaJedan.png"
import IconaDva from "./images/IconaDva.png"
import IconaTri from "./images/IconaTri.png"
import IconaCetri from "./images/IconaCetri.png"
import IconaPet from "./images/IconaPet.png"
import IconaSest from "./images/IconaSest.png"

export default function TailorMade() {
  return (
    <section className='max-container padding-container flex flex-col py-10 pb-32 m-4 rounded-3xl '>
        <div className="flex justify-center text-center flex-col">
            <p className="text-[#111827] text-5xl font-bold">Tailor-made features</p>
                <p className="pt-6 text-[#111827] text-lg font-normal">Program napravljen prema tebi i karakteristikama tvog tijela.</p>
        </div>
        <div className="flex flex-col">
            <div className="flex flex-row justify-evenly pt-12">
                <div className="flex justify-center flex-col text-center items-center ml-4">
                    <Image src={IconaJedan} alt="most"/>
                    <h1 className="text-[#111827] text-3xl font-bold pt-4">Personalizirani ciljevi</h1>
                    <p className="text-[#374151] text-base font-normal pt-4">
                    Program napravljen prema tebi i<br/> karakteristikama tvog tijela.
                    </p>
                </div>
                <div className="flex justify-center flex-col text-center items-center">
                    <Image src={IconaDva} alt="najvise"/>
                    <h1 className="text-[#111827] text-3xl font-bold pt-4">Dnevni podsjetnici</h1>
                    <p className="text-[#374151] text-base font-normal pt-4">
                    Ne dopuštamo ti da zaboraviš na<br/> svoje tijelo.
                    </p>
                </div>
                <div className="flex justify-center flex-col text-center items-center mr-4">
                    <Image src={IconaTri} alt="neznam"/>
                    <h1 className="text-[#111827] text-3xl font-bold pt-4">Praćenje kalorija</h1>
                    <p className="text-[#374151] text-base font-normal pt-4">
                    Pratimo dnevni unos kalorija i tu smo da<br/> ograničimo pretjeran unos.
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-evenly pt-24 mr-14">
                <div className="flex justify-center flex-col text-center items-center ml-4">
                    <Image src={IconaCetri} alt="da"/>
                    <h1 className="text-[#111827] text-3xl font-bold pt-4">Statistika</h1>
                    <p className="text-[#374151] text-base font-normal pt-4">
                    Prati svoju uspješnost kroz stastiku unosa<br/> kalorija, fastinga i ostalog. 
                    </p>
                </div>
                <div className="flex justify-center flex-col text-center items-center">
                    <Image src={IconaPet} alt="oj"/>
                    <h1 className="text-[#111827] text-3xl font-bold pt-4">Praćenje unosa vode</h1>
                    <p className="text-[#374151] text-base font-normal pt-4">
                    Praćenje i napomena za dovoljan dnevni unos<br/> tečnosti u organizam.
                    </p>
                </div>
                <div className="flex justify-center flex-col text-center items-center mr-4">
                    <Image src={IconaSest} alt="nikadstat"/>
                    <h1 className="text-[#111827] text-3xl font-bold pt-4">Disciplina</h1>
                    <p className="text-[#374151] text-base font-normal pt-4">
                    Tu smo da pomognemo vama da<br/> pomognete sebi!
                    </p>
                </div> 
            </div>
        </div>
    </section>
  )
}
