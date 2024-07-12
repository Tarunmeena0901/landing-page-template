"use client"

import { SubSection } from "./sub-section"
import { FaHandshake } from "react-icons/fa"
import { FaArrowUpRightDots, FaSailboat } from "react-icons/fa6"
import { Card } from "./Card"
import { MovingBoat } from "../../ui/Effects/MovingBoat"

export function ProductInfo() {

    return (
        <section className="relative bg-black h-[170vh] ">
            <SubSection>
                <div className="w-full  h-full flex justify-center gap-4 p-5">
                    <Card imgAdd="./Info/demo_graph.png">
                        <p className="z-10 text-base font-medium py-2 text-neutral-200">
                            Increase your revenue by 10%, in very short period of time <FaArrowUpRightDots className="inline ml-2" />
                        </p>
                    </Card>
                    <Card imgAdd="./Info/community.svg">
                        <p className="z-10 text-base font-medium py-2 text-neutral-200">
                            A perfect first impression to convert visitors to customers <FaHandshake className="inline ml-2 animate-bounce" />
                        </p>
                    </Card>
                    <Card imgAdd="./Info/demo_graph2.png">
                        <p className="z-10 w-full text-base font-medium py-2 text-neutral-200">
                            Ship 30% faster with these SEO friendly landing pages<MovingBoat />
                        </p>
                    </Card>
                </div>
            </SubSection>
            <SubSection>
                <div className="w-full  h-full grid grid-cols-5 p-2">
                    <div className=" col-span-2 w-4/5 flex flex-col items-center gap-4 justify-self-end mt-5 ">
                        <p className=" text-4xl  text-start">
                            <b className="uppercase">Smooth</b> animations to make your website look alive
                        </p>
                        <div className="z-10 grid grid-cols-2 border-t-2 border-neutral-800 p-2">
                            <p className="font-semibold text-white">
                                Customizable
                            </p>
                            <p className=" text-neutral-400 text-start">
                                10$landing page give you carefully handcrafted landing pages which are highly customizable
                            </p>
                        </div>
                        <div className="z-10 grid grid-cols-2 border-t-2 border-neutral-800 p-2">
                            <p className="font-semibold text-white">
                                Ease to use
                            </p>
                            <p className="text-neutral-400 text-start">
                                Highly detailed guide even a novice can understand and implement 
                            </p>
                        </div>
                        
                    </div>
                    <div className="col-span-3 flex justify-center p-5">
                        <img
                            className="w-full h-full object-cover border-2 border-dashed border-neutral-800  rounded-lg "
                            src="./Info/demo_image.png">
                        </img>
                    </div>
                </div>
            </SubSection>
        </section>
    )
}