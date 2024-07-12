import { FaPlusCircle, FaShoppingBag, FaSignInAlt } from "react-icons/fa";

export function JoinSection() {
    return (
        <div className="h-[50vh] bg-black flex shrink justify-center items-center">
            <div
                style={{
                    backgroundImage: 'radial-gradient(circle,#262626, #0A0A0A)',
                }}
                className="py-8 px-6 flex justify-around border-[1px] border-dashed border-neutral-700 rounded-lg">
                <div className="w-1/2 flex flex-col">
                    <span className=" text-5xl font-bold text-white ">
                        Join now.
                    </span>
                    <span className=" text-5xl font-bold text-white">
                        Make your devs life easier.
                    </span>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-end gap-4">
                    <button className="bg-neutral-200 w-[15vh] h-10 text-lg text-black font-semibold rounded-lg flex justify-center items-center gap-2 hover:bg-neutral-100">
                        SignUp <FaPlusCircle />
                    </button>
                    <button className="bg-slate-800 w-[15vh] h-10 text-lg text-white font-semibold rounded-lg flex justify-center items-center gap-2 hover:bg-slate-900">
                        Login <FaSignInAlt />
                    </button>
                </div>
            </div>
        </div>
    )
}