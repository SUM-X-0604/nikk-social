import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (

        <section className="errorPage my-[185px]">
            <div>
                <div className="flex justify-center items-center text-3xl text-red-800">
                    <p>Opps! page not available...</p>
                </div>
                <div className="text-center py-6">
                    <button className='my-4 text-lg text-gray-300 border-2 px-2 rounded-full py-2 font-mono bg-[#0A686E] hover:scale-110 transition duration-200 sm:text-xl sm:px-20 md:text-xl md:px-16'>
                        <Link to='/'>
                            Back To Home
                        </Link>
                    </button>
                </div>
            </div>
        </section>

    );
}

export default ErrorPage
