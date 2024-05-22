import React from 'react';
import img from '../../assets/home/featured.jpg'
import SectionTitle from '../../components/SectionTitle';
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <div className="bg-cover bg-center lg:h-[500px] my-16 bg-fixed"
            style={{ backgroundImage: `url(${img})` }}>
            <div className='w-full lg:h-full bg-black bg-opacity-70 flex flex-col justify-center items-center py-6 lg:p-0'>
                <div className='text-white'>
                    <SectionTitle
                        subHeading={'Check it out'}
                        heading={'From our menu'}
                    ></SectionTitle>
                </div>
                <div className='w-2/3 mt-6 flex flex-col lg:flex-row justify-center items-center gap-9'>
                    <img className='lg:w-1/2 ' src={img} alt="" />
                    <div className='space-y-3 lg:w-1/2 text-white opacity-90'>
                        <h2>May 21,2024</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci iure ab, facilis nam corrupti doloremque sequi, optio consectetur saepe excepturi est voluptatem. Voluptatum deleniti perferendis autem soluta? Maxime, ducimus?</p>
                        <button className='border-b-2 border-white hover:border-orange-500 pb-1 px-3 rounded-b'><Link>Read More</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;