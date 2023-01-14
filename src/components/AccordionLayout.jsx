import React from 'react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { GiChemicalArrow } from 'react-icons/gi'

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => (activeIndex !== index) ? setActiveIndex(index) :  setActiveIndex(0);

  return (
    <>
        <div onClick={() => handleSetIndex(index)} className='flex justify-between p-5 border mt-5 border-gray-400  mx-auto'>
            <div className='flex'>
                <div className='text-black font-semibold'>{title}</div>
            </div>
            <div className="flex items-center justify-center">
                {
                (activeIndex === index) 
                ? <IoIosArrowUp className='w-8 h-8' />
                : <GiChemicalArrow className='w-8 h-8' />
                }
            </div>
        </div>

        {(activeIndex === index) && (
            <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
              {children}
            </div>
        )}
    </>
  );
};

export default AccordionLayout;