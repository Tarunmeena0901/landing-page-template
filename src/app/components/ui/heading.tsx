"use client"

import { easeInOut, motion } from "framer-motion"
import { RevealEffect } from "./Effects/RevealEffect"
import { GradientContainer } from "./Effects/gradientBorder"
import { useState } from "react"

export function Heading ({onAnimationComplete} : {
    onAnimationComplete: any
 }) {

    const [buttonAnimationComplete, setButtonAnimationComplete] = useState<boolean>(false);

    const handleAnimationComplete = (x : any) => {
          setButtonAnimationComplete(true);
          onAnimationComplete();
      };    

    return (
        <div className="flex flex-col gap-8 mt-[10vh]">
        <div className="text-5xl font-semibold ">
            <RevealEffect duration={0.5} delay={0.025}>Give your Product the landing page it deserves</RevealEffect>
        </div>
        <div className="text-xl text-neutral-400">
            <RevealEffect duration={0.5} delay={0.01}>F**k generative AI , writing prompt making that dumbass AI understand what you want is a headache, just buy what you want !! starting from $9.99 only.
            </RevealEffect>
        </div>
        <div>
            <GradientContainer hieght={6} width={20} rounded={"lg"} animationComplete={buttonAnimationComplete}>
            <motion.button 
            onAnimationComplete={handleAnimationComplete}
            initial={{
                opacity: 0,
                filter: "blur(10px)",
            }}
            animate={{
                opacity: 1,
                filter: "blur(0px)",
            }}
            transition={{
                duration: 0.5,
                delay: 2,
                ease: easeInOut
            }}
            className="h-full w-full rounded-lg bg-neutral-200 hover:bg-white text-black font-semibold"
            >
                Start Exploring
            </motion.button>
            </GradientContainer>
        </div>
        </div>
    )
}

