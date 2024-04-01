"use client"
import { useForm } from "react-hook-form";
const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const handelFormSubmited = (data) => {
        console.log(data)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(handelFormSubmited)}>
                <div className=" grid md:grid-cols-2 gap-5">

                    <div className=" col-span-2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Your email</span>
                            </div>
                            <input {...register("email", { required: true })} type="email" placeholder=" Enter Your email" className="input input-bordered w-full " />

                        </label>
                    </div>
                    <div className=" col-span-2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="Password">Password</span>
                            </div>
                            <input {...register("password", { required: true, maxLength: 20, minLength: 8, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} type="Password" placeholder=" Enter Password" className="input input-bordered w-full " />
                            {errors.password?.type === "required" && <span className=" text-red-500">password is required</span>}
                            {errors.password?.type === "minLength" && <span className=" text-red-500">your Password must be 6 chareter</span>}
                            {errors.password?.type === "pattern" && <span className=" text-red-500">your Password must be an number an uppercase an lowercase an spcial careater</span>}
                        </label>
                    </div>
                </div>
                <div>
                    <div className=" flex justify-center mt-6">
                        <button className="btn  bg-blue-600 text-white hover:bg-blue-800 ">Sign In  </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;