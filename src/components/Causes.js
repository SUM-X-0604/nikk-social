import React from 'react'
import Carousel from './Carousel'
// import Slider from './Slider';

const Causes = () => {
    return (
        <section className='my-8'>
            <div className='py-8 flex flex-col items-center justify-center leading-10'>
                <h1 className=' text-2xl text-[#da8a00] font-sans font-semibold capital'>our causes</h1>

                <p className='py-2 capitalize text-[40px] text-[#39311D]'>our causes & helps</p>
            </div>
            <Carousel />
        </section>
    )
}

export default Causes