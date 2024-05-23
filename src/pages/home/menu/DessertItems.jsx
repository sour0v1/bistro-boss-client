import React from 'react';
import dessert from '../../../assets/menu/dessert-bg.jpeg'
import MenuCover from '../../../components/MenuCover';
import useMenu from '../../../hooks/useMenu';
import MenuItems from '../../../components/MenuItems';
import Button from '../../../components/Button';

const DessertItems = () => {
    const menu = useMenu();
    const dessertItems = menu.filter(item => item.category === 'dessert')
    return (
        <div>
            <div>
                <MenuCover heading={'DESERTS'} description={'dsdjfsslfsj sfsfsflks'} backgroundImage={dessert}></MenuCover>
            </div>
            <div className='my-9'>
                <MenuItems item={dessertItems}></MenuItems>
            </div>
            <div className='w-full text-center'>
                <Button name={'ORDER YOUR FAVORITE FOOD'}></Button>
            </div>
        </div>
    );
};

export default DessertItems;