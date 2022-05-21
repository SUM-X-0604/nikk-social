import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const background = () => {
        if (window.scrollY >= Infinity) {
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
            <div className="navbar sm:pt-8">
                <div className="logo flex flex-col justify-center items-left sm:mx-4 cursor-pointer " data-aos="fade-down">
                    <Link to="/">
                        <h1
                            className='text-2xl text-gray-400 font-bold sm:text-3xl'
                            onClick={handleScroll}
                        >
                            Nikk
                            <span className=' text-[#d49a35]'>
                                Social
                            </span>
                        </h1>
                        <span className='text-gray-400 text-[12px]'>Walfare Foundation</span>
                    </Link>
                </div>

                <div>

                    <div className={click ? 'list-group active ' : 'list-group'}>
                        <NavLink
                            className='nav-link text-lg md:text-xl'
                            activeclass="active"
                            to="/"
                            onClick={handleScroll}

                        >
                            Home
                        </NavLink>

                        <Link
                            className='nav-link text-lg md:text-xl'
                            activeclass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            About
                        </Link>

                        <Link
                            className='nav-link text-lg md:text-xl'
                            activeclass="active"
                            to="blogs"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            Blog
                        </Link>

                        <Link
                            className='nav-link text-lg md:text-xl'
                            activeclass="active"
                            to="causes"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            Causes
                        </Link>

                        <NavLink
                            className='nav-link text-lg md:text-xl'
                            activeclass="active"
                            to="/registration"
                            onClick={handleScroll}
                        >
                            Join
                        </NavLink>

                        <NavLink
                            className='nav-link text-lg md:text-xl'
                            activeclass="active"
                            to="/donation"
                            onClick={handleScroll}
                        >
                            Donate
                        </NavLink>

                        <Link
                            className='nav-link text-lg md:text-xl'
                            activeclass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            Contact
                        </Link>
                    </div>
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