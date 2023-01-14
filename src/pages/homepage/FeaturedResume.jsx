import React from 'react'
import { Link } from 'react-router-dom'
import resume from "../../assets/Screenshot 2022-11-04 102652.png"

function FeaturedResume() {
  return (
    <section id='resume-example' class="pt-16 pb-12 px-4 w-full  bg-gray-200">
            <div class="max-w-screen-xl mx-auto sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">  
                <div class="lg:col-span-6">
                    <div class="h-full flex items-center mx-auto justify-center">
                        <img class=" h-5/6  border-2 shadow-lg" src={resume} alt="alternative" />
                    </div>
                </div> 
                 {/* <!-- end of col --> */}
                 <div class="lg:col-span-6 my-10">
                    <div class="mb-16 lg:mb-0 xl:mt-24 flex flex-col items-center lg:items-start">
                        <h1 class="mb-6 text-5xl font-semibold text-center lg:text-start">Resume Example</h1>
                        <p class="mb-4 text-center lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis incidunt facilis, excepturi reprehenderit atque suscipit nesciunt blanditiis nobis praesentium, modi similique fuga possimus nostrum unde aliquam aliquid non ut exercitationem dolorum. Numquam sunt impedit molestiae ad delectus fuga expedita?</p>
                        <Link
                        to="/templates"
                        className="inline-flex mt-3 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 sm:w-2/4" >
                        View All Resume Examples
                       
                    </Link>
                    </div>
                </div>
                {/* <!-- end of col --> */}
            </div>
             {/* <!-- end of container --> */}
        </section>
  )
}

export default FeaturedResume