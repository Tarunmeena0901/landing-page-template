import { ReactNode } from "react"

export function NavBar() {
    return (
        <div className=" absolute sticky top-5 h-[4vh] flex items-center justify-center bg-transparent w-full">
            <div className=" relative text-white flex justify-center items-center rounded w-[70vh] h-[5vh] backdrop-blur bg-slate-600/30 origin-center mx-auto border-2 border-slate-200 ">
                <Tabs>Product</Tabs>
                <Tabs>Price</Tabs>
                <Tabs>Company</Tabs>
                <Tabs>Login</Tabs>
                <Tabs>SignUp</Tabs>
            </div>
        </div>
    )
}

const Tabs = ({ children }: { children: ReactNode }) => {
    return (
        <div className="hover:bg-white rounded h-[4vh] flex items-center">
            <div className=" font-semibold  cursor-pointer block px-3 py-1.5 md:px-5 md:py-3 md:text-base rounded mix-blend-difference">
                {children}
            </div>
        </div>
    )
}