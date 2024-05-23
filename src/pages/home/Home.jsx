
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Featured from './Featured';
import Testimonial from './Testimonial';
import FoodCategory from './swiper/FoodCategory';
import FoodMenu from './menu/FoodMenu';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <FoodMenu></FoodMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;