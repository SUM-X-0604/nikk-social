import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-scroll"

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const background = () => {
        if (window.scrollY >= 60) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', background)

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 500
        })
    }

    return (
        <div className={nav ? 'nav-container active ' : 'nav-container'}>
            <div className="navbar">
                <div className="logo flex flex-col justify-center items-left sm:mx-4">
                    <h1
                        className='text-2xl text-gray-400 font-bold '
                        onClick={handleScroll}>
                        Nikk
                        <span className=' text-[#d49a35]'>
                            Social
                        </span>
                    </h1>
                    <span className='text-gray-400 text-[12px]'>Walfare Foundation</span>
                </div>

                <div className={click ? 'list-group active' : 'list-group'}>
                    <Link
                        className='nav-link'
                        activeClass="active"
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Home
                    </Link>

                    <Link
                        className='nav-link'
                        activeClass="active"
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        About
                    </Link>


                    <Link
                        className='nav-link'
                        activeClass="active"
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Blog
                    </Link>

                    <Link
                        className='nav-link'
                        activeClass="active"
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Contact
                    </Link>
                </div>


                <div className="icons" onClick={handleClick}>
                    <div className={click ? "bar1 active" : "bar1"}></div>
                    <div className={click ? "bar2 active" : "bar2"}></div>
                    <div className={click ? "bar3 active" : "bar3"}></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar