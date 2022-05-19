import React from 'react'


const Registration = () => {
    return (
        <>
            <section className='bg-gray-900 h-[100%] w-[100%]'>

                {/* container */}
                <div class="flex items-center justify-center py-28">
                    <div class="w-[100%] sm:w-[70%] md:-[50%] max-w-[1140px] m-auto px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg ">
                        <h3 class="text-2xl font-bold text-center">Join us</h3>
                        <form action="">
                            <div>
                                <div class="mt-4">
                                    <label class="block" for="Name">Full Name:</label>
                                    <input type="text" placeholder="Enter Name..."
                                        class="input-class">
                                    </input>
                                </div>

                                <div class="mt-4">
                                    <label class="block" for="Name">Father's Name:</label>
                                    <input type="text" placeholder="Enter Father's Name..."
                                        class="input-class">
                                    </input>
                                </div>

                                <div class="mt-4">
                                    <label class="block" for="number">Mobile Number:</label>
                                    <input type="number" placeholder="Mobile Number..."
                                        class="input-class">
                                    </input>
                                </div>

                                <div class="mt-4">
                                    <label class="block" for="email">Email:</label>
                                    <input type="email" placeholder="Email"
                                        class="input-class">
                                    </input>
                                </div>

                                <div class="mt-4">
                                    <label class="block" for="address">Address:</label>
                                    <textarea name="address" id="address" cols="20" rows="8" placeholder='Enter Your Address' className='input-class'></textarea>
                                </div>

                                <div class="flex">
                                    <button class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Register Yourself</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Registration