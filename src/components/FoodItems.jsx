import React from 'react';
import { Link } from 'react-router-dom';
import MenuCover from './MenuCover';
import useMenu from '../hooks/useMenu';
import MenuItems from './MenuItems';
import Button from './Button';

const FoodItems = ({ foodItem, backgroundImage, coverHeading, coverDescription }) => {
    const menu = useMenu();
    const categoryItems = menu.filter(item => item.category === foodItem)
    return (
        <div>
            <div>
                <MenuCover heading={coverHeading} description={coverDescription} backgroundImage={backgroundImage}></MenuCover>
            </div>
            <div className='my-9'>
                <MenuItems item={categoryItems}></MenuItems>
            </div>
            <div className='w-full text-center'>
                <Link to={`/shop/${foodItem}`}>
                    <Button name={'ORDER YOUR FAVORITE FOOD'} />
                </Link>
            </div>
        </div>
    );
};

export default FoodItems;