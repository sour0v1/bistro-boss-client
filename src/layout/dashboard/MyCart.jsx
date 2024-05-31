import React from 'react';
import './MyCart.css'
import useCart from '../../hooks/useCart';
import CartCard from './CartCard';

const MyCart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((acc, item) => {
        return acc + item.price;
    }, 0)
    return (
        <div className='w-3/4 mx-auto my-9'>
            <div className='text-2xl font-bold flex justify-between items-center'>
                <h1>Total Order : {cart.length}</h1>
                <h1>Total Price : ${totalPrice}</h1>
                <h1><button className='btn'>Pay</button></h1>
            </div>
            {/*  */}
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
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <CartCard item = {item} index = {index} key={item._d}></CartCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;