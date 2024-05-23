import React from 'react';
import { Helmet } from 'react-helmet-async';
import banner from '../../assets/menu/banner3.jpg'
import SectionTitle from '../../components/SectionTitle';
import OfferedItems from './OfferedItems';
import DessertItems from '../home/menu/DessertItems';
import MenuCover from '../../components/MenuCover';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <MenuCover heading={'Our Menu'} description={'Would you like to try a dish?'} backgroundImage={banner}></MenuCover>
            {/* offered section */}
            <section className='my-12'>
                <OfferedItems></OfferedItems>
            </section>
            {/* dessert items section */}
            <section className='mb-16 mt-16'>
                <DessertItems></DessertItems>
            </section>
        </div>
    );
};

export default Menu;