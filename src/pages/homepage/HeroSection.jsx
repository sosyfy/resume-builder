import React from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/Screenshot 2022-11-04 102652.png"


function HeroSection() {
    return (
        <section className="h-screen px-5 mx-auto bg-white dark:bg-gray-900 pb-7 md:py-10 lg:py-3">
            <div className="flex flex-col items-start justify-center max-w-screen-xl mx-auto sm:grid lg:gap-10 sm:grid-cols-12">
                <div className="mt-3 mr-auto lg:mt-32 sm:col-span-12 lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold text-center lg:text-start md:text-5xl xl:text-7xl dark:text-white">
                        Create a Resume  that your Dream Job  will notice
                    </h1>
                    <img
                    className="object-contain mx-auto border shadow lg:hidden"
                        src={resume}
                        alt="mockup"
                    />
                    <div className="check-list md:px-16 lg:px-0">
                        <div className="flex items-center mt-8">
                            <div className="flex mr-6 check-list__item-icon">
                                <svg
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 5.63636L5.94118 10L15 2"
                                        stroke="#00CC92"
                                        stroke-width="3"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-lg font-medium">
                                Professional out-of-the-box resumes, instantly generated
                                by the most advanced technology available.
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="flex mr-6 check-list__item-icon">
                                <svg
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 5.63636L5.94118 10L15 2"
                                        stroke="#00CC92"
                                        stroke-width="3"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-lg font-medium">Create a modern resume that will result in interview callbacks.</div>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="flex mr-6 check-list__item-icon">
                                <svg
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 5.63636L5.94118 10L15 2"
                                        stroke="#00CC92"
                                        stroke-width="3"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-lg font-medium">
                            All key things on a single page. Fast & easy-to-use. 
                            </div>
                        </div>
                        <div className="flex items-center my-4">
                            <div className="flex mr-6 check-list__item-icon">
                                <svg
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 5.63636L5.94118 10L15 2"
                                        stroke="#00CC92"
                                        stroke-width="3"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-lg font-medium">
                               Ready to use.
                            </div>
                        </div>
                    </div>
                    <Link
                        to="/templates"
                        className="inline-flex items-center justify-center w-full px-6 py-3 mr-3 text-base font-medium text-center text-white bg-indigo-700 rounded-lg md:w-2/3 md:ml-16 lg:ml-0 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" >
                        Get started
                        <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </Link>
                </div>
                <div className="p-12 sm:col-span-12 lg:col-span-5">
                    <img
                    className="hidden object-contain border lg:block"
                        src={resume}
                        alt="mockup"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
