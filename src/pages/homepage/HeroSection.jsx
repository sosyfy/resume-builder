import React from "react";
import resume from "../../assets/Screenshot 2022-11-04 102652.png"


function HeroSection() {
    return (
        <section class="bg-white dark:bg-gray-900 h-100 pb-7 md:py-10 lg:py-32 px-5 mx-auto">
            <div class="flex mx-auto  flex-col sm:grid lg:gap-10 sm:grid-cols-12  items-center justify-center max-w-screen-xl">
                <div class="mr-auto mt-6 lg:mt-0 place-self-center sm:col-span-12 lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold lg:text-start text-center md:text-5xl xl:text-7xl dark:text-white">
                        Create a Resume  that your Dream Job  will notice
                    </h1>
                    <img
                    className="object-contain  mx-auto lg:hidden border shadow"
                        src={resume}
                        alt="mockup"
                    />
                    <div class="check-list md:px-16 lg:px-0">
                        <div class="flex mt-8  items-center">
                            <div class="check-list__item-icon flex mr-6">
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
                            <div class="font-medium text-lg">
                                Professional out-of-the-box resumes, instantly generated
                                by the most advanced technology available.
                            </div>
                        </div>
                        <div class="flex mt-4 items-center">
                            <div class="check-list__item-icon flex mr-6">
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
                            <div class="font-medium text-lg">Create a modern resume that will result in interview callbacks.</div>
                        </div>
                        <div class="flex mt-4 items-center">
                            <div class="check-list__item-icon flex mr-6">
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
                            <div class="font-medium text-lg">
                            All key things on a single page. Fast & easy-to-use. 
                            </div>
                        </div>
                        <div class="flex my-4  items-center">
                            <div class="check-list__item-icon flex mr-6">
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
                            <div class="font-medium text-lg">
                               Ready to use.
                            </div>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-6 w-full md:w-2/3 md:ml-16 lg:ml-0 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" >
                        Get started
                        <svg
                            class="w-5 h-5 ml-2 -mr-1"
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
                    </a>
                </div>
                <div class="h-full sm:col-span-12 lg:col-span-5">
                    <img
                    className="object-contain hidden lg:block"
                        src={resume}
                        alt="mockup"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
