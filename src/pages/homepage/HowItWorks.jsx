import React from 'react'
import { Link } from 'react-router-dom'

function HowItWorks() {
    return (
        <section className="py-8 lg:pb-20 max-w-screen-xl mx-auto">
            <div class="">
                <h1 className='text-indigo-700 sm:py-4 uppercase text-center text-2xl font-medium'>how it works</h1>
                <h1 class="text-4xl lg:text-5xl font-bold mb-4 text-center sm:pb-8"> How to create CV <br class="sm:hidden block" />with Jenga Cv</h1>
                <div class="grid grid-cols-1 sm:grid-cols-12 pt-3 px-4 lg:px-2">
                    <div class="lg:col-span-3 sm:col-span-6 mb-6 flex flex-col items-center p-4">
                        <img class="mb-6" src="assets/img/category/icon1.png" width="75" alt="Feature" />
                        <h4 class="mb-4 font-semibold text-xl lg:text-2xl">Signup</h4>
                        <p class="mb-0 font-normal sm:text-start text-center">Sign up for Venngage—it's free to get
                            started using our online resume builder</p>
                    </div>
                    <div class="lg:col-span-3 sm:col-span-6 mb-6 flex flex-col items-center p-4">
                        <img class="mb-6" src="assets/img/category/icon1.png" width="75" alt="Feature" />
                        <h4 class="mb-4 font-semibold text-xl  lg:text-2xl">Choose Template</h4>
                        <p class="mb-0 font-normal sm:text-start text-center">Sign up for Venngage—it's free to get
                            started using our online resume builder</p>
                    </div>
                    <div class="lg:col-span-3 sm:col-span-6 mb-6 flex flex-col items-center p-4">
                        <img class="mb-6" src="assets/img/category/icon1.png" width="75" alt="Feature" />
                        <h4 class="mb-4 font-semibold text-xl  lg:text-2xl">Edit Template</h4>
                        <p class="mb-0 font-normal sm:text-start text-center">Sign up for Venngage—it's free to get
                            started using our online resume builder</p>
                    </div>
                    <div class="lg:col-span-3 sm:col-span-6 mb-6 flex flex-col items-center p-4">
                        <img class="mb-6" src="assets/img/category/icon1.png" width="75" alt="Feature" />
                        <h4 class="mb-4 font-semibold text-xl  lg:text-2xl">Download Resume</h4>
                        <p class="mb-0 font-normal sm:text-start text-center">Sign up for Venngage—it's free to get
                            started using our online resume builder</p>
                    </div>
                </div>
                <div class="text-center py-8">
                    <Link to="/templates" class="inline-flex text-center font-normal rounded-md bg-indigo-700 text-white px-4 py-2 lg:py-3" href="#!" role="button">BUILD YOUR RESUME NOW</Link>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks