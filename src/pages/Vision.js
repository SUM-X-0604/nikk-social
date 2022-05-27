import { Link } from "react-router-dom"


const Vision = () => {
    return (
        <>
            <section className='bg-gray-900 h-[75vh] '>
                {/* container */}
                <div className='px-4 py-28 max-w-[1140px] m-auto'>
                    {/* header */}
                    <div className='flex flex-col items-center justify-center pt-20 '>
                        <div className='md:py-4 md:text-center' data-aos="fade-down">
                            <h1 className='text-center capitalize text-2xl sm:text-3xl md:text-4xl  text-[#d49a35] font-sans font-semibold px-4 '>
                                coming soon...
                            </h1>

                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <button className='my-4 text-lg text-gray-300 border-2 px-4 rounded-full py-2 font-mono bg-[#0A686E] hover:scale-110 transition duration-200 sm:text-xl sm:px-20 md:text-xl md:px-18'>
                            <Link to='/'>
                                Back to Home
                            </Link>
                        </button>
                    </div>


                </div>

            </section>
        </>
    )
}

export default Vision