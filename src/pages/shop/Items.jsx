import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useCategory from '../../hooks/useCategory';
import MenuItem2 from '../shared/MenuItem2';

const Items = () => {
    const { category } = useParams();
    const items = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const categoryIndex = items.indexOf(category);
    console.log(categoryIndex)
    const [tabIndex, setTabIndex] = useState(categoryIndex);
    console.log(category);
    // load menu items data
    const saladItem = useCategory('salad');
    const pizzaItem = useCategory('pizza');
    const soupItem = useCategory('soup');
    const dessertItem = useCategory('dessert');
    const drinksItem = useCategory('drinks');
    // console.log(saladItem);

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab><Link to={'/shop/salad'}>Salad</Link></Tab>
                <Tab><Link to={'/shop/pizza'}>Pizza</Link></Tab>
                <Tab><Link to={'/shop/soups'}>Soups</Link></Tab>
                <Tab><Link to={'/shop/desserts'}>Dessert</Link></Tab>
                <Tab><Link to={'/shop/drinks'}>Drinks</Link></Tab>
            </TabList>
            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-6'>
                    {
                        saladItem.map(salad => <MenuItem2 item={salad} key={salad._id}></MenuItem2>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-6'>
                    {
                        pizzaItem.map(pizza => <MenuItem2 item={pizza} key={pizza._id}></MenuItem2>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-6'>
                    {
                        soupItem.map(soup => <MenuItem2 item={soup} key={soup._id}></MenuItem2>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-6'>
                    {
                        dessertItem.map(dessert => <MenuItem2 item={dessert} key={dessert._id}></MenuItem2>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-6'>
                    {
                        drinksItem.map(drink => <MenuItem2 item={drink} key={drink._id}></MenuItem2>)
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default Items;