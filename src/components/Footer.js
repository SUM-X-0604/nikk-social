import React from 'react';
import { FaTwitter, FaInstagramSquare } from 'react-icons/fa'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
// import { Link } from 'react-router-dom';
// import Fade from 'react-reveal/Fade';
// import Bounce from 'react-reveal/Bounce';



const Footer = () => {

    return (
        <>
            <footer className=' py-6' id='footer' >

                <div className='py-4'>
                    {/* intro */}
                    {/* links */}

                    {/* social media */}
                    <div className='py-6 px-8 flex justify-center flex-shrink-0 items-center space-x-16 sm:space-x-20 md:space-x-28 lg:space-x-36 text-black'>

                        {/* Github */}
                        <a href="/" target="_blank" rel="noreferrer">
                            <AiFillGithub size={20} />
                        </a>
                        {/* Twitter */}
                        <a href="/" target="_blank" rel="noreferrer">
                            <FaTwitter size={20} />
                        </a>
                        {/* Linkedin */}
                        <a href="/" target="_blank" rel="noreferrer">
                            <AiFillLinkedin size={20} />
                        </a>
                        {/* instagram */}
                        <a href="/" target="_blank" rel="noreferrer">
                            <FaInstagramSquare size={20} />
                        </a>

                    </div>

                    {/* copyright */}
                    <div className='flex justify-center items-center py-4'>
                        <h1 className='text-xl'>
                            Copyright © 2022 Nikk Social
                        </h1>

                    </div>

                </div>
            </footer >
        </>
    )


}

export default Footer