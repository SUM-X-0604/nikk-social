import React from 'react'

const BlogCard = ({ image, title, description }) => {
    return (
        <div className='flex flex-col px-4 py-4'>
            <img src={image} alt="" data-aos="zoom-in-up" />
            <div className='flex flex-col items-center text-center'>
                <p className='text-2xl capitalize pt-4 hover:text-[#d49a35]'>{title}</p>
                <p className='py-4 px-6 '>{description}</p>
                <button className='text-md text-gray-300 border-2 rounded-full px-4 py-2 font-mono bg-[#d49a35] hover:scale-110 transition duration-200  sm:px-20 md:px-6'>Know More... </button>
            </div>
        </div>
    )
}

export default BlogCard