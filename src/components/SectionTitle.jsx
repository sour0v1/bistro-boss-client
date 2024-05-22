import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <h4 className='text-[#D99904] font-medium pb-3 border-gray-300'>---{subHeading}---</h4>
            <h2 className='text-2xl font-medium py-2 px-16 border-y-2 border-gray-300'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;