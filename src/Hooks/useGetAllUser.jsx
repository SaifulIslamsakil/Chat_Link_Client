"use client"
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const useGetAllUser = () => {
    const AxiosPublic = useAxiosPublic()
    const { data:AllUser=[], refetch } = useQuery({
        queryKey: ["All_user"],
        queryFn: async () => {
          const res = await AxiosPublic.get("/user")
          return res.data
        }
      })
      
    return {AllUser, refetch}
};

export default useGetAllUser;