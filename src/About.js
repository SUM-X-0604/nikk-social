import React from 'react';
import donation from './assets/png/donation-1.png';
import community from './assets/png/community-1.png'
import volunteer from './assets/png/volunteer-1.png'
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <>
            <section className='bg-gray-200 h-[100%] '>

                {/* container */}
                <div className=' py-8 '>
                    {/* header */}
                    <div className='flex flex-col'>
                        {/* headings */}
                        <div>
                            <h1 className='py-2 capitalize text-md text-[#d49a35] font-sans font-semibold px-4'>welcome to nikk social walfare foudation </h1>
                            <p className='text-[#39311d] px-4 text-4xl leading-snug'>We Help Thousands of Children to Get Their Education</p>
                        </div>
                        {/* text */}
                        <div className='text-[#666666] px-4 py-4 leading-normal text-[16px] font-serif'>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <br />
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>
                    </div>
                </div>

                {/* works */}
                <div className='flex gap-6 justify-center items-center flex-col md:flex-row md:justify-evenly pb-6'>
                    {/* first */}
                    <div className='flex justify-center flex-col items-center pt-4' >
                        <div className='bg-[#d49a3a] m-auto rounded-full w-28 h-28 relative'>
                            <Link to="/">
                                <img src={donation} alt="" className='h-16 w-16 top-[25%] left-[20%] absolute items-center text-white' />
                            </Link>
                        </div>
                        <h1 className='py-4 text-2xl'>Start Donating</h1>
                    </div>
                    {/* second */}
                    <div className='flex justify-center flex-col items-center py-8' >
                        <div className='bg-[#d49a3a] m-auto rounded-full w-28 h-28 relative'>
                            <Link to="/">
                                <img src={community} alt="" className='h-16 w-16 top-[25%] left-[20%] absolute items-center text-white' />
                            </Link>
                        </div>
                        <h1 className='py-4 text-2xl'>Join Our Community</h1>
                    </div>
                    {/* third */}
                    <div className='flex justify-center flex-col items-center' >
                        <div className='bg-[#d49a3a] m-auto rounded-full w-28 h-28 relative'>
                            <Link to="/">
                                <img src={volunteer} alt="" className='h-16 w-16 top-[25%] left-[20%] absolute items-center text-white' />
                            </Link>
                        </div>
                        <h1 className='py-4 text-2xl'>Be A Volunteer</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About