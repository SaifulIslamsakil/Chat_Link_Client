import LoginForm from '@/Components/LoginForm';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

const Login = () => {
    return (
        <div className=" md:flex ">
            <div className=" bg-blue-600 md:w-[30%]  ">
                <Image height={200} width={200} src="https://i.ibb.co/rFDjRhj/top-ornamate-2.png" alt="" />
                <p className=" text-4xl font-bold text-white p-5">We are design changers do what matters.</p>
                <Image height={200} width={200} className=" w-72 mx-auto" src="https://i.ibb.co/Q9xVbXs/door-1.png" alt="" />
            </div>
            <div className="   md:w-[70%] bg-gradient-to-r from-blue-100  to-green-50 p-10 ">
                <div className="space-y-10 lg:w-3/4 mx-auto">
                    <p className=" text-center font-bold text-3xl">Sign in to Chat Link platform </p>
                    <p className=" text-center">Don’t have an account yet? Sign up here <Link href={"/Pages/Register"} className=" font-bold">Sign up here </Link> </p>
                    <button className=" mx-auto p-3 rounded-lg border shadow-lg bg-white flex items-center gap-3 hover:shadow-sm"> <HiOutlineMail className=" text-2xl text-orange-500" /> Sign up with Google</button>
                    <div className="divider">OR</div>

                    <LoginForm></LoginForm>
                </div>
            </div>
        </div>
    );
};

export default Login;