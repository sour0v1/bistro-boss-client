import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })
    }, [])
    return (
        <div className='mb-16'>
            <div className='mb-6'>
                <SectionTitle
                    subHeading={'What our client says'}
                    heading={'TESTIMONIALS'}
                ></SectionTitle>
            </div>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {/* <SwiperSlide>Slide 1</SwiperSlide> */}
                    <div>
                        {
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <div className='flex flex-col justify-center items-center space-y-3'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <p className='px-32'>{review.details}</p>
                                    <h2 className='text-xl font-medium'>{review.name}</h2>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;