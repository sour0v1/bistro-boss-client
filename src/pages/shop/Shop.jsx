import React from 'react';
import MenuCover from '../../components/MenuCover';
import banner from '../../assets/shop/banner2.jpg'
import Items from './Items';
import { useParams } from 'react-router-dom';

const Shop = () => {
    const abc = useParams();
    console.log(abc)
    return (
        <>
        {/* banner section */}
            <section>
                <MenuCover heading={'OUR SHOP'} description={'Would you like to buy a coffe'} backgroundImage={banner}></MenuCover>
            </section>
        {/* items section */}
            <section className='my-16'>
                <Items></Items>
            </section>
        </>
    );
};

export default Shop;