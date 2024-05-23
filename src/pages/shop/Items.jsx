import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Items = () => {
    const { category } = useParams();
    const items = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const categoryIndex = items.indexOf(category);
    console.log(categoryIndex)
    const [tabIndex, setTabIndex] = useState(categoryIndex);
    console.log(category);

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                <Tab>Soups</Tab>
                <Tab>Deserts</Tab>
                <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>Salad</TabPanel>
            <TabPanel>Pizza</TabPanel>
            <TabPanel>Soups</TabPanel>
            <TabPanel>Deserts</TabPanel>
            <TabPanel>Drinks</TabPanel>
        </Tabs>
    );
};

export default Items;