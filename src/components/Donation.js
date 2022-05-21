import React from 'react'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
            <section className='bg-gray-900 h-[100%] '>
                {/* container */}
                <div className='px-4 py-40 max-w-[1140px] m-auto'>
                    {/* header */}
                    <div className='flex flex-col'>
                        <div className='md:py-8 md:text-center' data-aos="fade-down">
                            <h1 className='text-center py-4 capitalize text-4xl sm:text-2xl md:text-4xl text-[#d49a35] font-sans font-semibold px-4'>
                                Coming Soon...
                            </h1>
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <button className='my-4 text-lg text-gray-300 border-2 px-4 rounded-full py-2 font-mono bg-[#0A686E] hover:scale-110 transition duration-200 sm:text-xl sm:px-20 md:text-xl md:px-18'>
                            <Link to='/'>
                                Back to Home
                            </Link>
                        </button>
                    </div>

                </div>

            </section>
        </>
    )
}

export default AboutUs