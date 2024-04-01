import RegisterForm from "@/Components/RegisterForm";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
const Register = () => {
    return (
        <div className=" md:flex ">
            <div className=" bg-blue-600 md:w-[30%]  ">
                <Image width={200} height={200} src="https://i.ibb.co/rFDjRhj/top-ornamate-2.png" alt="" />
                <p className=" text-4xl font-bold text-white p-5">We are design changers do what matters.</p>
                <Image width={200} height={200} className=" w-72 mx-auto" src="https://i.ibb.co/tpBNLXY/man-image-1.png" alt="" />
            </div>
            <div className="md:w-[70%] bg-gradient-to-r from-blue-100  to-blue-50 p-10 ">
                <div className="space-y-10 lg:w-3/4 mx-auto">
                    <p className=" text-center font-bold text-3xl">Create your Chat Link Account</p>
                    <p className=" text-center">Already have an account? <Link href={"/"} className=" font-bold">Sign in</Link> </p>
                    <button className=" mx-auto p-3 rounded-lg border shadow-lg bg-white flex items-center gap-3 hover:shadow-sm"> <HiOutlineMail className=" text-2xl text-orange-500" /> Sign up with Google</button>
                    <div className="divider">OR</div>
                    <RegisterForm></RegisterForm>
                </div>
            </div>
        </div>
    );
};

export default Register;