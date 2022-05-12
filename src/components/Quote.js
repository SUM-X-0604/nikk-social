import React from 'react'

const Quote = () => {
    return (

        <>
            <section>

                <div className='quotes-container '>

                    <div className='w-[100%] h-[100%] absolute opacity-80 bg-[#000000b0] z-[-1] '>
                        <div className='flex flex-col px-4 pt-16'>
                            {/* header */}
                            <div className='w-[100%]'>
                                <span className='text-white text-lg font-sans'>Great Reviews for our services</span>
                                <h1 className='text-[40px] text-white py-2 leading-normal'>Technical statistics</h1>
                            </div>
                        </div>

                        {/* container */}
                        <div className='flex flex-wrap items-center justify-center py-8 relative'>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Quote