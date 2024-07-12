"use client"
import { motion, useInView, useMotionTemplate, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ClientDisplay } from "./ClientsDisplay";

export function ClientSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true })

    return (
        <section
            ref={ref}
            className="relative bg-neutral-900 h-screen py-[5vh]"
        >
            <motion.div
                animate={{
                    background: isInView ? 'linear-gradient(90deg, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 95%) no-repeat' :
                        'linear-gradient(90deg, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 60%) no-repeat'
                }}
                transition={{
                    duration: 2
                }}
                className="absolute inset-0">
            </motion.div>
            <motion.div
                animate={{
                    filter: isInView ? "blur(0px)" : "blur(5px)"
                }}
                className="h-full flex flex-col items-center gap-5"
            >
                <div className="h-1/4 flex flex-col justify-center items-center mt-5">
                    <span className="text-4xl text-center font-semibold">Trusted by enterprises all over the world</span>
                    <span className="text-xl text-neutral-400 text-center">Perfect solution for fast pace development environment</span>
                </div>
                <ClientDisplay />
            </motion.div>
        </section>
    )
}