"use client"

import { easeIn, motion } from "framer-motion"

const ImageArray = [
    "./HeroImageParts/part1.jpg",
    "./HeroImageParts/part2.jpg"
  ];
  
  export function ImageSection({ headingAnimationComplete }: { headingAnimationComplete: boolean }) {
    return (
        <div className="grid grid-cols-2 h-full col-span-2">
            {ImageArray.map((link, key) => (
              <motion.img
                initial={{
                  scale: 1.3,
                  opacity: 0,
                  filter: "blur(10px)"
                }}
                animate={headingAnimationComplete ? {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)",
                } : {}}
                transition={{
                  delay: 0.35 * key,
                  duration: 0.9,
                  ease: easeIn
                }}
                key={key}
                src={link}
                className="w-full h-full object-fill object-center "
              />
            ))}
        </div>
    );
  }