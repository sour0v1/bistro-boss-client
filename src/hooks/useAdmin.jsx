import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    console.log('dommmm',  user)
    const axiosSecure = useAxiosSecure();
    const {data : isAdmin, isPending : isAdminLoading} = useQuery({
        queryKey : [user?.email ,'isAdmin'],
        enabled : !loading,
        queryFn : async () =>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data)
            return res.data?.isAdmin;
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;