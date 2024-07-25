"use client"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ReactNode } from "react";

export function TorchBackgroundContainer({ children }: {
    children: ReactNode
}) {
    const torchX = useMotionValue(0);
    const torchY = useMotionValue(0);
    const torchOpacity = useMotionValue(0);

    const transform = useMotionTemplate`translateX(${torchX}) translateY(${torchY})`;
    const handleMouseMove = (e: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const cursorX = e.clientX - rect.left;
        const cursorY = e.clientY - rect.top;
        torchY.set(cursorY);
        torchX.set(cursorX);

    }
    const handleMouseEnter = () => {
        torchOpacity.set(1);
    }
    const handleMouseLeave = () => {
        torchOpacity.set(0);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="h-full w-full relative"
        >
            <div className="absolute -z-10 inset-0 overflow-hidden">
                <motion.div
                    style={{
                        opacity: torchOpacity,
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.100), rgba(255, 255, 255, 0.070), rgba(255, 255, 255, 0.022), rgba(0, 0, 0, 0))',
                        left: torchX,
                        top: torchY,
                        position: 'absolute',
                        transform: 'translate(-50%, -50%)'
                    }}
                    transition={{
                        ease: 'easeInOut'
                    }}
                    className="w-[25rem] h-[25rem] pointer-events-none"
                >
                </motion.div>
            </div>
            {children}
        </motion.div>
    )

}