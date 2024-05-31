import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrash, FaUsers } from 'react-icons/fa';

const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            console.log(res.data)
            return res.data;
        }
    })
    // handle delete
    const handleDeleteUser = id =>{
        axiosSecure.delete(`/users/${id}`)
            .then(res =>{
                console.log(res.data);
                refetch();
            })
            .catch(error =>{
                console.log(error);
            })
    }
    return (
        <div className='mx-16'>
            <div>
                <h2 className='text-2xl'>All User : {users.length}</h2>
            </div>

            {/* user info table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='text-xl'>
                                        <FaUsers></FaUsers>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user._id)} className='text-xl'>
                                        <FaTrash></FaTrash>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {/* row 1 */}

            </div>
        </div>
    );
};

export default AllUser;