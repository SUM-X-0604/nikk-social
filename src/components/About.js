import React from 'react';
import donation from '../assets/png/donation-1.png';
import community from '../assets/png/community-1.png'
import volunteer from '../assets/png/volunteer-1.png'
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <>
            <section className='bg-gray-900 h-[100%]' id='about'>

                {/* container */}
                <div className='py-8 md:py-12 max-w-[1140px] m-auto'>
                    {/* header */}
                    <div className='flex flex-col'>
                        {/* headings */}
                        <div className='md:py-8 md:text-center' data-aos="fade-down">
                            <h1 className='py-2 capitalize text-sm md:text-xl text-[#d49a35] font-sans font-semibold px-4'>
                                welcome to Nikk Social Walfare Foudation
                            </h1>

                            <p className='text-[#b0aa9c] px-4 text-2xl md:text-5xl md:leading-normal'>
                                We Help Thousands of Children to Get Their Education
                            </p>
                        </div>
                        {/* text */}
                        <div className='text-[#aba8a8] px-4 py-4 leading-normal text-[16px] md:text-[22px]' data-aos="fade-up">
                            <p>Nikk Social Walfare Foudation, an Indian social development organization, is directly benefitting thousands of children and their families every year. We have several live welfare projects on education, healthcare, livelihood, and women's empowerment in all over Chhattigarh.</p>
                            <br />
                            <p>Nikk Social aims to build an equitable relationship of strength, sustenance and dignity between the cities and villages using the under-utilized urban material as a tool to trigger development with dignity, across the country.</p>
                            <button className='my-4 text-lg text-gray-300 border-2 px-4 rounded-full py-2 font-mono bg-[#0A686E] hover:scale-110 transition duration-200 '>
                                <Link to='/about-us'>
                                    Read More...
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                {/* works */}
                <div className='flex gap-6 justify-center items-center flex-wrap md:justify-evenly pb-6 ' data-aos="fade-up">
                    {/* first */}
                    <div className='flex justify-center flex-col items-center cursor-pointer' >
                        <div className='bg-[#d49a3a] m-auto rounded-full w-28 h-28 relative'>
                            <Link to="/donation">
                                <img src={donation} alt="" className='h-16 w-16 top-[25%] left-[20%] absolute items-center ' />
                            </Link>
                        </div>
                        <Link to='/donation'>
                            <h1 className='py-4 text-2xl text-gray-400 hover:text-[#d49a3a]'>
                                Start Donating
                            </h1>
                        </Link>
                    </div>
                    {/* second */}
                    <div className='flex justify-center flex-col items-center py-8 cursor-pointer' >
                        <div className='bg-[#d49a3a] m-auto rounded-full w-28 h-28 relative'>
                            <Link to="/registration">
                                <img src={community} alt="" className='h-16 w-16 top-[25%] left-[20%] absolute items-center text-white' />
                            </Link>
                        </div>
                        <Link to="/registration">
                            <h1 className='py-4 text-2xl text-gray-400 hover:text-[#d49a3a]'>Join Our Community</h1>
                        </Link>
                    </div>
                    {/* third */}
                    <div className='flex justify-center flex-col items-center cursor-pointer' >
                        <div className='bg-[#d49a3a] m-auto rounded-full w-28 h-28 relative'>
                            <Link to="/registration">
                                <img src={volunteer} alt="" className='h-16 w-16 top-[25%] left-[20%] absolute items-center text-white' />
                            </Link>
                        </div>
                        <Link to="/registration">
                            <h1 className='py-4 text-2xl text-gray-400 hover:text-[#d49a3a]'>Be A Volunteer</h1>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About