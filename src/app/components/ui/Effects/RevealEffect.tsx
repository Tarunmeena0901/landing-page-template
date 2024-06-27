import { motion, easeInOut } from "framer-motion"

export const RevealEffect = ({children, duration, delay} : {
    children: string, 
    duration: number, 
    delay: number
}) => {
return (
    <motion.div>
        {children.split("").map((l,i) => {
            return <motion.span
            className=""
            initial={{
                opacity: 0,
                filter: "blur(10px)",
            }}
            animate={{
                opacity: 1,
                filter: "blur(0px)",
            }}
            transition={{
                duration: duration,
                delay: delay * i,
                ease: easeInOut
            }}
            key={i}
            >
                {l}
            </motion.span>
        })}
    </motion.div>
)
}