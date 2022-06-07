import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './TestimonialData.css';
import image1 from '../assets/png/review-modified.png'
import image2 from '../assets/png/review-2.png'
import image3 from '../assets/png/review-4.png'



const TestimonialData = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
        >

            <div className='py-4'>
                <img src={image3} alt='' />
                <div className="myCarousel">
                    <h3 className=''>Adv. Khulesh Sahu</h3>
                    <p>
                        Not an organisation but a family.

                        I have been part of various similar organisations but in Nikk Social the environment and cooperation between the volunteers are like a family.
                        I also liked the flexibility in terms of Sharing the ideas. I am sure that this speciality shall lead this organisation to touch the sky by becoming a pioneer in the field.
                    </p>
                </div>
            </div>


            <div className='py-4'>
                <img src={image1} alt='' />
                <div className="myCarousel">
                    <h3>Salim khan</h3>
                    <p>
                        I'm fortunate to have been part of Nick Social Welfare Foundation and really happy to see outstanding work done by them. It is a best way to stay connected with strangers. Everyone live their life for themselves, their family, friends and relatives but life is complete if we live for others too.
                    </p>
                </div>
            </div>

            <div className='py-4'>
                <img src={image2} alt='' />
                <div className="myCarousel">
                    <h3>Sumit Verma</h3>
                    <p>
                        Nick Social Welfare Foundation is one of the leading NGO in Raipur and we are very proud to work with this Ngo with complete transparency, accountability for the BPL Children for their critical surgeries
                    </p>
                </div>
            </div>


        </Carousel>
    );
}

export default TestimonialData
