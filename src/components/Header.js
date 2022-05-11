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
                            <h1 className=' text-white font-semibold text-xl font-sans'>Raising Hope</h1>
                            <p className='text-white text-3xl font-bold'>To the Homeless & Hopeless People</p>
                            {/* button */}
                            <button className='mt-4 text-white border-2 mx-20 rounded-full py-2 font-mono bg-[#d49a35] hover:scale-110 transition duration-200 after:content-["->"] '>Join Us </button>
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