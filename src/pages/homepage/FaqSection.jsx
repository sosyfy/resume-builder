import React, { useState } from 'react'
import AccordionLayout from '../../components/AccordionLayout';

function FaqSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="max-w-screen-xl pt-0 pb-10 mx-auto lg:pb-20" >
            <h1 className="pb-6 mb-4 text-4xl font-bold text-center lg:text-5xl sm:pb-8">Frequently Asked Questions</h1>

            <div className='hidden px-5 mx-auto lg:w-4/6'>
                <AccordionLayout
                    title="Accordion 1"
                    index={1}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                >
                    This is Accordion 1 Content
                </AccordionLayout>
                <AccordionLayout
                    title="Accordion 1"
                    index={2}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                >
                    This is Accordion 1 Content
                </AccordionLayout>



            </div>

            <div className="grid gap-4 px-4 sm:grid-cols-2 md:gap-8">
                <div className="p-8 bg-gray-100 rounded-lg">
                    <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b">
                        <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">How does the product work?</h3>

                        <span className="inline-flex items-center justify-center w-8 h-8 text-gray-500 bg-gray-300 rounded-full shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>

                    <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                </div>

                <div className="p-8 bg-gray-100 rounded-lg">
                    <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b">
                        <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">What are the features?</h3>

                        <span className="inline-flex items-center justify-center w-8 h-8 text-gray-500 bg-gray-300 rounded-full shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>

                    <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                </div>


            </div>
        </section>
    )
}

export default FaqSection