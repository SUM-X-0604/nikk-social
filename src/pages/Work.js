import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/work-1.jpg'
import image2 from '../assets/work-2.jpg'

const Work = () => {
    return (
        <>
            <section className='bg-gray-900 h-[100%] '>
                {/* container */}
                <div className='px-4 py-28 max-w-[1140px] m-auto'>
                    {/* header */}
                    <div className='flex flex-col'>
                        {/* first paragraph */}

                        {/* heading */}
                        <div className='md:py-8 md:text-center'>
                            <h1 className='text-center py-4 capitalize text-2xl sm:text-3xl md:text-4xl text-[#d49a35] font-sans font-bold px-4'>
                                OUR WORK
                            </h1>
                        </div>

                        {/* image 1*/}
                        <div className='px-4 py-4'>
                            <img src={image2} alt="" className='sm:px-16 md:px-32 lg:px-40' />
                        </div>

                        {/* topic */}
                        <div className='pb-4 md:py-8 md:text-center'>
                            <h1 className='text-center pt-4 capitalize text-lg sm:text-xl md:text-2xl text-[#d49a35] font-sans font-semibold px-4'>
                                Being handicapped is not a sin
                            </h1>
                        </div>


                        {/* text */}
                        <div className='text-[#aba8a8] px-4 leading-normal text-[18px] md:text-[22px] capitalize font-sans'>
                            <p>Being handicapped is not a sin, but society looks at people with disabilities from a different perspective. Today there are many handicapped children in our society who cannot speak, cannot walk, are not mentally well, our organization <span className='text-white'>Nikk Social Welfare Foundation</span> believes that they too have the right to move forward. Since a month, our organization <span className='text-white'>Nikk Social Welfare Foundation</span> is working for the elementary education of 9 disabled children in small scale in two villages in Raigarh district of Chhattisgarh along with their mental education. Through the survey of our organization, till now there are about 53 differently abled children in block Sarangarh whose school education has been stopped by their parents due to financial constraints. </p>
                        </div>
                        {/* first paragraph end */}


                        {/* image 2*/}
                        <div className='px-4 py-4 flex flex-col items-center justify-center '>
                            <img src={image1} alt="" className='sm:px-16 md:px-32 lg:px-40' />
                            <p className='p-4 text-md md:text-xl capitalize text-[#d49a35]'>pic:- Our program manager Mr. Umashankar Sahu guiding students</p>
                        </div>

                        {/* text */}
                        <div className='text-[#aba8a8] px-4 leading-normal text-[18px] md:text-[22px] capitalize font-sans'>
                            <p>Our goal is to provide free education to all these differently-abled children through our organization. Right now where we are providing elementary education to 9 children, it has been rented which is quite small, in which only 12 to 15 children can sit now. We want that the survey which has been done by our organization and the children have been received, we should also provide school education and mental education to them.</p>
                        </div>
                        {/* second paragraph end */}
                    </div>

                    <div className='flex justify-center items-center pt-10'>
                        <button className='my-4 text-lg text-gray-300 border-2 px-4 rounded-full py-2 font-mono bg-[#0A686E] hover:scale-110 transition duration-200 sm:text-xl sm:px-20 md:text-xl md:px-18 '>
                            <Link to='/' >
                                Back to Home
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Work
