import Link from "next/link";
import { BiMessageRoundedDots } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";
const Navbar = () => {
    const manu = <>
        <li><Link href={"/Pages/Register"} className=" hover:bg-green-500">Features</Link></li>
        <li><Link href={"/Pages/Register"} className=" hover:bg-white hover:text-black">Privacy</Link></li>
        <li><Link href={"/Pages/Register"} className=" hover:bg-blue-400">Help Center</Link></li>
        <li><Link href={"/Pages/Register"}>Blog</Link></li>
        <li><Link href={"/Pages/Register"}>For Business</Link></li>
        <li><Link href={"/Pages/Register"}>Register</Link></li>
    </>
    return (
        <div className="navbar bg-blue-900 bg-opacity-90 text-blue-50 p-5 fixed max-w-7xl z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-5 space-y-4 shadow bg-base-100 rounded-box w-52 cursor-pointer">
                        {manu}
                    </ul>
                </div>
                <div className="items-centers gap-1 hidden md:flex">
                    <span className=" text-5xl"><BiMessageRoundedDots /></span>
                    <p className=" text-3xl font-semibold cursor-pointer">Chat Link</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 text-lg cursor-pointer">
                    {manu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;