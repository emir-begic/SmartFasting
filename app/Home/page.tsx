import AppDemo from "@/components/AppDemo";
import ContactUs from "@/components/ContactUs";
import DownloadApp from "@/components/DownloadApp";
import Footer from "@/components/Footer";
import HealthyReminder from "@/components/HealthyReminder";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <DownloadApp/>
    <ContactUs/> 
    <HealthyReminder/>
    <Testimonials/>
    <Footer/>
    </>
  );
}
