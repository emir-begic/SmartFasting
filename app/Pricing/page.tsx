import DownloadApp from "./DownloadApp";
import EasyRegistration from "./EasyRegistration";
import PricingHome from "./PricingHome";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>  
    <Navbar/>
    <PricingHome/>
    <EasyRegistration/>
    <DownloadApp/>
    <Footer/>
    </>
  )
}
