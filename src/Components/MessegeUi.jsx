"use client"
import Image from 'next/image';
import { FaVideo, FaPhoneAlt, FaSearch, FaPlay } from "react-icons/fa";
import { BsThreeDotsVertical, BsEmojiSmile } from "react-icons/bs";
import { IoLinkSharp } from "react-icons/io5";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { useRef } from 'react';
const MessegeUi = () => {
    const sendMessege = useRef(null)

    const handelSendMeggeges = ()=>{
        const message= sendMessege.current.value;
        alert(message)
    }
    return (
        <div className=' h-screen'>
            <div className=' border-b shadow-lg p-5  flex items-center justify-between'>
                <div className='flex gap-5 items-center'>
                    <Image src={"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} width={40} height={40} alt='userImage' className=' rounded-full' />
                    <h3 className=' text-xl font-semibold'>Saiful Islam</h3>
                </div>
                <div className=' flex gap-5 items-center text-xl'>
                    <p className='hover:bg-green-50 p-2 rounded-lg'><FaSearch /></p>
                    <p className='hover:bg-green-50 p-2 rounded-lg'><FaPhoneAlt /></p>
                    <p className='hover:bg-green-50 p-2 rounded-lg'><FaVideo /></p>
                    <p className='hover:bg-green-50 p-2 rounded-lg'><BsThreeDotsVertical /></p>
                </div>
            </div>
            <div className=' h-3/4 flex justify-between p-5'>
                <div className=' mt-10'>
                    <p className='  rounded-t-full rounded-r-full p-2 bg-blue-500 text-white text-lg'>ssssssssssss</p>
                </div>
                <div>
                    <p className='  rounded-t-full rounded-l-full p-2 bg-green-500 text-white text-lg'>ddddddddddd</p>
                </div>
            </div>
            <div className=' border-t shadow-lg p-5 w-full flex items-center justify-between gap-2 '>
                <p className=' text-xl bg-green-50 p-3 rounded-lg'><FaPlay /></p>
                <p className=' text-xl hover:bg-green-50 p-2 rounded-lg'><IoLinkSharp /></p>
                <p className=' text-xl hover:bg-green-50 p-2 rounded-lg'><MdOutlineSettingsVoice /></p>
                <p className=' text-xl hover:bg-green-50 p-2 rounded-lg'><BsEmojiSmile /></p>
                <input type='text' placeholder='Type messege' ref={sendMessege} name='messege' className='p-2 text-xl w-3/4 bg-slate-200 outline-none rounded-lg' />
                <p onClick={handelSendMeggeges} className=' text-xl bg-green-50 p-3 rounded-lg'><BsFillSendFill /></p>

            </div>
        </div>
    );
};

export default MessegeUi;