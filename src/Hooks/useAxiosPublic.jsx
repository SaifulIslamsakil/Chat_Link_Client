"use client"

import axios from "axios";

const data = axios.create({
    baseURL:"http://localhost:5000"
})
const useAxiosPublic = () => {
    return data
};

export default useAxiosPublic;