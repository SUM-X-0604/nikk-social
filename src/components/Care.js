import React from 'react';
import image from '../assets/image-14.jpg'

const Care = () => {
    return (
        <>
            <section className='h-[100%] py-20  bg-gray-900' id='care'>

                {/* container */}
                <div className='py-8 flex flex-col md:flex-row md:items-center md:justify-evenly max-w-[1140px] m-auto'>

                    {/* text */}
                    <div className='py-4 flex flex-col sm:px-4 md:w-[50%]'>
                        <div className='leading-normal'>
                            <h1 className='text-md text-[#d49a35] font-sans font-semibold px-4 capitalize'>welcome to nikk social walfare foudation</h1>
                            <p className='text-[#b0aa9c] px-4 text-5xl leading-snug capitalize'>do you care our children?</p>
                        </div>
                        <div className='px-4 py-4 leading-normal text-[#aba8a8]'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, autem? Amet quasi eligendi aspernatur nobis. Id quasi alias voluptate eveniet. Sequi.</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nam quasi nesciunt accusamus maiores eveniet laborum sequi hic dignissimos facilis error voluptatum animi, doloribus porro ut doloremque saepe ducimus nihil similique consectetur.</p>
                            <button className='my-4 text-lg text-gray-300 border-2 px-4 rounded-full py-2 font-mono bg-[#0A686E]
                                hover:scale-110 transition duration-200 sm:text-xl sm:px-20 md:text-2xl md:px-28'>
                                Be A Volunteer
                            </button>
                        </div>
                    </div>

                    {/* image */}
                    <div className='px-4 flex flex-col sm:px-8 md:w-[50%]'>
                        <div className=''>
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Care