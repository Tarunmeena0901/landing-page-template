import { motion } from "framer-motion";
import { FaSailboat } from "react-icons/fa6";

export function MovingBoat() {
    return (
        <motion.span
        className="inline-block ml-2 "
        initial={{
            x:0,
            opacity:0
        }}
        animate={{
            opacity:[0,1,1],
            x: [0,0,1300],
            y: [50, 0, 0]
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            ease: [ // Apply easing to the x movement
                'linear', // Easing for the initial movement
                'easeIn', // No easing for the middle phase
                'linear' // Custom easing for the final movement to the right
            ],
            times: [0,0.25,1],
            repeatType: "loop"
        }}
        >
            <FaSailboat className="inline" />
        </motion.span>
    )
}