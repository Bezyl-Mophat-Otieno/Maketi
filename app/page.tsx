import HomeNav from "./components/navbars/Home-Nav";
import Image from "next/image";
import ServicesOffered from "./components/Services-offered";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroImage from "../public/images/hero-image.jpg";
import Herosection1 from "./components/Hero-section1";
import Herosection2 from "./components/Hero-section2";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-10 border border-red overflow-hidden">
      <HomeNav />
      <Herosection1 />
      <Herosection2 />
      <ServicesOffered />
      <Contact />
      <Footer />
    </main>
  );
}
