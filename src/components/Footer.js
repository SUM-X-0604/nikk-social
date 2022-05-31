import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-router-dom';
// import Fade from 'react-reveal/Fade';
// import Bounce from 'react-reveal/Bounce';

const Footer = () => {

    return (
        <>
            <footer className='py-6 bg-gray-300  bottom-0 text-center items-center w-[100%]' id='footer' >

                <Fade bottom>

                    <div className='mb-0 '>
                        {/* intro */}
                        {/* links */}

                        {/* social media */}
                        <div className='py-6 px-8 flex justify-center flex-shrink-0 items-center space-x-16 sm:space-x-20 md:space-x-28 lg:space-x-36 text-black '>

                            {/* Twitter */}
                            <a href="/" target="_blank" rel="noreferrer">
                                <FaFacebook size={20} />
                            </a>

                            {/* instagram */}
                            <a href="https://instagram.com/nikk_social_welfare_foundation?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                                <FaInstagramSquare size={20} />
                            </a>

                            {/* youtube */}
                            <a href="https://www.youtube.com/channel/UCV7ZRTVx3vfQeBMFIKfN9Rw" target="_blank" rel="noreferrer">
                                <AiFillYoutube size={20} />
                            </a>

                            {/* Linkedin */}
                            <a href="/" target="_blank" rel="noreferrer">
                                <AiFillTwitterCircle size={20} />
                            </a>

                        </div>

                        {/* copyright */}
                        <div className='flex justify-center items-center py-4'>
                            <h1 className='text-xl'>
                                Copyright © 2022 Nikk Social Welfare Foundation
                            </h1>
                        </div>
                    </div>
                </Fade>
            </footer >
        </>
    )


}

export default Footer