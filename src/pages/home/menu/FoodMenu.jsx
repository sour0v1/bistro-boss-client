import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../shared/MenuItem';
import useMenu from '../../../hooks/useMenu';

const FoodMenu = () => {
    const menu = useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular');
    console.log(menu);
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
                    popularMenu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default FoodMenu;