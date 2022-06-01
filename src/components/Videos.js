import React, { useState } from 'react';


const Blog = () => {

    const [showMore, setShowMore] = useState(false);

    const readMore = () => {
        setShowMore(!showMore)
    }

    return (
        <>
            <section className='py-20' id='blogs'>

                {/* container */}
                <div className='max-w-[1140px] m-auto'>

                    {/* header */}
                    <div>
                        <div className='py-8 flex flex-col items-center justify-center leading-10'>
                            <h1 className=' text-2xl text-[#da8a00] font-sans font-semibold capitalize'>our videos</h1>
                            <p className='py-2 capitalize text-[40px] text-[#39311D]'>our recent videos</p>
                        </div>
                    </div>

                    {/* items */}
                    <div className='flex flex-col md:flex-row md:justify-evenly'>

                        {/* 1st item */}
                        <div className='flex flex-col items-center px-4 '>
                            <div className='flex items-center justify-center'>
                                <iframe className='h-[100%] w-[100%] sm:h-[300px] sm:w-[500px] md:h-[400px] md:w-[600px]' src="https://www.youtube.com/embed/XFKD04ufib8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <div className='flex flex-col items-center text-center max-w-[840px] m-auto'>
                                <p className='text-2xl capitalize pt-4 hover:text-[#d49a35]'>Save Hasdeo Forest</p>
                                <p className='py-4 px-6 tex'>NIKK Social Welfare Foundation के तरफ से आप सभी प्रदेशवासियों तथा देश के सभी लोगों से निवेदन है कि ग्राम हरिहरपुर ( छत्तीसगढ़) में चल रहे हसदेव अरण्य बचाओ महाभियान में अपनी भागीदारी दे और  तीन लाख से अधिक वृक्षों को कटने से बचाए। <span className={showMore ? '' : 'hidden'}>
                                    यदि हम इन वृक्षों को नहीं बचा पाए तो आने वाले समय मे छत्तीसगढ़ के साथ साथ पूरे देश के जलवायु में भारी परिवर्तन देखने को मिलेगा साथ ही हसदेव अरण्य के सभी वृक्षों के कटने के पश्चात हसदेव नदी की जल भंडार क्षमता कम हो जायेगी जिसकी वजह से जिला जांजगीर-चम्पा एवं और भी अन्य क्षेत्र की सिंचाई व्यवस्था प्रभावित होगी। आइए हम और आप मिलकर हसदेव अरण्य की जंगलों को बचाए उसमें बसे जंगली जानवरों को बेघर होने से बचाए आपका एक प्रयास प्रकृति के लिए वरदान साबित हो सकती है।
                                </span>
                                    <p className='text-blue-500 cursor-pointer' onClick={readMore}>{showMore ? 'Read Less...' : 'Read More...'}</p>
                                </p>
                            </div>
                            <button className='text-md text-gray-300 border-2 rounded-full px-4 py-2 font-mono bg-[#d49a35] hover:scale-110 transition duration-200  sm:px-20 md:px-6'>
                                <a href="https://www.youtube.com/channel/UCV7ZRTVx3vfQeBMFIKfN9Rw" target="_blank" rel="noreferrer">See All Videos....</a>

                            </button>
                        </div>
                        {/* 1st item end */}
                    </div>
                </div>

            </section >

        </>
    )


}

export default Blog