import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import image from '../assets/image-5.jpg'
import image1 from '../assets/image-2.jpg'
import image2 from '../assets/image-7.jpg'
import image3 from '../assets/image-5.jpg'



const Carousel = () => {

    let settings1 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <>
            <div className='px-8'>
                <div className='flex flex-col justify-between text-center md:px-40 lg:px-44'>
                    <div className='flex flex-col'>
                        <Slider {...settings1}>
                            {/* first */}
                            <div className='flex flex-wrap px-4'>
                                <img src={image1} alt="" />
                                <div className=' bg-[#89926977] flex flex-col'>
                                    <p className='text-2xl capitalize pt-4'>give food to homeless children</p>
                                    <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui aliquam officiis, ab veniam sed? Labore excepturi repellat voluptatem vero!</p>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex flex-wrap px-4'>
                                <img src={image2} alt="" />
                                <div className=' bg-[#89926977] flex flex-col'>
                                    <p className='text-2xl capitalize pt-4'> education to homeless children</p>
                                    <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui aliquam officiis, ab veniam sed? Labore excepturi repellat voluptatem vero!</p>
                                </div>
                            </div>

                            {/* third */}
                            <div className='flex flex-wrap px-4'>
                                <img src={image3} alt="" />
                                <div className=' bg-[#89926977] flex flex-col'>
                                    <p className='text-2xl capitalize pt-4'>give smile to homeless children</p>
                                    <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui aliquam officiis, ab veniam sed? Labore excepturi repellat voluptatem vero!</p>
                                </div>
                            </div>

                            {/* first */}
                            <div className='flex flex-wrap px-4'>
                                <img src={image1} alt="" />
                                <div className=' bg-[#89926977] flex flex-col'>
                                    <p className='text-2xl capitalize pt-4'>give food to homeless children</p>
                                    <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui aliquam officiis, ab veniam sed? Labore excepturi repellat voluptatem vero!</p>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex flex-wrap px-4'>
                                <img src={image2} alt="" />
                                <div className=' bg-[#89926977] flex flex-col'>
                                    <p className='text-2xl capitalize pt-4'> education to homeless children</p>
                                    <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui aliquam officiis, ab veniam sed? Labore excepturi repellat voluptatem vero!</p>
                                </div>
                            </div>

                            {/* third */}
                            <div className='flex flex-wrap px-4'>
                                <img src={image3} alt="" />
                                <div className=' bg-[#89926977] flex flex-col'>
                                    <p className='text-2xl capitalize pt-4'>give smile to homeless children</p>
                                    <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui aliquam officiis, ab veniam sed? Labore excepturi repellat voluptatem vero!</p>
                                </div>
                            </div>

                        </Slider>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Carousel