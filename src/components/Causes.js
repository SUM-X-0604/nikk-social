import React from 'react'
import Carousel from './Carousel'
// import Slider from './Slider';

const Causes = () => {
    return (
        <section className='pt-[50px]' data-aos="fade-up" id='causes'>
            <div className='pt-8 flex flex-col items-center justify-center leading-normal'>
                <h1 className='text-3xl md:text-5xl text-[#da8a00] font-semibold capitalize'>our causes</h1>
                <p className='py-2 capitalize text-[40px] text-[#39311D]'>our causes & helps</p>
            </div>
            <Carousel />
        </section>
    )
}

export default Causes