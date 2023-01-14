import React, { useState } from 'react'
import AccordionLayout from '../../components/AccordionLayout';

function FaqSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="pt-0 pb-10 lg:pb-20 max-w-screen-xl mx-auto" >
                <h1 class="text-4xl lg:text-5xl pb-6 font-bold mb-4 text-center sm:pb-8">Frequently Asked Questions</h1>

            <div className='lg:w-4/6 mx-auto px-5'>
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
        </section>
    )
}

export default FaqSection