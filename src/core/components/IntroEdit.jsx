import React from 'react'
import { useEffect } from 'react';
import shallow from 'zustand/shallow';
import { useIntro } from '../../stores/data.store'

function IntroEdit() {
  const intro = useIntro((state) => state.intro);
  const [update] = useIntro(
    (state) => [ state.update],
    shallow
  );

  return (
    <div className='w-full'>
      {/* title  */}
      <div className="">
        <h2 className="text-2xl font-semibold">Personal Details</h2>
      </div>
      {/* top inputs  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-3">
           {/* title */}
         <div className="grid">
          <label htmlFor="title" className='my-1 text-sm font-medium text-gray-500'>Wanted Job Title</label>
          <input
           type="text"
           className='input'
           placeholder='eg Software Engineer' 
           onChange={(e)=>update("jobTitle", e.target.value )}
           name="jobTitle"
           value={ intro?.jobTitle }
           />
         </div>
           {/* firstName */}
         <div className="grid">
          <label htmlFor="title" className='my-1 text-sm font-medium text-gray-500'>First Name</label>
          <input
           type="text"
           className='input'
           placeholder='' 
           onChange={(e)=>update("firstname", e.target.value )}
           name="firstname"
           value={ intro?.firstname }
           />
         </div>
         {/* lastName */}
         <div className="grid">
          <label htmlFor="title" className='my-1 text-sm font-medium text-gray-500'>Last Name</label>
          <input
           type="text"
           className='input'
           placeholder='eg Software Engineer' 
           onChange={(e)=>update("lastname", e.target.value )}
           name="lastname"
           value={ intro?.lastname }
           />
         </div>
          {/* email */}
         <div className="grid">
          <label htmlFor="title" className='my-1 text-sm font-medium text-gray-500'>Email</label>
          <input
           type="email"
           className='input'
           placeholder='' 
           onChange={(e)=>update("email", e.target.value )}
           name="email"
           value={ intro?.email}
           />
         </div>
         {/* phone */}
         <div className="grid">
          <label htmlFor="title" className='my-1 text-sm font-medium text-gray-500'>Phone</label>
          <input
           type="text"
           className='input'
           placeholder='' 
           onChange={(e)=>update("phone", e.target.value )}
           name="phone"
           value={ intro?.phone }
           />
         </div>
         {/* country */}
         <div className="grid">
          <label htmlFor="title" className='my-1 text-sm font-medium text-gray-500'>Country</label>
          <input
           type="text"
           className='input'
           placeholder='' 
           onChange={(e)=>update("location.country", e.target.value )}
           name="country"
           value={ intro?.location.country }
           />
         </div>
         {/* city */}
         <div className="grid">
          <label htmlFor="title" className='my-1 text-sm font-medium text-gray-500'>City</label>
          <input
           type="text"
           className='input'
           placeholder='' 
           onChange={(e)=>update("location.city", e.target.value )}
           name="city"
           value={ intro?.location.city }
           />
         </div>
         {/* address */}
         <div className="grid">
          <label htmlFor="title" className='my-1 text-sm font-medium text-gray-500'>Address</label>
          <input
           type="text"
           className='input'
           placeholder='' 
           onChange={(e)=>update("location.address", e.target.value )}
           name="address"
           value={ intro?.location.address }
           />
         </div>
         
      </div>
    </div>
  )
}

export default IntroEdit