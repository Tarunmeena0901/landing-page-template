import { ReactNode } from "react"

export function Card({imgAdd, children} : {
    imgAdd: string,
    children: ReactNode
}) {
    return (
        <div className="w-[30%] h-3/5 border-neutral-800 bg-black  flex flex-col gap-4 items-center px-3 py-4 rounded-xl">
            <div className="border-2 bg-neutral-900 border-neutral-800 h-3/4 w-full rounded-xl">
            <img 
            src={imgAdd}
            className="object-cover h-full w-full bg-black rounded-xl"
            />
            </div>
            {children}
        </div>
        )
}