import React, { useRef, useState } from 'react'
import shallow from 'zustand/shallow';
import { useEducation } from '../../stores/data.store';
import {TbTrash, TbGridDots } from "react-icons/tb"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function EducationEdit() {
  const education  = useEducation((state) => state.education);
  const [update ,add , changeOrder, purge ] = useEducation(
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
    const copyListItems = [...education];
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
        <h1 className="text-2xl font-bold">Education History</h1>
        <p className="text-gray-400 leading-5">
          Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.
        </p>
      </div>

      {/* form section */}
     { education?.map((edu , index )=> (
       <div 
       className='flex flex-nowrap gap-1  w-full mt-5 cursor-pointer'
       key={index+edu.area }
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
          <h4 className='text-base font-medium'>{ edu.institution }</h4>
          {/* actions */}
          <div className='hidden group-hover:inline-block' >
            <TbTrash onClick={()=> purge(index)} />
          </div>
        </div>
        {/* input fields */}
        <div className={` ${activeIndex == index ? "" : "hidden"} transition-all duration-300 ease-in w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-4 pb-7`}>
          <div className="grid col-span-2 lg:col-span-1">
            <label htmlFor="title" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>Institution</label>
            <input
              type="text"
              className='input'
              placeholder=''
              onChange={(e)=>update(index , "institution", e.target.value )}
              name="institution"
              value={ edu?.institution }
            />
          </div>
          <div className="grid col-span-2 lg:col-span-1">
            <label htmlFor="" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>Area Of Study </label>
            <input
              type="text"
              className='input'
              placeholder=''
              onChange={(e)=> update( index , "studyArea", e.target.value )}
              name="studyArea"
              value={ edu?.studyArea}
            />
          </div>

          <div className=" grid col-span-2 lg:col-span-1">
            <label htmlFor="title" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>Start Date</label>
            <input
              type={'date'}
              className='input'
              placeholder=''
              onChange={(e)=>update(index ,"startDate", e.target.value )}
              name="startDate"
              value={ edu?.startDate }
            />
          </div>

          <div className=" grid col-span-2 lg:col-span-1">
            <label htmlFor="title" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>Completion Date</label>
            <input
              type={'date'}
              className='input'
              placeholder=''
              onChange={(e)=>update(index ,"endDate", e.target.value )}
              name="endDate"
              value={ edu?.endDate }
            />
          </div>

          <div className="col-span-2">
            <div className="grid">
              <label htmlFor="title" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>Course Description</label>
              <div className='mt-3 min-w-full'>
                <ReactQuill theme="snow" style={{ width: "inherit" }} className=' text-gray-600 bg-gray-200 min-h-[inherit]' value={edu?.courseSummary}   onChange={(value)=>update(index ,"courseSummary",value )} />
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
     <span className="text-lg">+</span> Add more education sections  
     </a>
     
    </div>
  )
}

export default EducationEdit