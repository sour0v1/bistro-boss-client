import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

const ManageItems = () => {
    const axiosSecure = useAxiosSecure();
    const { data: items, refetch, isPending } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-menu')
            return res.data;
        }
    })
    // console.log(items)
    if (isPending) {
        return <p>loading...</p>
    }
    // update items
    const updateItem = id => {
        console.log('update', id)
        // const {data, refetch} = useQuery({
        //     queryKey : ['delete'],
        //     queryFn : async () => {
        //         const res = await axiosSecure.delete(`/delete/item/${id}`)
        //         return res.data;
        //     }
        // })
        // console.log(data)


    }
    // delete item
    const handleDelete = async (id) => {
        console.log('deleted', id);
        const res = await axiosSecure.delete(`/delete/item/${id}`)
        console.log(res.data);
    }
    return (
        <div className='max-w-5xl mx-auto'>
            <h1>items : {items.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, idx) =>
                                // {console.log(item)}
                                <tr key={item._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}$</td>
                                    <td><button onClick={() => updateItem(item._id)}><FaRegEdit></FaRegEdit></button></td>
                                    <td><button onClick={() => handleDelete(item?._id)}><RiDeleteBin6Line /></button></td>

                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;