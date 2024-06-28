"use client"

import { easeIn, motion } from "framer-motion"

const SideBarImageArray = ["./sideBar/sidebar1.jpg", "./sidebar/sideBar2.jpg", "./sidebar/sideBar3.jpg", "./sidebar/sideBar4.jpg"]

export function SideBar ({headingAnimationComplete} : {
    headingAnimationComplete : boolean
}) {
    
    return (
        <div className="grid grid-rows-auto overflow-hidden h-full border-2 border-neutral-800 rounded">
        {SideBarImageArray.map((link, key) => {
          return (
            <motion.div key={key} className="w-full h-full overflow-hidden">
              <motion.img
                initial={{
                  scale: 1.3,
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