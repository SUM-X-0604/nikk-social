import React from 'react';
import BlogCard from './BlogCard';
import image1 from '../assets/image-15.jpg'
import image2 from '../assets/image-5.jpg'
import image3 from '../assets/image-2.jpg'


const blogs = [
    {
        image: `${image1}`,
        title: "give education to homeless children",
        desc: "20 Million children in India do not go to school. Millions of children are still denied their right to education because of poverty. Donate for the education of poor children and support them with necessities like tuition fees, school supplies, footwear, transport, etc. Help them build a future that will make them escape poverty passed from generation to generation."
    },
    {
        image: `${image2}`,
        title: "give food to homeless children",
        desc: "20 Million children in India do not go to school. Millions of children are still denied their right to education because of poverty. Donate for the education of poor children and support them with necessities like tuition fees, school supplies, footwear, transport, etc. Help them build a future that will make them escape poverty passed from generation to generation."
    },
    {
        image: `${image3}`,
        title: "give hope to homeless people",
        desc: "20 Million children in India do not go to school. Millions of children are still denied their right to education because of poverty. Donate for the education of poor children and support them with necessities like tuition fees, school supplies, footwear, transport, etc. Help them build a future that will make them escape poverty passed from generation to generation."
    },

]

const Blog = () => {
    return (
        <>
            <section className='py-20' id='blogs'>
                {/* container */}
                <div className='max-w-[1140px] m-auto'>

                    {/* header */}
                    <div>
                        <div className='py-8 flex flex-col items-center justify-center leading-10'>
                            <h1 className=' text-2xl text-[#da8a00] font-sans font-semibold capitalize'>our blogs</h1>
                            <p className='py-2 capitalize text-[40px] text-[#39311D]'>recent from blog</p>
                        </div>
                    </div>

                    {/* items */}
                    <div className='flex flex-col md:flex-row md:justify-evenly'>
                        {blogs.map((blog) => (
                            <BlogCard
                                key={blog.title}
                                image={blog.image}
                                title={blog.title}
                                description={blog.desc}
                            />
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Blog