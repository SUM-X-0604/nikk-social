import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './TestimonialData.css';
import image1 from '../assets/png/review-modified.png'
import image2 from '../assets/png/review-2.png'
import image3 from '../assets/png/review-3.png'



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
                <img src={image1} alt='' />
                <div className="myCarousel">
                    <h3>Salim khan</h3>
                    <p>
                        I'm fortunate to have been part of Nick Social Walfare Foundation and really happy to see outstanding work done by them. It is a best way to stay connected with strangers. Everyone live their life for themselves, their family, friends and relatives but life is complete if we live for others too.
                    </p>
                </div>
            </div>

            <div className='py-4'>
                <img src={image2} alt='' />
                <div className="myCarousel">
                    <h3>Sumit Verma</h3>

                    <p>
                        Nick Social Walfare Foundation is one of the leading NGO in Raipur and we are very proud to work with this Ngo with complete transparency, accountability for the BPL Children for their critical surgeries
                    </p>
                </div>
            </div>

            <div className='py-4'>
                <img src={image3} alt='' />
                <div className="myCarousel">
                    <h3 className=''>Righteous Prince</h3>
                    <p>
                        It's great time to work with Nick Social Walfare Foundation. We are very lucky that we can help poor children to save their life for those who are critically ill. We pray to god that Nick Social Walfare Foundation reach at top of NGO sector.
                    </p>
                </div>
            </div>

            {/* <div className='py-4'>
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png" alt='' />
                <div className="myCarousel">
                    <h3>Sumit Verma</h3>

                    <p>
                        Nick Social Walfare Foundation is Umbrella in rain, Blanket in winter and Ice in summer. Abhilasha is a name that belongs to love, shelter and humanity.
                    </p>
                </div>
            </div> */}

            {/* <div className='py-4'>
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png" alt='' />
                <div className="myCarousel">
                    <h3>Sumit Verma</h3>

                    <p>
                        Nick Social Walfare Foundation believes that affection is greater than perfection. The organization obeys the rules that if and when were planted, nothing grew.
                    </p>
                </div>
            </div> */}


        </Carousel>
    );
}

export default TestimonialData
