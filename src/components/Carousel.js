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
                                    text-md'> 21% of India's children are severely underweight. Hungry children can not build the country's future. For India's poor children, the mid-day meal at school is their only proper meal in a day. Feed our children and their hopes by donating mid-day meals to our starving children in need to help them fight starvation and malnutrition, so they don’t have to live and learn on a hungry stomach.</p>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex flex-wrap px-4' data-aos="flip-up">
                                <img src={image2} alt="" />
                                <div className=' bg-[#89926977] flex flex-col'>
                                    <p className='text-2xl capitalize pt-4 md:py-4 md:text-4xl'> education to homeless children</p>
                                    <p className='p-8 md
                                    text-md'>20 Million children in India do not go to school. Millions of children are still denied their right to education because of poverty. Donate for the education of poor children and support them with necessities like tuition fees, school supplies, footwear, transport, etc. Help them build a future that will make them escape poverty passed from generation to generation.</p>
                                </div>
                            </div>

                            {/* third */}
                            <div className='flex flex-wrap px-4' data-aos="flip-up">
                                <img src={image3} alt="" />
                                <div className=' bg-[#89926977] flex flex-col'>
                                    <p className='text-2xl capitalize pt-4 md:py-4 md:text-4xl'>give smile to homeless children</p>
                                    <p className='p-8 md
                                    text-md'> Donate to underfunded programs that are doing great work to provide the poor with necessities like food, shelter, education, senior care, and healthcare. These nonprofits are struggling to continue to help people as they are not receiving the necessary support. Help them with their efforts with your donations.</p>
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