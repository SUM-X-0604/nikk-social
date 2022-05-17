import React from 'react'
import About from './About'
import Blog from './Blog'
import Care from './Care'
import Causes from './Causes'
import Contact from './Contact'
import Header from './Header'
import Quote from './Quote'
import Testimonial from './Testimonial'

const Home = () => {
    return (
        <>
            <Header />
            <About />
            <Causes />
            <Quote />
            <Care />
            <Blog />
            <Testimonial />
            <Contact />
        </>
    )
}

export default Home