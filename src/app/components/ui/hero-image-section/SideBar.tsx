"use client"

import { easeIn, motion } from "framer-motion"

const SideBarImageArray = ["./sidebar/sidebar1.jpg", "./sidebar/sidebar2.jpg", "./sidebar/sidebar3.jpg", "./sidebar/sidebar4.jpg"]

export function SideBar ({headingAnimationComplete} : {
    headingAnimationComplete : boolean
}) {
    
    return (
        <div className="grid grid-rows-auto overflow-hidden h-full">
        {SideBarImageArray.map((link, key) => {
          return (
            <motion.div className="w-full h-full overflow-hidden">
              <motion.img
                initial={{
                  scale: 1.1,
                  opacity: 0,
                  filter: "blur(10px)"
                }}
                animate={headingAnimationComplete ? {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)",
                } : {}}
                transition={{
                  delay: 0.15 * key,
                  duration: 0.9,
                  ease: easeIn
                
                }}
                key={key}
                src={link}
                className="w-full h-full object-cover object-center"
                >
              </motion.img>
            </motion.div>
          )
        })}
        </div>
    )
}