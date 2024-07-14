"use client"

import { animate, useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

export const GradientContainer = ({ children, hieght, width, rounded, marginTop, animationComplete, hidden }: {
    children: any,
    hieght: number,
    width: number,
    rounded: any,
    marginTop?: number,
    animationComplete?: boolean,
    hidden?: string
}) => {
    const COLORS = ["#13FFAA", "#1E67C7", "#CE84CF", "#DD335C"];
    const color = useMotionValue(COLORS[0]);
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    useEffect(() => {
        animate(color, COLORS, {
            ease: "easeInOut",
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])
    return (
        <motion.div
            style={ animationComplete ? {
                boxShadow
            } : {}}
            className={`h-[${hieght}vh] w-[${width}vh] rounded-${rounded} mt-${marginTop} ${hidden} sm:block `}
        >
            {children}
        </motion.div>
    )
}