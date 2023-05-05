import React from 'react'
import ExperienceEdit from '../../core/components/ExperienceEdit'
import IntroEdit from '../../core/components/IntroEdit'
import SummaryEdit from '../../core/components/SummaryEdit'
import { useIntro ,useWork } from '../../stores/data.store'


function Sample() {
   const intro = useIntro(state => state.intro )
   const companies = useWork(state => state.companies )
   
  return (
    <div className='w-full'>
      <div className="grid grid-cols-12">
      <div className="col-span-7 px-2 py-4 whitespace-pre-wrap bg-slate-300">
         {/* summary */}
         <div className="summary">
            <h1 className="py-2 text-sm font-semibold text-gray-600 uppercase border-b-2 h1">Summary</h1>
            <div className="py-2">
              <p className='text-xs font-medium text-gray-600'>{intro?.summary}</p>
            </div>
         </div>
         {/* experience */}
         <div className="experience">
            <h1 className="py-2 pt-4 text-sm font-semibold text-gray-600 uppercase border-b-2 h1">experience</h1>

            {companies?.map((com,index)=>(
              <div className="py-2" key={index}>
                <h3 className='text-sm font-semibold text-black'>{com.position}</h3>
                <h3 className='text-sm font-semibold text-blue-500'>{com.CompanyName} <span className='mr-4 text-xs font-bold text-gray-500'>{com.startDate}</span> <span className='mr-4 text-xs font-bold text-gray-500'>{com.endDate}</span></h3>
                <p className='text-xs font-medium text-gray-600 break-words whitespace-normal'>{com.summary}</p>
              </div>
            ))}
            
         </div>

        </div>
        {/* left section  */}
        <div className="col-span-5 px-2 py-4 break-words bg-orange-300">
          {/* title  */}
          <div className="title">
               <h1 className="text-xl font-semibold leading-4 uppercase break-words">{intro?.firstname} {intro?.lastname}</h1>
               <h4 className='py-2 text-base uppercase'>{intro?.jobTitle}</h4>
          </div>

          {/* contacts  */}
          <div className="contacts">
             <p className='py-1 text-xs font-medium'>{intro?.phone}</p>
             <p className='py-1 text-xs font-medium'>{intro?.email}</p>
          </div>

          {/* education */}
          <div className="education">
            <h1 className="py-2 text-sm font-semibold uppercase border-b-2 h1">Education</h1>
            <div className="py-2">
              <p className='text-xs font-normal'>names of school</p>
              <p className='py-1 text-xs font-semibold'>course</p>
              <p className='text-xs font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem in beatae mollitia! Reiciendis quia quibusdam itaque esse vel repellat architecto commodi, sequi praesentium rerum labore aliquam numquam delectus cumque!</p>
            </div>
          </div>
          {/* skills */}
          <div className="skills">
            <h1 className="py-2 text-sm font-semibold uppercase border-b-2 h1">Skills</h1>
            <div className="py-2">
              <p className='text-xs font-normal'>skill</p>
            </div>
          </div>


        </div>

      
      </div>
    </div>
  )
}


export const editorsListSample2 = ()=>{
  return [
    <SummaryEdit />,
    <ExperienceEdit />,
    <IntroEdit />,
  ]
}


export default Sample