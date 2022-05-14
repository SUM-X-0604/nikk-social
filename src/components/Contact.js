import React from 'react';
import { UilPhone } from '@iconscout/react-unicons';
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'



const Contact = () => {

    return (
        <div className='bg-gray-900 pt-16 pb-8 lg:pt-24' id='contact' >
            {/* contact heading */}

            <div className='flex flex-col justify-center items-center ' data-aos="fade-up">
                <h1 className='text-2xl font-bold text-gray-200 md:text-3xl'>Contact Us</h1>
                <p className='text-md text-gray-500 font-semibold md:text-lg'>Get in touch</p>
            </div>

            <div className='py-12 px-4 flex flex-col items-start md:flex-row md:items-center md:justify-center md:space-x-12 ' data-aos="fade-up">

                {/* contact links 1st */}
                <div className='flex items-center px-4 pt-8'>
                    <div className='pr-4' >
                        <UilPhone className="h-8 w-10 text-blue-700" />
                    </div>
                    <div className='leading-6' >
                        <a href="tel:7999001618" target='_blank' rel="noreferrer">
                            <h1 className='text-xl font-bold text-gray-300'>Call Us</h1>
                            <p className='text-gray-500'>+91 9406308546</p>
                        </a>
                    </div>

                </div>
                {/*end contact links 1st */}


                {/* contact links 3rd */}
                <div className='flex items-center px-4 pt-8'>


                    <div className='pr-4' >
                        <BsWhatsapp className="h-8 w-10 text-blue-700" />
                    </div>
                    <div className='leading-6' >
                        <a href="https://api.whatsapp.com/send?phone=7999001618" target='_blank' rel="noreferrer">
                            <h1 className='text-xl font-bold text-gray-300'>Whatsapp</h1>
                            <p className='text-gray-500'>+91 9406308546</p>
                        </a>
                    </div>

                </div>
                {/*end contact links 3rd */}


                {/* contact links 2nd */}
                <div className='flex items-center px-4 pt-8'>

                    <div className='pr-4' >
                        <AiOutlineMail className="h-8 w-10 text-blue-700" />
                    </div>
                    <div className='leading-6' >
                        <a href="mailto:sumeet0604.sv@gmail.com" target='_blank' rel="noreferrer">
                            <h1 className='text-xl font-bold text-gray-300'>Email</h1>
                            <p className='text-gray-500'>support@nikksocial.in</p>
                        </a>
                    </div>

                </div>
                {/*end contact links 2nd */}

                {/* contact links 4th */}
                <div className='flex items-center px-4 pt-8'>

                    <div className='pr-4' >
                        <GoLocation className="h-8 w-10 text-blue-700" />
                    </div>
                    <div className='leading-6' >
                        <a href="https://www.google.com/maps/place/Raipur,+Chhattisgarh/@21.261848,81.4793298,11z/data=!3m1!4b1!4m5!3m4!1s0x3a28dda23be28229:0x163ee1204ff9e240!8m2!3d21.251382!4d81.6296411" target='_blank' rel="noreferrer">
                            <h1 className='text-xl font-bold text-gray-300'>Location</h1>
                            <p className='text-gray-500'>Raipur(CG), India</p>
                        </a>
                    </div>

                </div>
                {/*end contact links 4th */}

            </div>


        </div >
    )
}

export default Contact