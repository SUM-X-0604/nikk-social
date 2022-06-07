import React from 'react'
import { Link } from 'react-router-dom';
import barcode from '../assets/barcode.jpeg'

const AboutUs = () => {
    return (
        <>
            <section className='bg-gray-900 h-[100%] '>
                {/* container */}
                <div className='px-4 py-28 max-w-[1140px] m-auto'>
                    {/* header */}
                    <div className='flex flex-col'>
                        <div className='md:py-4 md:text-center' data-aos="fade-down">
                            <h1 className='text-center capitalize text-2xl sm:text-3xl md:text-4xl  text-[#d49a35] font-sans font-semibold px-4 '>
                                Donate for the betterment of this world
                            </h1>
                            <p className='text-center py-4 capitalize text-md sm:text-lg md:text-xl text-[#d49a35] font-sans px-4'>your small contribution can change the world of many</p>
                        </div>
                    </div>

                    <div className='w-[100%] flex items-center justify-center px-6 sm:p-10   md:p-16 lg:p-32 '>
                        <img src={barcode} alt="" className='sm:h-[400px] sm:w-[300px]  ' />
                    </div>
                </div>

            </section>
        </>
    )
}

export default AboutUs