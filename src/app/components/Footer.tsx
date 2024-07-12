import { FaGithub, FaYoutube } from "react-icons/fa";
import {  FaSlack, FaXTwitter } from "react-icons/fa6";

export function Footer() {
    return (
        <div className="h-[40vh] grid grid-cols-6  gap-4 text-white">
            <div className="col-span-2 flex flex-col justify-between h-full" >
                <div className="flex gap-2">
                    <img src="./logo3.svg" /> <span className="text-neutral-500 font-semibold">10$LandingPage</span>
                </div>
                <div className="flex gap-5 mb-2 text-neutral-500">
                    <a href=""><FaXTwitter/></a>
                    <a href=""><FaGithub/></a>
                    <a href=""><FaSlack/></a>
                    <a href=""><FaYoutube/></a>
                </div>
            </div>
            <div className="col-span-1 flex flex-col gap-4 h-full ">
                <span className="font-semibold text-lg">Product</span>
                <div className="flex flex-col gap-3 text-neutral-500">
                    <a href="">Features</a>
                    <a href="">Integrations</a>
                    <a href="">Pricing</a>
                    <a href="">Changelog</a>
                    <a href="">Docs</a>
                    <a href="">Linear Method</a>
                    <a href="">Download</a>
                </div>
            </div >
            <div className="col-span-1 flex flex-col gap-4 h-full ">
                <span className="font-semibold text-lg">Company</span>
                <div className="flex flex-col gap-3 text-neutral-500">
                    <a href="">About us</a>
                    <a href="">Blog</a>
                    <a href="">Careers</a>
                    <a href="">Customers</a>
                    <a href="">Brand</a>
                </div>
            </div >
            <div className="col-span-1 flex flex-col gap-4 h-full ">
                <span className="font-semibold text-lg">Resources</span>
                <div className="flex flex-col gap-3 text-neutral-500">
                    <a href="">Startup Program</a>
                    <a href="">Community</a>
                    <a href="">Contact</a>
                    <a href="">DPA</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of service</a>
                    <a href="">Report a vulnerability</a>
                </div>
            </div >
            <div className="col-span-1 flex flex-col gap-4 h-full ">
                <span className="font-semibold text-lg">Developers</span>
                <div className="flex flex-col gap-3 text-neutral-500">
                    <a href="">API</a>
                    <a href="">Status</a>
                    <a href="">GitHub</a>
                    <a href="">README</a>
                </div>
            </div >

        </div>
    )
}