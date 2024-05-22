
import Banner from './Banner';
import Featured from './Featured';
import Testimonial from './Testimonial';
import Menu from './menu/Menu';
import FoodCategory from './swiper/FoodCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <Menu></Menu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;