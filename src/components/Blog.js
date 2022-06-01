import React from 'react';
import image1 from '../assets/image-15.jpg'
import image2 from '../assets/image-5.jpg'
import image3 from '../assets/image-2.jpg'

const Blog = () => {
    return (
        <>

            <section className='py-20' id='blogs'>

                {/* container */}
                <div className='max-w-[1140px] m-auto'>

                    {/* header */}
                    <div>
                        <div className='py-8 flex flex-col items-center justify-center leading-10'>
                            <h1 className=' text-2xl text-[#da8a00] font-sans font-semibold capitalize'>our blogs</h1>
                            <p className='py-2 capitalize text-[40px] text-[#39311D]'>recent from blog</p>
                        </div>
                    </div>

                    {/* items */}
                    <div className='flex flex-col md:flex-row md:justify-evenly'>

                        {/* 1st item */}
                        <div className='flex flex-col  px-4'>
                            <img src={image1} alt="" data-aos="zoom-in-up" />
                            <div className='flex flex-col items-center text-center'>
                                <p className='text-2xl capitalize pt-4 hover:text-[#d49a35]'>give education to homeless children</p>
                                <p className='py-4 px-6 '>20 Million children in India do not go to school. Millions of children are still denied their right to education because of poverty. Donate for the education of poor children and support them with necessities like tuition fees, school supplies, footwear, transport, etc. Help them build a future that will make them escape poverty passed from generation to generation.</p>
                                <button className='text-md text-gray-300 border-2 rounded-full px-4 py-2 font-mono bg-[#d49a35] hover:scale-110 transition duration-200  sm:px-20 md:px-6'>Know More... </button>
                            </div>
                        </div>
                        {/* 1st item end */}

                        {/* 2nd item */}
                        <div className='flex flex-col  px-4 py-8 md:py-0'>
                            <img src={image2} alt="" data-aos="zoom-in-up" />
                            <div className='flex flex-col items-center text-center'>
                                <p className='text-2xl capitalize pt-4 hover:text-[#d49a35]'>give food to homeless children</p>
                                <p className='pt-12 pb-4 px-6 '>21% of India's children are severely underweight. Hungry children can not build the country's future. For India's poor children. Feed our children and their hopes by donating mid-day meals to our starving children in need to help them fight starvation and malnutrition, so they don't have to live and learn on a hungry stomach.</p>
                                <button className='text-md text-gray-300 border-2 rounded-full px-4 py-2 font-mono bg-[#d49a35] hover:scale-110 transition duration-200  sm:px-20 md:px-6'>Know More... </button>
                            </div>
                        </div>
                        {/* 2nd item end */}

                        <div className='flex flex-col px-4'>
                            <img src={image3} alt="" data-aos="zoom-in-up" />
                            <div className='flex flex-col items-center text-center'>
                                <p className='text-2xl capitalize pt-4 hover:text-[#d49a35]'>give hope to homeless people</p>
                                <p className='py-4 px-6 '>Those in extreme need are usually socially excluded and face a lack of basic necessitates for reasons like living in underserved areas or social stigma of being affected with an incurable illness. Donate to those in extreme need and help them with resources like food, medical care, livelihood resources, sanitation, education, etc. to enable them to lead a normal life.</p>
                                <button className='text-md text-gray-300 border-2 rounded-full px-4 py-2 font-mono bg-[#d49a35] hover:scale-110 transition duration-200  sm:px-20 md:px-6'>Know More... </button>
                            </div>
                        </div>
                        {/* 3rd item end */}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Blog