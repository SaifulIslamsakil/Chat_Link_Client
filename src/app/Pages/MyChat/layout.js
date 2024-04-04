import Link from 'next/link';
import React from 'react';
import { BiMessageRoundedDots, BiMessageSquareDots } from 'react-icons/bi';
import { CgProfile } from "react-icons/cg";
import { MdOutlineGroup, MdPermContactCalendar } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { HiUserAdd } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";
import Image from 'next/image';
import Sidebar from '@/Components/Sidebar';

const layout = ({ children }) => {
    return (
        <div className=' flex h-screen'>
            <Sidebar></Sidebar>
            <div className='w-[60%]'>
                {children}
            </div>
        </div>
    );
};

export default layout;