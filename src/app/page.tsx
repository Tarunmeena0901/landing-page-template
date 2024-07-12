import { NavBar } from "./components/ui/navBar"
import { HeroSection } from "./components/sections/heroSection";
import { ClientSection } from "./components/sections/clients-section/ClientSection";
import { ProductInfo } from "./components/sections/product-info-section/ProductSection";
import { Footer } from "./components/Footer";


export default function Home() {
 
  return (
    <div className="relative bg-black min-w-screen min-h-screen">
      <NavBar />
      <div className=" my-auto grid grid-cols-1 place-content-center text-white px-[20vh]">
        <HeroSection/>
        <ClientSection/>
        <ProductInfo/>
      </div>
      <div className="my-auto grid py-[8vh] px-[30vh] bg-neutral-900">
        <Footer/>
      </div>
    </div>
  );
}
