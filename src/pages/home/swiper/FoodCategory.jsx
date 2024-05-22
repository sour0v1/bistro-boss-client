import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'
import image4 from '../../../assets/home/slide4.jpg'
import image5 from '../../../assets/home/slide5.jpg'
// import image5 from '../../../assets/menu/soup-bg.jpg'
import './FoodCategory.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../components/SectionTitle';

const FoodCategory = () => {
    return (
        <div className='my-16'>
            <div className='mb-9'>
                <SectionTitle subHeading={'From 10am to 10pm'} heading={'Order Online'}></SectionTitle>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image1} alt="" />
                    <h3 className='text-center uppercase -mt-16 pb-9 text-4xl text-white opacity-70'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" />
                    <h3 className='text-center uppercase -mt-16 pb-9 text-4xl text-white opacity-70'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt="" />
                    <h3 className='text-center uppercase -mt-16 pb-9 text-4xl text-white opacity-70'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt="" />
                    <h3 className='text-center uppercase -mt-16 pb-9 text-4xl text-white opacity-70'>Desert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image5} alt="" />
                    <h3 className='text-center uppercase -mt-16 pb-16 text-4xl text-white opacity-70'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image1} alt="" />
                    <h3 className='text-center uppercase -mt-16 pb-9 text-4xl text-white opacity-70'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" />
                    <h3 className='text-center uppercase -mt-16 pb-9 text-4xl text-white opacity-70'>Salad</h3>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default FoodCategory;