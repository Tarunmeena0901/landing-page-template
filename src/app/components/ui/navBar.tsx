"use client"

import { motion } from "framer-motion"
import { ReactNode, useRef, useState } from "react"

export function NavBar() {
    const [position, setPostion] = useState({
        opacity: 0,
        left:0,
        width: 0,
    })

    return (
        <div className="z-20 absolute sticky top-5 h-[4vh] flex items-center justify-center bg-transparent w-full">
            <div className="relative text-white cursor-pointer flex justify-center items-center rounded-lg w-[110vh] h-[6vh] backdrop-blur bg-neutral-900/30 border-2 border-neutral-800 ">
                <div className="mx-4 text-sm gap-1 rounded flex justify-center items-center"> 
                    <img src="./logo3.svg"></img>
                    10$LandingPage
                </div>
                <Tabs setPosition={setPostion}>Products</Tabs>
                <Tabs setPosition={setPostion}>Company</Tabs>
                <Tabs setPosition={setPostion}>Blogs</Tabs>
                <Tabs setPosition={setPostion}>Pricing</Tabs>
                <button className="mx-2 text-sm bg-slate-900 rounded-lg h-[4vh] w-[10vh] flex justify-center items-center">Login</button>
                <button className="mx-2 text-sm bg-white text-black rounded-lg h-[4vh] w-[10vh] flex justify-center items-center">SignUp</button>
                <Cursor position={position}/>   
            </div>
        </div>
    )
}

const Tabs = ({ children , setPosition }: { children: ReactNode, setPosition: any }) => {
    const ref = useRef<any>(null);
    return (
            <li
            ref={ref}
            onMouseLeave={() => {
                setPosition((pv: any) => ({
                    ...pv,
                    opacity: 0,
                }))
            }}
            onMouseEnter={() => {
                if(!ref.current) return;
                const {width} = ref.current?.getBoundingClientRect();
                setPosition({
                    opacity: 1,
                    left: ref.current?.offsetLeft,
                    width,
                })
            }}
            className=" cursor-pointer z-10 block px-3 py-1 md:px-5 mx-3 rounded text-sm  mix-blend-difference"
            >
                {children}
            </li>
    )
}

const Cursor = ({position} : {
    position: any
} ) => {
    return <motion.div
    animate={position}
    className="absolute z-0 h-8 bg-black rounded-lg bg-white"
    />
}