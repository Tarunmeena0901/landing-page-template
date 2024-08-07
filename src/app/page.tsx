import { NavBar } from "./components/ui/navBar"
import { HeroSection } from "./components/sections/heroSection";
import { ClientSection } from "./components/sections/clients-section/ClientSection";
import { ProductInfo } from "./components/sections/product-info-section/ProductSection";
import { Footer } from "./components/Footer";
import { JoinSection } from "./components/sections/JoinSection";
import { PricingSection } from "./components/sections/pricing-section/PricingSection";


export default function Home() {
 
  return (
    <div className="relative bg-black min-w-screen min-h-screen">
      <NavBar />
      <div className=" my-auto grid grid-cols-1 place-content-center text-white sm:px-[20vh] px-[5vh]">
        <HeroSection/>
        <ClientSection/>
        <ProductInfo/>
        <PricingSection/>
        <JoinSection/>
      </div>
      <div className="my-auto grid py-[8vh] px-[5vh] sm:px-[30vh] bg-neutral-900">
        <Footer/>
      </div>
    </div>
  );
}
