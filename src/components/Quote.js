import React from 'react'
import { Link } from 'react-router-dom'

const Quote = () => {
    return (

        <>
            <section>

                <div className='quotes-container'>

                    <div className='w-[100%] h-[100%] absolute opacity-80 bg-[#000000b0] z-[-1]' >
                        <div className='flex flex-col text-center px-4 pt-32 sm:pt-60 ' data-aos="fade-up">
                            {/* header */}
                            <div className='w-[100%]'>
                                <span className='text-gray-100 text-lg md:text-xl'>Nikk Social Welfare Foundation </span>
                                <h1 className='text-[40px] text-white py-2 leading-normal capitalize md:text-[44px]'>the small act if kindness is worth more than the grandest intention</h1>
                            </div>

                            {/* buttons */}
                            <div className='flex flex-col items-center justify-center py-8' data-aos="zoom-in">
                                <Link to='/donation'>
                                    <button className='text-lg text-gray-300 border-2 px-6 rounded-full py-2 font-mono bg-[#d49a35] hover:scale-110 transition duration-200 sm:text-xl sm:px-20 md:text-2xl md:px-28 -z-0'>Donate Us </button>
                                </Link>
                                <Link to='/registration'>
                                    <button className='cursor-pointer my-4 text-lg text-gray-300 border-2 px-4 rounded-full py-2 font-mono bg-[#0A686E]
                                hover:scale-110 transition duration-200 sm:text-xl sm:px-20 md:text-2xl md:px-28'>
                                        Become A Volunteer
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Quote