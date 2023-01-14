import React, { useRef, useState } from 'react'
import shallow from 'zustand/shallow';
import { useWork } from '../../stores/data.store';
import {TbTrash, TbGridDots } from "react-icons/tb"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function ExperienceEdit() {
  const companies  = useWork((state) => state.companies);
  const [update ,add , changeOrder, purge ] = useWork(
    (state) => [ state.update , state.add , state.changeOrder, state.purge ], 
    shallow
  );

  const dragItem = useRef();
  const dragOverItem = useRef();

  const [activeIndex , setActiveIndex ] = useState(0);
  const [dragItemIndex , setDragItemIndex ] = useState(0);
  const [dragOverItemIndex , setDragOverItemIndex ] = useState(0);
  const dragStart = (e, position) => {
    dragItem.current = position;
    setDragItemIndex(position)
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    setDragOverItemIndex(position)
  };
 
  const drop = (e) => {
    const copyListItems = [...companies];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    changeOrder( dragItemIndex ,dragOverItemIndex )
    // setList(copyListItems);
  };

const handleActiveIndex = (index)=>{
  if ( activeIndex == index ){
    setActiveIndex(1000)
  }else {
    setActiveIndex(index)
  }
}
  return (
    <div>
      {/* title */}
      <div className='mx-4'>
        <h1 className="text-2xl font-bold">Employment History</h1>
        <p className="text-gray-400 leading-5">
          Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.
        </p>
      </div>

      {/* form section */}
     { companies?.map((company , index )=> (
       <div 
       className='flex flex-nowrap gap-1  w-full mt-5 cursor-pointer'
       key={index+company.name }
        >
      {/* order changer */}
      <div 
      className='cursor-pointer mt-8'
      onDragStart={(e) => dragStart(e, index)}
      onDragEnter={(e) => dragEnter(e, index)}
      onDragEnd={drop}
      draggable
      > <TbGridDots /> </div>
      {/* text fields */}
      <div className='border w-full rounded lg:px-6 px-3'>
        {/* top bar */}
        <div className="py-6 group flex items-center justify-between w-full" 
        onClick={()=> handleActiveIndex(index)}

        >
          {/* title */}
          <h4 className='text-base font-medium'>{ company.CompanyName }</h4>
          {/* actions */}
          <div className='hidden group-hover:inline-block' >
            <TbTrash onClick={()=> purge(index)} />
          </div>
        </div>
        {/* input fields */}
        <div className={` ${activeIndex == index ? "" : "hidden"} transition-all duration-300 ease-in w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-4 pb-7`}>
          <div className="grid col-span-2 lg:col-span-1">
            <label htmlFor="title" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>Job Title</label>
            <input
              type="text"
              className='input'
              placeholder='eg Software Engineer'
              onChange={(e)=>update(index , "position", e.target.value )}
              name="jobTitle"
              value={ company?.position }
            />
          </div>
          <div className="grid col-span-2 lg:col-span-1">
            <label htmlFor="" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>Employer</label>
            <input
              type="text"
              className='input'
              placeholder=''
              onChange={(e)=> update( index , "CompanyName", e.target.value )}
              name="name"
              value={ company?.CompanyName}
            />
          </div>
          <div className=" grid col-span-2 lg:col-span-1">
            <label htmlFor="title" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>Start Date</label>
            <input
              type={"date"}
              className='input'
              placeholder=''
              onChange={(e)=>update(index , "startDate", e.target.value )}
              name="startDate"
              value={ company?.startDate }
            />
          </div>
          <div className=" grid col-span-2 lg:col-span-1">
            <label htmlFor="title" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>End Date</label>
            <input
              type={"date"}
              className='input'
              placeholder=''
              onChange={(e)=>update(index, "endDate", e.target.value )}
              name="endDate"
              value={ company?.endDate }
            />
          </div>
          <div className="col-span-2">
            <div className="grid">
              <label htmlFor="title" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>Description</label>
              <div className='min-w-full mt-2'>
              <ReactQuill 
              theme="snow" 
              style={{ width: "inherit" }} 
              className=' text-gray-600 bg-gray-200 min-h-[inherit]' 
              value={ company?.summary }
              onChange={(value)=>update(index ,"summary", value )} 
              />

              </div>
            </div>
          </div>
        </div>
      </div>
       </div>
     )) }
     <a 
     className='text-purple-500 text-xs font-bold cursor-pointer hover:text-purple-700 hover:text-sm transition-all'
     onClick={()=>add()}
     >
     <span className="text-lg">+</span> Add more work history  
     </a>
     
    </div>
  )
}

export default ExperienceEdit