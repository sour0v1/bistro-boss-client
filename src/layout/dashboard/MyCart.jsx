import React from 'react';
import './MyCart.css'
import useCart from '../../hooks/useCart';
import CartCard from './CartCard';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, ,isPending] = useCart();
    const totalPrice = cart?.reduce((acc, item) => {
        return acc + item.price;
    }, 0)
    console.log(totalPrice)
    console.log(isPending)
    if(isPending){
        <p>loading...</p>
    }
    return (
        <div className='w-3/4 mx-auto my-9'>
            <div className='text-2xl font-bold flex justify-between items-center'>
                <h1>Total Order : {cart?.length}</h1>
                <h1>Total Price : ${totalPrice}</h1>
                {
                    cart.length ? <Link to={'/dashboard/payment'}><button className='btn'>Pay</button></Link>:
                    <button disabled className='btn'>Pay</button>
                }
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
                            cart.map((item, index) => <CartCard item = {item} index = {index} key={item._id}></CartCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;