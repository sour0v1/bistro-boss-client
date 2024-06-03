import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             setMenu(data);
    //         })
    // }, [])
    // return menu;
    const {data : menu = [], isPending, refetch} = useQuery({
        queryKey : ['menu'],
        queryFn : async () =>{
            const res = await axiosPublic('/menu');
            return res.data;
        }
    })
    return [menu, isPending, refetch]
};

export default useMenu;