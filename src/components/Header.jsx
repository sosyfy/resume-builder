import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [ openMenu ,setOpenMenu ]= useState( false )
    
  return (
    <header className='sticky top-0 z-50'>
    <nav className="px-4 pt-6 pb-2 bg-white border-gray-200 lg:px-6 dark:bg-gray-800">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            {/* LOGO  */}
            <a href="/" className="flex items-center">
                <span className="self-center text-xl font-semibold uppercase whitespace-nowrap dark:text-white">Resume gen</span>
            </a>
         
            <div className="flex items-center lg:order-2">
                <button className="hidden px-4 py-1 mr-2 text-base font-semibold text-indigo-700 border-2 border-indigo-700 rounded dark:text-white hover:text-white hover:bg-indigo-700 lg:px-5 lg:py-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</button>
                <Link to="/templates" className="text-white bg-indigo-700 hover:bg-white hover:text-indigo-700 border border-indigo-700 font-semibold rounded text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</Link>
                <button type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={()=> setOpenMenu(!openMenu)}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>

            <div className={`${ openMenu ? " " : "hidden" }  justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}>
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">  
                <li>
                  <a href="#resume-example" className="block py-2 pl-3 pr-4 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Resume</a>
                </li>
                <li>
                  <Link to="/templates" className="block py-2 pl-3 pr-4 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Resume Templates</Link>
                </li>
                <li>
                  <a href="#resume-example" className="block py-2 pl-3 pr-4 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Resume Example</a>
                </li>
                <li>
                  <a href="#testimonials" className="block py-2 pl-3 pr-4 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Testimonials</a>
                </li>
                <li>
                  <a href="#pricing" className="block py-2 pl-3 pr-4 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Pricing</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header