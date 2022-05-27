import React from 'react'
import About from '../components/About'
import Blog from '../components/Blog'
import Care from '../components/Care'
import Causes from '../components/Causes'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Quote from '../components/Quote'
import Testimonial from '../components/Testimonial'

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