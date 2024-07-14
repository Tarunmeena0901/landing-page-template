import { motion, useInView } from "framer-motion";
import { RefObject } from "react";

export function LampRevealEffect({ objRef }: { objRef: RefObject<Element> }) {
    const isInView = useInView(objRef, { amount: 0.5, once: true })

    return <div>
        <div
            style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 25%,rgba(0,0,0,0) 35%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 45%,rgba(0,0,0,0) 50%,rgba(0,0,0,0) 55%,rgba(0,0,0,0) 60%,rgba(0,0,0,0) 65%, rgba(0,0,0,0) 75%,rgba(0,0,0,0) 85%, rgba(0,0,0,1) 100%) no-repeat'
            }}
            className="absolute inset-0 z-0">
        </div>
        <motion.div
            animate={{
                background: isInView ? 'linear-gradient(0deg, rgba(0,0,0,1) 5%,rgba(0,0,0,0.8) 7%,rgba(0,0,0,0.8) 9%,rgba(0,0,0,0.6) 11%,rgba(0,0,0,0.8) 13%, rgba(0,0,0,0) 90%, rgba(0,0,0,1) 99%) no-repeat' :
                    'linear-gradient(0deg, rgba(0,0,0,1) 76%,rgba(0,0,0,0.8) 78%,rgba(0,0,0,0.6) 81%,rgba(0,0,0,0.4) 83%, rgba(0,0,0,0.2) 85%, rgba(0,0,0,0.8) 90%, rgba(0,0,0,1) 100%) no-repeat'
            }}
            transition={{
                duration: 1.75,
                delay: 0.1,
                ease: 'easeOut'
            }}
            className="absolute inset-0 z-0">
        </motion.div>
        <motion.div
            style={{
                boxShadow: "0px 8px 24px 1px #FFFFFF",
                transformOrigin: "center"
            }}
            animate={{
                scaleX: isInView ? 1 : 0
            }}
            transition={{
                duration: 1.5,
                ease: 'easeOut'
            }}
            className="absolute z-0 top-0 bg-blue-100  inset-x-40 h-[2px] origin-center rounded-full"
        />
    </div>
}