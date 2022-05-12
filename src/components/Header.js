import React from 'react'

const Header = () => {
    return (
        <>
            {/* Section */}
            <section id='header'>

                {/* image */}
                <div className='header-container'>

                    {/* text */}
                    <div className="absolute top-[38vh] text-center w-full">
                        <div className='flex flex-col gap-6'>
                            <h1 className=' text-gray-300 font-semibold text-xl font-sans sm:text-2xl md:text-3xl'>Raising Hope</h1>
                            <p className='px-1 text-gray-300 text-4xl font-bold sm:text-5xl md:text-6xl'>To the Homeless & Hopeless People</p>
                        </div>
                        {/* button */}
                        <div className='py-8'>
                            <button className='text-lg text-gray-300 border-2 px-6 rounded-full py-2 font-mono bg-[#d49a35] hover:scale-110 transition duration-200 sm:text-xl sm:px-20 md:text-2xl md:px-28'>Join Us </button>
                        </div>
                    </div>

                </div>
                {/* image end */}

            </section >
            {/* section end */}
        </>
    )
}

export default Header;