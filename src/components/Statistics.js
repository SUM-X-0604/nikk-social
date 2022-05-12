import React from 'react';

const Statistics = () => {
    return (
        <>
            <section>

                <div className='stastics-container hidden md:block'>

                    <div className='w-[100%] h-[100%] absolute opacity-80 bg-[#031d1f] z-[-1] '>

                        <div className='hidden md:block'>
                            <div className='flex flex-col px-4 pt-16'>
                                {/* header */}
                                <div className='w-[100%]'>
                                    <span className='text-white text-lg font-sans'>Great Reviews for our services</span>
                                    <h1 className='text-[40px] text-white py-2 leading-normal'>Technical statistics</h1>
                                </div>
                            </div>

                            {/* container */}
                            <div className='flex flex-wrap items-center justify-center py-8 relative'>

                                {/* stastics */}
                                <div className='py-6 flex items-center justify-center flex-wrap space-x-3'>
                                    {/* 1st */}
                                    <div className='flex flex-col py-4 items-center justify-center'>
                                        <div className='w-[100%] relative z-0 block text-center bg-[#073f3f]  py-16 px-16 rounded '>
                                            {/* icon */}
                                            <span></span>
                                            {/* amount */}
                                            <p className='text-white'>₹10L</p>
                                            {/* text */}
                                            <h1>FUND RAISED</h1>
                                        </div>
                                    </div>
                                    {/* 1st */}
                                    <div className='flex flex-col py-4 items-center justify-center'>
                                        <div className='w-[100%] relative z-0 block text-center bg-[#073f3f]  py-16 px-16 rounded '>
                                            {/* icon */}
                                            <span></span>
                                            {/* amount */}
                                            <p className='text-white'>₹10L</p>
                                            {/* text */}
                                            <h1>FUND RAISED</h1>
                                        </div>
                                    </div>
                                    {/* 1st */}
                                    <div className='flex flex-col py-4 items-center justify-center'>
                                        <div className='w-[100%] relative z-0 block text-center bg-[#073f3f]  py-16 px-16 rounded '>
                                            {/* icon */}
                                            <span></span>
                                            {/* amount */}
                                            <p className='text-white'>₹10L</p>
                                            {/* text */}
                                            <h1>FUND RAISED</h1>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Statistics