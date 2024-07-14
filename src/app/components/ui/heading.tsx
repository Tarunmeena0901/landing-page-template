"use client"

import { easeInOut, motion } from "framer-motion"
import { RevealEffect } from "./Effects/RevealEffect"
import { GradientContainer } from "./Effects/gradientBorder"
import { useState } from "react"

export function Heading({ onAnimationComplete }: {
    onAnimationComplete: any
}) {

    const [buttonAnimationComplete, setButtonAnimationComplete] = useState<boolean>(false);

    const handleAnimationComplete = (x: any) => {
        setButtonAnimationComplete(true);
        onAnimationComplete();
    };

    return (
        <div className="flex flex-col gap-8 mt-[10vh]">
            <div className="text-3xl text-center sm:text-start sm:text-5xl font-semibold ">
                <RevealEffect duration={0.5} delay={0.025}>
                    Give your Product the landing page it deserves
                </RevealEffect>
            </div>
            <div className="text-sm sm:text-xl text-center sm:text-start text-neutral-400 w-full px-5 sm:px-0">
                <RevealEffect duration={0.5} delay={0.01}>
                    F**k generative AI. Writing prompt, making that dumbass AI understand what you want is a headache, just buy what you want !! starting from $9.99 only.
                </RevealEffect>
            </div>
            <div className="flex gap-4 justify-center sm:justify-normal">
                    <motion.button
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
                        className="h-[6vh] w-[20vh] rounded-lg rounded-lg bg-slate-200 hover:bg-white text-black font-semibold"
                    >
                        Start Exploring
                    </motion.button>

                <motion.button
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
                    className="h-[6vh] w-[20vh] rounded-lg bg-slate-900 hover:bg-neutral-900 text-white font-semibold"
                >
                    SingUp
                </motion.button>
            </div>
            <GradientContainer hieght={7} width={70} rounded={"full"} marginTop={5} animationComplete={buttonAnimationComplete} hidden="hidden">
            <motion.div 
            className="w-[70vh] h-[7vh] bg-neutral-900 rounded-full flex justify-center items-center bg-neutral-900"
            onAnimationComplete={handleAnimationComplete}
            initial={{
                scale: 1.3,
                opacity: 0,
                filter: "blur(10px)",
            }}
            animate={{
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
            }}
            transition={{
                duration: 0.5,
                delay: 2.1,
                ease: easeInOut
            }}
            >
                <span>⭐ 10% off special discount for our Gold members</span>
            </motion.div>
            </GradientContainer>
        </div>
    )
}

