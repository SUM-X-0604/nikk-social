import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            {/* Section */}
            <section id='header'>

                {/* image */}
                <div className='header-container'>

                    {/* text */}
                    <div className="absolute top-[38vh] text-center w-full lg:text-left lg:max-w-[60vw] lg:px-40 lg:top-[30vh]" >
                        <div className='flex flex-col gap-6'>
                            <h1 className='text-gray-300 font-semibold px-2 text-xl sm:text-2xl md:text-3xl lg:text-2xl' data-aos="fade-right" >Raising Hope</h1>
                            <p className='px-1 text-gray-300 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl' data-aos="fade-left">To the Homeless & Hopeless People</p>

                        </div>
                        {/* button */}
                        <div className='py-8'>
                            <Link to='/registration'>
                                <button className='text-lg text-gray-300 border-2 px-6 rounded-full py-2 font-mono bg-[#d49a35] hover:scale-110 transition duration-200 sm:text-xl sm:px-20 md:text-2xl lg:px-12 lg:text-xl' data-aos="zoom-in">Join Us </button>
                            </Link>
                        </div>
                    </div>

                </div>
                {/* image end */}

            </section >
            {/* section end */}
        </>
    )
}

export default Header;