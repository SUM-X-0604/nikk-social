import React from 'react'
import { Link } from 'react-router-dom';
import image from '../assets/image-16.jpg'




const AboutUs = () => {
    return (
        <>
            <section className='bg-gray-900 h-[100%] '>
                {/* container */}
                <div className='px-4 py-28 max-w-[1140px] m-auto'>
                    {/* header */}
                    <div className='flex flex-col'>
                        {/* first paragraph */}

                        <div className='px-4 md:hidden'>
                            <img src={image} alt="" />
                        </div>

                        {/* headings */}
                        <div className='md:py-8 md:text-center' data-aos="fade-down">
                            <h1 className='py-2 capitalize text-xl md:text-2xl text-[#d49a35] font-sans font-semibold px-4'>
                                about Nikk Social Walfare Foudation
                            </h1>

                        </div>
                        {/* text */}
                        <div className='text-[#aba8a8] px-4 py-4 leading-normal text-[18px] md:text-[22px]' data-aos="fade-up">
                            <p>The main objects to be pursued by the company on its incorporation is to establish, set-up, maintain, erect, purchase, construct, renovate, manage, provide charitable organization for Health care and educational welfare activities, educational support to poor students or economically weaker section peoples in rural or urban sectors, and to provide educational support to poor students belongs to economically disadvantaged, child labourers, disabled, orphans, semi orphans, to open training camps and workshops for the development of arts, plays and culture and raise funds through subscriptions, donations, trade to fulfill the aims and objects, helping economically weaker people, medical support for poor peoples, provide basic needs of food, shelter, garments, free healthcare services, hospitals support, dispensaries, medical and welfare facilities, medical camps, blood donation, and medical assistance to all and undertake social welfare development activities and to carry out the aforesaid activities for charitable purposes and not for profit for all citizens irrespective of caste, religion and sex and apply profits, if any or other income in promoting the objectives of the company.</p>
                        </div>
                        {/* first paragraph end */}

                    </div>


                    {/* Founder Message start */}

                    <div className='py-8 flex flex-col md:flex-row'>
                        <div className='w-[50%]'>
                            <img src={image} alt="" />
                        </div>
                        <div className='w-[50%] text-center'>
                            <h1 className='py-2 capitalize text-xl md:text-2xl text-[#d49a35] font-sans font-semibold px-4 text-center'>Note from Founder</h1>
                            <p className='text-[#aba8a8] px-4 py-2 leading-normal text-[18px] md:text-[22px]'>
                                Nick Social Walfare Foundation was born to bridge the gap between the people who want to make a difference through giving back and those who are doing phenomenal work but need more support. Our focus has been to build trust for the social sector by strong due diligence of all our nonprofit partners, and transparency on how donations impacted lives on the ground.
                            </p>
                            <h1 className='text-white px-4 py-2 leading-normal text-[18px] md:text-[22px]'>Mr. Kamal Das, Founder, Nick Social Walfare Foundation</h1>
                        </div>
                    </div>
                    {/* Founder Message end */}

                    {/* legal and financial information start */}

                    <div>
                        <h1 className='py-2 capitalize text-xl md:text-2xl text-[#d49a35] font-sans font-semibold px-4'>legal and financial information </h1>
                        <ul className='py-2 text-[#aba8a8] capitalize text-xl md:text-2xl font-sans font-semibold px-4'>
                            <li>(I). NICK SOCIAL WALFARE FOUNDATION is registered on 24-03-2022, a not-for-profit company u/s 8 of the Companies Act, 2013 <span className='text-white'>(Reg. No. 133652)</span> .</li>
                            <br />
                            <li>(II). The Corporate Identity Number of the NICK SOCIAL WALFARE FOUNDATION is <span className='text-white'>U85320CT2022NPL012928</span> </li>
                            <br />
                            <li>(III). The Tax Deduction and Collection Account Number(TAN) is <span className='text-white'>
                                JBPN03423A</span> </li>
                            <br />
                            <li>(IV). The Permanent Account Number(PAN) is <span className='text-white'>AAICN1439M</span> </li>
                            <br />
                            <li>(V).
                                Employees state insurance corporation certificate number is <span className='text-white'>C-11</span>
                            </li>
                        </ul>
                        <div className='py-2 capitalize text-xl md:text-2xl text-[#d49a35] font-sans font-semibold px-4'>
                            <address>
                                Visit us at:<br />
                                Nikk Social Walfare Foundation<br />
                                C/O Shambhu Das, Chhind, Sarangarh, Raigarh<br />
                                Chattisgarh, India
                            </address>
                        </div>
                    </div>


                    {/* legal and financial information end */}


                    <button className='my-4 text-lg text-gray-300 border-2 px-4 rounded-full py-2 font-mono bg-[#0A686E] hover:scale-110 transition duration-200 sm:text-xl sm:px-20 md:text-xl md:px-18'>
                        <Link to='/'>
                            Back to Home
                        </Link>
                    </button>

                </div>


            </section>
        </>
    )
}

export default AboutUs