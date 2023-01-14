import React from 'react'
import { Link } from 'react-router-dom'
import temp from "../../assets/Screenshot 2022-11-04 102652.png"
import AllTemplates from '../../templates'
function Templates() {
    const templates = AllTemplates();

    return (
        <main>
            <header className='sticky top-0 z-50'>
                <nav className="px-4 pt-6 pb-2 bg-white border-gray-200 lg:px-6 dark:bg-gray-800">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                        {/* LOGO  */}
                        <a href="/" className="flex items-center px-3 py-1 text-white bg-purple-600 rounded ">
                            <span className="self-center text-xl font-semibold uppercase whitespace-nowrap dark:text-white">Resume gen</span>
                        </a>
                    </div>
                </nav>
            </header>
            <section className="px-6 py-20 md:px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-2xl font-bold">Our Creative Templates</h2>
                        <p className='max-w-md mx-auto leading-loose'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="grid grid-cols-12 gap-x-8 gap-y-16">
                        {templates?.map((template) => (
                            <div key={template.id} className="grid col-span-12 lg:col-span-4 md:col-span-6">
                                <div className="relative transition duration-100 ease-in-out shadow group">
                                    <Link to={`/${template.id}/edit`}><img src={temp} className="block h-auto max-w-full" alt='template' /></Link>
                                    <div className="absolute w-full mx-auto text-center transition-all duration-500 opacity-0 bottom-5 group-hover:opacity-100 ">
                                        <Link to={`/${template.id}/edit`} className="w-2/5 px-5 py-3 mx-auto text-base font-semibold text-white bg-blue-500 rounded">Use template</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Templates