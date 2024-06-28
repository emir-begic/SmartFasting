import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FunctionHome from "../Feature/FunctionHome"
import TailorMade from "./TailorMade";
import StayAlert from "./StayAlert";
import Footer from "@/components/Footer";


export default function page() {
  return (
<>
<Navbar/>
<FunctionHome/>
<TailorMade/>
<StayAlert/>
<Footer/>
</>
  )
}
