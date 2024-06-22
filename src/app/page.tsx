import { NavBar } from "./components/navBar"

export default function Home() {
  return (
    <div className="bg-black min-w-screen min-h-screen">
      <NavBar/>
    <div className=" my-auto grid grid-cols-1 place-content-center text-white">
      <div className=" mt-[5vh] py-[10vh] col-span-1 grid xs:grid-cols-1 grid-cols-2 gap-4 items-center h-[100vh]">
        <div className="flex flex-col items-center h-full">
          <div className="text-5xl font-semibold">
            Heading
          </div>
          <div>
            sub heading
          </div>
        </div>
        <div className="flex justify-center items-center">
          image placeholder
        </div>
      </div>
    </div>
    </div>
  );
}
