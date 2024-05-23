import React from 'react';

const Cover = ({backgroundImage, heading, description}) => {
    return (
        <div className='bg-center bg-cover h-[300px] lg:h-[500px] flex justify-center items-center' style={{
            backgroundImage : `url(${backgroundImage})`
        }}>
            <div className='w-2/3 h-1/2 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4'>
                <h1 className='text-4xl font-semibold text-white opacity-90'>{heading}</h1>
                <p className='font-medium text-white opacity-90'>{description}</p>
            </div>
        </div>
    );
};

export default Cover;