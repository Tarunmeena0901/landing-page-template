import { FaPlusCircle, FaShoppingBag, FaSignInAlt } from "react-icons/fa";

export function JoinSection() {
    return (
        <section className="h-[50vh] bg-black flex shrink justify-center items-center">
            <div
                style={{
                    backgroundImage: 'radial-gradient(circle,#262626, #0A0A0A)',
                }}
                className="py-4 px-3 sm:py-8 sm:px-6 w-full h-1/2 sm:w-3/4 flex justify-around border-[1px] border-dashed border-neutral-700 rounded-lg">
                <div className="w-3/5 flex flex-col justify-center sm:justify-normal">
                    <span className="text-3xl sm:text-5xl font-bold text-white ">
                        Join now.
                    </span>
                    <span className=" text-3xl sm:text-5xl font-bold text-white">
                        Make your devs life easier.
                    </span>
                </div>
                <div className="w-2/5 flex flex-col justify-center items-end gap-4">
                    <button className="bg-neutral-200 w-[12vh] h-8 sm:w-[15vh] sm:h-10 text-base text-black sm:text-lg font-semibold rounded-md flex justify-center items-center gap-2 hover:bg-neutral-100">
                        SignUp <FaPlusCircle />
                    </button>
                    <button className="bg-slate-800 w-[12vh] h-8 sm:w-[15vh] sm:h-10 text-base sm:text-lg text-white font-semibold rounded-md flex justify-center items-center gap-2 hover:bg-slate-900">
                        Login <FaSignInAlt />
                    </button>
                </div>
            </div>
        </section>
    )
}