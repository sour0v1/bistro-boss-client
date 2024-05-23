import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({name}) => {
    return (
        <button className='border-b-2 border-black opacity-90 font-medium hover:border-orange-500 pb-1 px-3 rounded-b'><Link>{name}</Link></button>
    );
};

export default Button;