import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

const Feature = () => {
    return (
        <div className=" space-y-20 p-5">
            <div className=" space-y-20 ">
                <Image src="https://i.ibb.co/k5wpkbj/315632381-5616928641708856-9210500231334849736-n.png" alt="" width={1100} height={300} className=" mx-auto" />
                <h3 className=" text-2xl lg:text-5xl font-semibold text-center  lg:w-3/4 mx-auto cursor-pointer">With private messaging and calling, you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.</h3>
                <Image src="https://i.ibb.co/cFXskH4/315574582-669241857978207-6336028129238262344-n.png" alt="" width={1100} height={300} className=" mx-auto" />
            </div>
            <div className=" lg:flex justify-between items-center space-y-4">
                <div className=" space-y-8 flex-1 md:px-10 cursor-pointer">
                    <h2 className=" text-4xl lg:text-6xl md:font-semibold md:w-3/4 ">Never miss a moment with voice and video calls</h2>
                    <p className=" text-xl">From a group call to classmates to a quick call with mom, feel like you’re in the same room with voice and video calls.</p>
                    <button className=" flex items-center gap-3 border-b-2 border-blue-800 pb-2 hover:text-blue-800 ">Learn more <MdArrowForwardIos /> </button>
                </div>
                <div className=" flex-1">
                    <Image className=" mx-auto" src="https://i.ibb.co/sFwDWML/316211879-640016534274402-8272733547019635528-n.png" alt="" width={400} height={300} />
                </div>
            </div>
        </div>
    );
};

export default Feature;