import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

const Messges = () => {
    return (
        <div className=" space-y-5">
            <div className="  lg:flex justify-between items-center bg-black gap-10 p-10 space-y-5 ">
                <div className=" flex-1">
                    <Image width={200} height={100} className=" lg:w-3/4 mx-auto" src="https://i.ibb.co/4ZBMypV/316036583-870096634427722-4468595013887544943-n-1.png" alt="" />
                </div>
                <div className=" flex-1 text-blue-50 space-y-6 cursor-pointer">
                    <h3 className=" text-6xl font-bold">Speak <span className=" text-green-500">freely</span> </h3>
                    <p className=" lg:w-3/4  text-xl">With end-to-end encryption, your personal messages and calls are secured. Only you and the person youre talking to can read or listen to them, and nobody in between, not even MyChat.</p>
                    <button className=" flex items-center gap-3 border-b-2 border-green-500 pb-2 hover:text-green-500 ">Learn more <MdArrowForwardIos /> </button>
                </div>
            </div>
            <div className=" lg:flex justify-between items-center  gap-10 p-10 space-y-10 ">
                <div className=" flex-1 space-y-8 cursor-pointer lg:px-10">
                    <h3 className=" text-3xl lg:text-6xl font-semibold">Keep in touch with your groups</h3>
                    <p className=" lg:w-3/4  text-xl">Whether its planning an outing with friends or simply staying on top of your family chats, group conversations should feel effortless.</p>
                    <button className=" flex items-center gap-3 border-b-2 border-green-500 pb-2 hover:text-green-500 ">Learn more <MdArrowForwardIos /> </button>
                </div>

                <div className=" flex-1">
                    <Image width={200} height={100} className=" lg:w-3/4 mx-auto border" src="https://i.ibb.co/xjQzLCp/318759416-815630979518701-2490140615586319278-n.png" alt="" />
                </div>
            </div>
            <div className=" lg:flex justify-between items-center  gap-10 p-10 ">
                <div className=" flex-1 relative">
                    <Image width={200} height={100} className=" lg:w-2/3 mx-auto " src="https://i.ibb.co/BytLfbc/409964903-7655947307754468-3960711266215354357-n.png" alt="" />
                    <Image width={200} height={100} className=" md:w-2/3 mx-auto absolute top-48 left-0 md:left-24 md:top-40  lg:top-60 lg:left-28   " src="https://i.ibb.co/R68bcqz/311869879-1082331725759559-5382136804801289925-n-2.png" alt="" />
                </div>
                <div className=" flex-1 space-y-8 cursor-pointer ">
                    <h3 className=" text-4xl lg:text-6xl font-semibold">Say what <br /> you feel</h3>
                    <p className=" lg:w-3/4  text-xl">Express yourself without words. Use stickers and GIFs or share everyday moments on Status. Record a voice message for a quick hello or a longer story.</p>
                    <button className=" flex items-center gap-3 border-b-2 border-green-500 pb-2 hover:text-green-500 ">Learn more <MdArrowForwardIos /> </button>
                </div>
            </div>

            <div className=" lg:flex  justify-between items-center  gap-10 p-10 space-y-5 ">
                <div className=" flex-1 space-y-8 cursor-pointer lg:px-10 ">
                    <h3 className=" text-4xl lg:text-6xl font-semibold">Transform <br /> your busines </h3>
                    <p className=" lg:w-3/4  text-xl">MyChat Business helps you reach your customers globally to deliver compelling experiences at scale. Showcase your products and services, increase sales, and build relationships all with MyChat.</p>
                    <button className=" flex items-center gap-3 border-b-2 border-green-500 pb-2 hover:text-green-500 ">Learn more <MdArrowForwardIos /> </button>
                </div>
                <div className=" flex-1 relative">
                    <Image width={200} height={100} className=" w-2/3 mx-auto " src="https://i.ibb.co/7ptT9bN/329699257-2856843487782508-7800545505417662242-n.png" alt="" />

                </div>
            </div>
        </div>
    );
};

export default Messges;