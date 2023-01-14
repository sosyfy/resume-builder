import React, { useRef, useState } from 'react'
import shallow from 'zustand/shallow';
import { useReferences } from '../../stores/data.store';
import {TbTrash, TbGridDots } from "react-icons/tb"

function ReferencesEdit() {
  const references  = useReferences((state) => state.references);
  const [update ,add , changeOrder, purge ] = useReferences(
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
    const copyListItems = [...references];
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
        <h1 className="text-2xl font-bold">References</h1>
        <p className="text-gray-400 leading-5">
           Some references from others in the team 
        </p>
      </div>

      {/* form section */}
     { references?.map(( reference , index )=> (
       <div 
       className='flex flex-nowrap gap-1 group w-full mt-5 cursor-pointer'
       key={index+reference.fullName }
        >
      {/* order changer */}
      <div 
      className='cursor-pointer mt-8 opacity-0 group-hover:opacity-100 transition-all ease-in'
      onDragStart={(e) => dragStart(e, index)}
      onDragEnter={(e) => dragEnter(e, index)}
      onDragEnd={drop}
      draggable
      > <TbGridDots /> </div>
      {/* text fields */}
      <div className='border w-full rounded lg:px-6 px-3'>
        {/* top bar */}
        <div className="py-6  flex items-center justify-between w-full" 
        onClick={()=> handleActiveIndex(index)}

        >
          {/* title */}
          <h4 className='text-base font-medium'>{ reference?.fullNames }</h4>
          {/* actions */}
          <div className='hidden group-hover:inline-block' >
            <TbTrash onClick={()=> purge(index)} />
          </div>
        </div>
        {/* input fields */}
        <div className={` ${activeIndex == index ? "" : "hidden"} transition-all duration-300 ease-in w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-4 pb-7`}>
          <div className="grid col-span-2 lg:col-span-1">
            <label htmlFor="title" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>Full Name</label>
            <input
              type="text"
              className='input'
              placeholder=''
              onChange={(e)=>update(index , "fullNames", e.target.value )}
              name="fullNames"
              value={ reference?.fullNames }
            />
          </div>
        
          <div className=" grid col-span-2 lg:col-span-1">
            <label htmlFor="title" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>company</label>
            <input
              type="text"
              className='input'
              placeholder=''
              onChange={(e)=>update(index , "company", e.target.value )}
              name="company"
             value={ reference?.company }
            />
          </div>

          <div className=" grid col-span-2 lg:col-span-1">
            <label htmlFor="title" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>Position</label>
            <input
              type="text"
              className='input'
              placeholder=''
              onChange={(e)=>update(index , "position", e.target.value )}
              name="position"
             value={ reference?.position }
            />
          </div>

          <div className=" grid col-span-2 lg:col-span-1">
            <label htmlFor="title" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>Phone Number</label>
            <input
              type={"number"}
              className='input'
              placeholder=''
              onChange={(e)=>update(index , "phoneNumber", e.target.value )}
              name="phoneNumber"
             value={ reference?.phoneNumber }
            />
          </div>

          <div className=" grid col-span-2 lg:col-span-1">
            <label htmlFor="title" className='text-gray-500 text-[0.85rem] font-medium my-1 ml-1'>Email</label>
            <input
              type="text"
              className='input'
              placeholder=''
              onChange={(e)=>update(index , "email", e.target.value )}
              name="email"
             value={ reference?.email }
            />
          </div>
         
        </div>
      </div>
       </div>
     )) }
     <a 
     className='text-purple-500 text-xs font-bold cursor-pointer hover:text-purple-700 hover:text-sm transition-all'
     onClick={()=>add()}
     >
     <span className="text-lg">+</span> Add more references  
     </a>
     
    </div>
  )
}

export default ReferencesEdit