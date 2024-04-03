"use client"
import Auth from "@/Firbase/Firbase.confiq";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useGetUser = () => {
    const [user, setUser]=useState([])
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(Auth, currenUser =>{
            setUser(currenUser)
        })
        return ()=>{
            return unSubcribe
        }
    },[]) 
    return user
};

export default useGetUser;