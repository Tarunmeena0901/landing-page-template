"use client"

import { AnimatePresence, motion } from "framer-motion";
import { ReactElement, useEffect, useRef, useState } from "react";
import { FaAmazon, FaGoogle, FaMercury } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { SiLinear, SiPerplexity, SiRaycast } from "react-icons/si";

const ClientNames: {name: string , icon: ReactElement}[] = [
    {name: "Google", icon: <FaGoogle/>},
    {name: "Meta", icon: <FaMeta/>},
    {name: "Amazon", icon: <FaAmazon/>},
    {name: "Linear", icon: <SiLinear/>},
    {name: "Perplexity", icon: <SiPerplexity/>},
    {name: "Raycast", icon: <SiRaycast/>},
];

const DELAY_IN_MS = 3500;

export function ClientRevealEffect({indexSkip} : {indexSkip: number}) {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [index, setIndex] = useState(indexSkip);

    useEffect(() => {
        intervalRef.current = setInterval(() => setIndex((prevIndex) => prevIndex + 1), DELAY_IN_MS);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const currentClient = ClientNames[index % ClientNames.length];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={index}
                className="relative text-lg sm:text-2xl block whitespace-nowrap overflow-hidden flex items-center"
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(5px)" }}
                transition={{ duration: 0.5 }}
            >
                <motion.span
                    className="inline-block mr-2"
                    initial={{ y: "-100%"}}
                    animate={{ y: 0,}}
                    exit={{ y: "100%"}}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    {currentClient.icon}
                </motion.span>
                {currentClient.name.split("").map((l, i) => (
                    <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ y: "-100%"}}
                        animate={{ y: 0}}
                        exit={{ y: "100%"}}
                        transition={{
                            duration: 0.2,
                            delay: 0.075 * i,
                            ease: "easeInOut"
                        }}
                    >
                        {l}
                    </motion.span>
                ))}
            </motion.div>
        </AnimatePresence>
    );
}
