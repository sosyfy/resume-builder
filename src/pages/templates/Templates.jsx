import React from 'react'
import { Link } from 'react-router-dom'
import temp from "../../assets/Screenshot 2022-11-04 102652.png"

function Templates() {
    return (

        <section className="py-20 px-6 md:px-4">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16 text-center">
                    <div className="flex mb-8 justify-center">
                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <h2 className="font-bold text-2xl">Our Creative Templates</h2>
                    <p className='leading-loose'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="grid grid-cols-12 gap-x-8 gap-y-16">
                    <div className="lg:col-span-4 grid md:col-span-6 col-span-12">
                        <div className="shadow group relative transition ease-in-out duration-100">
                            <Link to="/1/edit"><img src={temp} className="max-w-full h-auto block" /></Link>
                            <div className="text-center absolute mx-auto w-full bottom-5 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
                                <Link to="/1/edit" className="bg-blue-500 text-white text-base font-semibold w-2/5 mx-auto px-5 py-3 rounded">Use template <i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 grid md:col-span-6 col-span-12">
                        <div className="shadow group relative transition ease-in-out duration-100">
                            <Link to="/1/edit"><img src={temp} className="max-w-full h-auto block" /></Link>
                            <div className="text-center absolute mx-auto w-full bottom-5 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
                                <Link to="/1/edit" className="bg-blue-500 text-white text-base font-semibold w-2/5 mx-auto px-5 py-3 rounded">Use template <i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 grid md:col-span-6 col-span-12">
                        <div className="shadow group relative transition ease-in-out duration-100">
                            <Link to="/1/edit"><img src={temp} className="max-w-full h-auto block" /></Link>
                            <div className="text-center absolute mx-auto w-full bottom-5 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
                                <Link to="/1/edit" className="bg-blue-500 text-white text-base font-semibold w-2/5 mx-auto px-5 py-3 rounded">Use template <i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Templates