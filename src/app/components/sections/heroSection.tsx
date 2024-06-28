"use client"
import { easeIn, motion } from "framer-motion";
import { Heading } from "../ui/heading";
import { useState } from "react";
import { SideBar } from "../ui/hero-image-section/SideBar";
import { ImageSection } from "../ui/hero-image-section/ImageSection";

const SideBarImageArray = ["./sidebar/sidebar1.jpg", "./sidebar/sidebar2.jpg", "./sidebar/sidebar3.jpg", "./sidebar/sidebar4.jpg"]

export function HeroSection() {
  const [headingAnimationComplete, setHeadingAnimationComplete] = useState<boolean>(false);

  const handleHeadingAnimationComplete = () => {
    setHeadingAnimationComplete(true);
  };

  return (
    <section className="py-[5vh] col-span-1 grid xs:grid-cols-1 grid-cols-2 gap-5 items-center h-[100vh]">
      <div className="flex justify-center h-full">
        <div>
          <Heading onAnimationComplete={handleHeadingAnimationComplete} />
        </div>
      </div>
      <div className="z-0 relative grid grid-cols-3 items-stretch border-y-2 border-neutral-900 h-[70vh] w-full rounded-lg overflow-hidden">
        <div className="z-10 absolute h-full w-full bg-gradient-to-r from-transparent to-black/80 to-99% "></div>
        <SideBar headingAnimationComplete={headingAnimationComplete}/>
        <ImageSection headingAnimationComplete={headingAnimationComplete}/>
      </div>
    </section>
  )
}
