"use client"

import { SubSection } from "./sub-section"
import { FaHandshake } from "react-icons/fa"
import { FaArrowUpRightDots, FaSailboat } from "react-icons/fa6"
import { Card } from "./Card"

export function ProductInfo() {

    return (
        <section className="relative bg-black h-[300vh] ">
            <SubSection>
                <div className="w-full  h-full flex justify-center gap-4 p-5">
                    <Card imgAdd="./Info/demo_graph.png">
                        <p className="z-10 text-base font-medium py-2 text-neutral-200">
                            Increase your revenue by 30%, in very short period of time <FaArrowUpRightDots className="inline ml-2" />
                        </p>
                    </Card>
                    <Card imgAdd="./Info/community.svg">
                        <p className="z-10 text-base font-medium py-2 text-neutral-200">
                            A perfect first impression to convert visitors to customers <FaHandshake className="inline ml-2" />
                        </p>
                    </Card>
                    <Card imgAdd="./Info/demo_graph2.png">
                        <p className="z-10 text-base font-medium py-2 text-neutral-200">
                            Ship 50% faster with these SEO friendly home page<FaSailboat className="inline ml-2" />
                        </p>
                    </Card>
                </div>
            </SubSection>
        </section>
    )
}