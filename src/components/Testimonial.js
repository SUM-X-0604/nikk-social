import React from 'react'
import TestimonialData from './TestimonialData'

const Testimonial = () => {
    return (
        <>
            <section className='h-[100%] bg-gray-900 py-8'>

                <div className='py-8 flex flex-col items-center justify-center leading-10' data-aos="fade-up">
                    <h1 className=' text-2xl text-[#da8a00] font-sans font-semibold capital'>Testimonial</h1>
                    <p className='py-2 capitalize text-[40px] text-gray-300'>what people says</p>
                </div>
                <TestimonialData />

            </section>
        </>
    )
}

export default Testimonial