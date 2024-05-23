import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../components/Cover';
import banner from '../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover heading={'Our Menu'} description={'Would you like to try a dish?'} backgroundImage={banner}></Cover>
        </div>
    );
};

export default Menu;