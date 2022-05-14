import React from 'react';
import donation from '../assets/png/donation-1.png';
import community from '../assets/png/community-1.png'
import volunteer from '../assets/png/volunteer-1.png'
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <>
            <section className='bg-gray-900 h-[100%] ' id='about'>

                {/* container */}
                <div className='py-8 md:py-12 max-w-[1140px] m-auto'>
                    {/* header */}
                    <div className='flex flex-col'>
                        {/* headings */}
                        <div className='md:py-8 md:text-center'>
                            <h1 className='py-2 capitalize text-sm md:text-xl text-[#d49a35] font-sans font-semibold px-4'>
                                welcome to nikk social walfare foudation
                            </h1>

                            <p className='text-[#b0aa9c] px-4 text-2xl md:text-4xl md:leading-normal'>
                                We Help Thousands of Children to Get Their Education
                            </p>
                        </div>
                        {/* text */}
                        <div className='text-[#aba8a8] px-4 py-4 leading-normal text-[16px] md:text-[18px]'>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <br />
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>
                    </div>
                </div>

                {/* works */}
                <div className='flex gap-6 justify-center items-center flex-wrap md:justify-evenly pb-6 '>
                    {/* first */}
                    <div className='flex justify-center flex-col items-center cursor-pointer' >
                        <div className='bg-[#d49a3a] m-auto rounded-full w-28 h-28 relative'>
                            <Link to="/">
                                <img src={donation} alt="" className='h-16 w-16 top-[25%] left-[20%] absolute items-center ' />
                            </Link>
                        </div>
                        <h1 className='py-4 text-2xl text-gray-400 hover:text-[#d49a3a]'>Start Donating</h1>
                    </div>
                    {/* second */}
                    <div className='flex justify-center flex-col items-center py-8 cursor-pointer' >
                        <div className='bg-[#d49a3a] m-auto rounded-full w-28 h-28 relative'>
                            <Link to="/">
                                <img src={community} alt="" className='h-16 w-16 top-[25%] left-[20%] absolute items-center text-white' />
                            </Link>
                        </div>
                        <h1 className='py-4 text-2xl text-gray-400 hover:text-[#d49a3a]'>Join Our Community</h1>
                    </div>
                    {/* third */}
                    <div className='flex justify-center flex-col items-center cursor-pointer' >
                        <div className='bg-[#d49a3a] m-auto rounded-full w-28 h-28 relative'>
                            <Link to="/">
                                <img src={volunteer} alt="" className='h-16 w-16 top-[25%] left-[20%] absolute items-center text-white' />
                            </Link>
                        </div>
                        <h1 className='py-4 text-2xl text-gray-400 hover:text-[#d49a3a]'>Be A Volunteer</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About