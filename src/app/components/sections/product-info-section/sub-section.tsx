import { ReactNode, useRef } from "react";
import { LampRevealEffect } from "../../ui/Effects/LampRevealEffect";

export function SubSection({children}: {
    children: ReactNode
}) {
    const ref = useRef(null);
    return <div
        ref={ref}
        className="relative z-0 h-screen w-full bg-neutral-900 ">
        <LampRevealEffect objRef={ref} />
        <div className=" h-full w-full flex justify-center py-5 items-center">
            {children}
        </div>
    </div>
}