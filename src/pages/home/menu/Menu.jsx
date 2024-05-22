import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../shared/MenuItem';

const Menu = () => {
    const [menu, setMenu] = useState([]);
    console.log(menu)

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const popularItems = data.filter((item) => item.category === 'popular');
                setMenu(popularItems);
            })
    }, [])
    return (
        <div className='mb-16'>
            <div className='mb-9'>
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'From Our Menu'}
                >
                </SectionTitle>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 lg:p-0'>
                {
                    menu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default Menu;