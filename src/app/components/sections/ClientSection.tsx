"use client"
import { motion, useInView, useMotionTemplate, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function ClientSection () {
    const ref = useRef(null);
    // const {scrollYProgress} = useScroll({
    //     target: ref,
    //     offset: ['start start','end end']
    // })

    // const lightRevealProgress = useTransform(scrollYProgress, [0,100], ['0%','100%']);
    // const background = useMotionTemplate`linear-gradient(to right, black ${40 - lightRevealProgress}%, transparent 50%, black 60%)`

    const isInView = useInView(ref, { amount: 0.75 ,once: true })

    return (
        <section 
        ref={ref}
        className="relative bg-neutral-900 h-screen ">
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
                filter: isInView ? "blur(0px)" : "blur(10px)"
            }}
            className="h-full grid place-content-center text-3xl font-bold"
            >
                HELLLOO
            </motion.div>
        </section>
    )
}