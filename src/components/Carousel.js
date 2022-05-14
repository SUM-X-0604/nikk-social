import React from 'react';
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
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <>
            <section className='px-8 py-12'>
                <div className='flex flex-col justify-between text-center md:px-40 lg:px-44'>
                    <div className='flex flex-col'
                    >
                        <Slider {...settings1}>
                            {/* first */}
                            <div className='flex flex-wrap px-4 py-4' data-aos="flip-up">
                                <img src={image1} alt="" />
                                <div className='bg-[#89926977] flex flex-col'>
                                    <p className='text-2xl capitalize pt-4 md:py-4 md:text-4xl'>give food to homeless children</p>
                                    <p className='p-8 md
                                    text-md'> reprehenderit inventore laboriosam? Quam quos qui expedita? Provident non laudantium, repellat illo corrupti saepe cumque nesciunt pariatur itaque facere. Debitis aperiam minima ad pariatur veritatis doloribus ex, adipisci iusto voluptas est, ullam rerum cumque porro molestias dolorum ipsum vero. Cumque, aspernatur! lorem200</p>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex flex-wrap px-4' data-aos="flip-up">
                                <img src={image2} alt="" />
                                <div className=' bg-[#89926977] flex flex-col'>
                                    <p className='text-2xl capitalize pt-4 md:py-4 md:text-4xl'> education to homeless children</p>
                                    <p className='p-8 md
                                    text-md'> reprehenderit inventore laboriosam? Quam quos qui expedita? Provident non laudantium, repellat illo corrupti saepe cumque nesciunt pariatur itaque facere. Debitis aperiam minima ad pariatur veritatis doloribus ex, adipisci iusto voluptas est, ullam rerum cumque porro molestias dolorum ipsum vero. Cumque, aspernatur!</p>
                                </div>
                            </div>

                            {/* third */}
                            <div className='flex flex-wrap px-4' data-aos="flip-up">
                                <img src={image3} alt="" />
                                <div className=' bg-[#89926977] flex flex-col'>
                                    <p className='text-2xl capitalize pt-4 md:py-4 md:text-4xl'>give smile to homeless children</p>
                                    <p className='p-8 md
                                    text-md'> reprehenderit inventore laboriosam? Quam quos qui expedita? Provident non laudantium, repellat illo corrupti saepe cumque nesciunt pariatur itaque facere. Debitis aperiam minima ad pariatur veritatis doloribus ex, adipisci iusto voluptas est, ullam rerum cumque porro molestias dolorum ipsum vero. Cumque, aspernatur!</p>
                                </div>
                            </div>

                            {/* first */}
                            <div className='flex flex-wrap px-4' data-aos="flip-up">
                                <img src={image1} alt="" />
                                <div className=' bg-[#89926977] flex flex-col'>
                                    <p className='text-2xl capitalize pt-4 md:py-4 md:text-4xl'>give food to homeless children</p>
                                    <p className='p-8 md
                                    text-md'> reprehenderit inventore laboriosam? Quam quos qui expedita? Provident non laudantium, repellat illo corrupti saepe cumque nesciunt pariatur itaque facere. Debitis aperiam minima ad pariatur veritatis doloribus ex, adipisci iusto voluptas est, ullam rerum cumque porro molestias dolorum ipsum vero. Cumque, aspernatur!</p>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex flex-wrap px-4' data-aos="flip-up">
                                <img src={image2} alt="" />
                                <div className=' bg-[#89926977] flex flex-col'>
                                    <p className='text-2xl capitalize pt-4 md:py-4 md:text-4xl'> education to homeless children</p>
                                    <p className='p-8 md
                                    text-md'> reprehenderit inventore laboriosam? Quam quos qui expedita? Provident non laudantium, repellat illo corrupti saepe cumque nesciunt pariatur itaque facere. Debitis aperiam minima ad pariatur veritatis doloribus ex, adipisci iusto voluptas est, ullam rerum cumque porro molestias dolorum ipsum vero. Cumque, aspernatur!</p>
                                </div>
                            </div>

                            {/* third */}
                            <div className='flex flex-wrap px-4' data-aos="flip-up">
                                <img src={image3} alt="" />
                                <div className=' bg-[#89926977] flex flex-col'>
                                    <p className='text-2xl capitalize pt-4 md:py-4 md:text-4xl'>give smile to homeless children</p>
                                    <p className='p-8 md
                                    text-md'> reprehenderit inventore laboriosam? Quam quos qui expedita? Provident non laudantium, repellat illo corrupti saepe cumque nesciunt pariatur itaque facere. Debitis aperiam minima ad pariatur veritatis doloribus ex, adipisci iusto voluptas est, ullam rerum cumque porro molestias dolorum ipsum vero. Cumque, aspernatur!</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Carousel