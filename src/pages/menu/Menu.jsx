import React from 'react';
import { Helmet } from 'react-helmet-async';
import banner from '../../assets/menu/banner3.jpg'
import SectionTitle from '../../components/SectionTitle';
import OfferedItems from './OfferedItems';
import MenuCover from '../../components/MenuCover';
import FoodItems from '../../components/FoodItems';
// item background image
import desertBg from '../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import saladBg from '../../assets/menu/salad-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'

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
                <FoodItems foodItem={'dessert'} backgroundImage={desertBg} coverHeading={'DESERTS'} coverDescription={'Desert food you will love'}></FoodItems>
            </section>
            {/* Pizza items section */}
            <section className='mb-16 mt-16'>
                <FoodItems foodItem={'pizza'} backgroundImage={pizzaBg} coverHeading={'PIZZA'} coverDescription={'Pizza you will love'}></FoodItems>
            </section>
            {/* Pizza items section */}
            <section className='mb-16 mt-16'>
                <FoodItems foodItem={'salad'} backgroundImage={saladBg} coverHeading={'SALAD'} coverDescription={'Salad you will love'}></FoodItems>
            </section>
            {/* Pizza items section */}
            <section className='mb-16 mt-16'>
                <FoodItems foodItem={'soup'} backgroundImage={soupBg} coverHeading={'SOUP'} coverDescription={'Soup you will love'}></FoodItems>
            </section>
        </div>
    );
};

export default Menu;