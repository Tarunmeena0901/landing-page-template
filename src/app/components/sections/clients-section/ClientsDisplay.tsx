import { ClientRevealEffect } from "../../ui/Effects/ClientRevealEffect";

export function ClientDisplay() {
    return (
        <div className="h-2/5 sm:h-3/4 w-full grid grid-cols-3 grid-rows-2 place-content-center text-lg sm:text-xl ">
                    <div className="grid place-content-center  ">
                        <ClientRevealEffect indexSkip={0} />
                    </div>
                    <div className="grid place-content-center  ">
                        <ClientRevealEffect indexSkip={3} />
                    </div>
                    <div className="grid place-content-center  ">
                        <ClientRevealEffect indexSkip={4} />
                    </div>
                    <div className="grid place-content-center  ">
                        <ClientRevealEffect indexSkip={1} />
                    </div>
                    <div className="grid place-content-center  ">
                        <ClientRevealEffect indexSkip={5} />
                    </div>
                    <div className="grid place-content-center  ">
                        <ClientRevealEffect indexSkip={2} />
                    </div>
                </div>
    )
}