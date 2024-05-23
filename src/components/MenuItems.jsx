import React from 'react';
import MenuItem from '../pages/shared/MenuItem';

const MenuItems = ({item}) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 lg:p-0'>
            {
                item.slice(0, 6).map(item => <MenuItem item={item} key={item._id}></MenuItem>)
            }
        </div>
    );
};

export default MenuItems;