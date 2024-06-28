import { NavBar } from "./components/ui/navBar"
import { HeroSection } from "./components/sections/heroSection";

export default function Home() {
  return (
    <div className="bg-black min-w-screen min-h-screen">
      <NavBar />
      <div className=" my-auto grid grid-cols-1 place-content-center text-white px-[20vh]">
        <HeroSection/>
      </div>
    </div>
  );
}
