import { BiMessageRoundedDots } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";
const Navbar = () => {
    const manu = <>
        <li>Features</li>
        <li>Privacy</li>
        <li>Help Center</li>
        <li>Blog</li>
        <li>For Business</li>
        <li>MyChat Web</li>
        <li>Register</li>
    </>
    return (
        <div className="navbar bg-blue-900 bg-opacity-90 text-blue-50 p-5 fixed max-w-7xl z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-5 space-y-4 shadow bg-base-100 rounded-box w-52 cursor-pointer">
                        {manu}
                    </ul>
                </div>
                <div className=" flex items-centers gap-1">
                    <span className=" text-5xl"><BiMessageRoundedDots /></span>
                    <p className=" text-3xl font-semibold cursor-pointer">Chat Link</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 text-lg cursor-pointer">
                    {manu}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <button className=" py-3 px-6 bg-blue-50 text-black border-0 rounded-full  items-center gap-2 hidden md:flex hover:bg-blue-100 ">Download <span className=" text-2xl"><MdOutlineFileDownload /></span> </button>
            </div> */}
        </div>
    );
};

export default Navbar;