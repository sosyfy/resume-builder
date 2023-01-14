import React from 'react'
import { Link } from 'react-router-dom'

function HowItWorks() {
    return (
        <section className="max-w-screen-xl px-4 py-8 mx-auto lg:pb-20">
            <div className="">
                <h1 className='text-2xl font-medium text-center text-indigo-700 uppercase sm:py-4'>how it works</h1>
                <h1 className="mb-4 text-4xl font-bold text-center lg:text-5xl sm:pb-8"> How to create CV <br className="block sm:hidden" />with Resume Gen</h1>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                    <div className="flex flex-col items-center px-6 py-8 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Choose Template</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                    <div className="flex flex-col items-center px-6 py-8 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Edit Template</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                    <div className="flex flex-col items-center px-6 py-8 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Download template</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                   
                </div>
                <div className="py-8 text-center">
                    <Link to="/templates" className="inline-flex px-4 py-2 font-normal text-center text-white bg-indigo-700 rounded-md lg:py-3" href="#!" role="button">BUILD YOUR RESUME NOW</Link>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks