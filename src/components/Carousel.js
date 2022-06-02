import React from 'react';
import Slider from "react-slick";

// import image from '../assets/image-5.jpg'
import image1 from '../assets/gallery/img-1.jpg'
import image2 from '../assets/gallery/img-2.jpg'
import image3 from '../assets/gallery/img-3.jpg'
import image4 from '../assets/gallery/img-4.png'

const Carousel = () => {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <>
            <section className='px-8 py-12'>
                <div className='flex flex-col flex-grow justify-between text-center md:px-40 lg:px-44'>
                    <div className='flex flex-col'
                    >
                        <Slider {...settings}>
                            {/* first */}
                            <div className='flex px-4 py-4 ' data-aos="flip-up">
                                <img src={image4} alt="" className='lg:p-16' />
                            </div>
                            {/* second */}
                            <div className='flex px-4' data-aos="flip-up">
                                <img src={image2} alt="" className='lg:p-16' />
                            </div>

                            {/* third */}
                            <div className='flex px-4' data-aos="flip-up">
                                <img src={image3} alt="" className='lg:p-16' />
                            </div>

                            {/* fourth */}
                            <div className='flex px-4' data-aos="flip-up">
                                <img src={image1} alt="" className='lg:p-16' />
                            </div>


                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Carousel