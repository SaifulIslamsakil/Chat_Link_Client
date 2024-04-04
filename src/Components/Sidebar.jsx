"use client"

import useGetAllUser from "@/Hooks/useGetAllUser";
import Image from "next/image";
import Link from "next/link";
import { BiMessageRoundedDots, BiMessageSquareDots } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiUserAdd } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineGroup, MdPermContactCalendar } from "react-icons/md";

const Sidebar = () => {
    const {AllUser} = useGetAllUser()
    console.log(AllUser)
    return (
        <div className=' w-[40%] flex h-full border'>
        <div className=' border-r shadow-lg px-5 py-5 h-full flex  justify-center'>
            <div className=' space-y-10'>
                <div className="items-centers gap-1 hidden md:flex">
                    <span className=" text-3xl bg-blue-700 text-green-50 rounded-full p-2 flex items-center justify-center"><BiMessageRoundedDots /></span>
                </div>
                <div className=' text-center text-3xl space-y-8 text-blue-900'>
                    <div className="tooltip tooltip-right block" data-tip="Profile">
                        <p className='bg-green-50 p-3 rounded-lg'><Link href={""}><CgProfile /></Link></p>
                    </div>
                    <div className="tooltip tooltip-right block" data-tip="Chats">
                        <p className='bg-green-100 p-3 rounded-lg'><Link href={""}><BiMessageSquareDots /></Link></p>
                    </div>
                    <div className="tooltip tooltip-right block" data-tip="Group">
                        <p className='bg-green-100 p-3 rounded-lg'><Link href={""}><MdOutlineGroup /></Link></p>
                    </div>
                    <div className="tooltip tooltip-right block" data-tip="Contact">
                        <p className='bg-green-100 p-3 rounded-lg'><Link href={""}><MdPermContactCalendar /></Link></p>
                    </div>
                    <div className="tooltip tooltip-right block" data-tip="Setting">
                        <p className='bg-green-100 p-3 rounded-lg'><Link href={""}><IoMdSettings /></Link></p>
                    </div>
                </div>
            </div>
        </div>
        <div className=' bg-slate-50 px-5 py-5 w-full space-y-5'>
            <div className=' flex justify-between '>
                <h2 className=' text-2xl font-semibold'>Chats</h2>
                <p className=' text-3xl'><HiUserAdd /></p>
            </div>
            <div className=' w-full rounded-lg flex items-center justify-center bg-slate-200  px-3 gap-1 '>
                <p className=' text-3xl'><IoSearchSharp /></p>
                <input type='search' className=' w-full bg-slate-200 p-3 rounded-lg outline-none text-lg' placeholder='Serach Meggeges or User .....' />
            </div>
            <div>
                story
            </div>
            <div className=' space-y-3'>
                <h3 className='text-lg font-semibold'>Recent</h3>
                <div className=' space-y-5 overflow-y-scroll'>
                    <div className=' p-4 rounded-lg hover:bg-slate-200 bg-slate-100 duration-700 flex items-center justify-between border'>
                        <Image src={"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} width={50} height={50} alt='userImages' className=' rounded-full' />
                        <div>
                            <p className=' text-lg font-semibold'>Saiful islam</p>
                            <p>Saiful islam more no it</p>
                        </div>
                        <p>05 min</p>
                    </div>
                   
                </div>
            </div>
        </div>

    </div>
    );
};

export default Sidebar;