import React from 'react';

const CartCard = ({item, index}) => {
    const {itemName, itemImage, price} = item;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={itemImage} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
               {itemName}
            </td>
            <td>{price}$</td>
            <th>
                <button className="btn btn-ghost btn-xs">action</button>
            </th>
        </tr>
    );
};

export default CartCard;