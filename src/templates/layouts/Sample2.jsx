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
      <div className="col-span-7 py-4 px-2 bg-slate-300 whitespace-pre-wrap">
         {/* summary */}
         <div className="summary">
            <h1 className="h1 uppercase  text-gray-600 font-semibold py-2 border-b-2 text-sm">Summary</h1>
            <div className="py-2">
              <p className='font-medium text-gray-600 text-xs'>{intro?.summary}</p>
            </div>
         </div>
         {/* experience */}
         <div className="experience">
            <h1 className="h1 uppercase pt-4 text-gray-600 font-semibold py-2 border-b-2 text-sm">experience</h1>

            {companies?.map((com,index)=>(
              <div className="py-2" key={index}>
                <h3 className='font-semibold text-sm text-black'>{com.position}</h3>
                <h3 className='font-semibold text-sm text-blue-500'>{com.CompanyName} <span className='text-xs mr-4 text-gray-500 font-bold'>{com.startDate}</span> <span className='text-xs mr-4 text-gray-500 font-bold'>{com.endDate}</span></h3>
                <p className='font-medium text-gray-600 text-xs break-words whitespace-normal'>{com.summary}</p>
              </div>
            ))}
            
         </div>

        </div>
        {/* left section  */}
        <div className="col-span-5 bg-orange-300 break-words px-2 py-4">
          {/* title  */}
          <div className="title">
               <h1 className="text-xl font-semibold uppercase break-words leading-4">{intro?.firstname} {intro?.lastname}</h1>
               <h4 className='text-base uppercase py-2'>{intro?.jobTitle}</h4>
          </div>

          {/* contacts  */}
          <div className="contacts">
             <p className='text-xs font-medium py-1'>{intro?.phone}</p>
             <p className='text-xs font-medium py-1'>{intro?.email}</p>
          </div>

          {/* education */}
          <div className="education">
            <h1 className="h1 uppercase font-semibold py-2 border-b-2 text-sm">Education</h1>
            <div className="py-2">
              <p className='font-normal text-xs'>names of school</p>
              <p className='font-semibold text-xs py-1'>course</p>
              <p className='font-normal text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem in beatae mollitia! Reiciendis quia quibusdam itaque esse vel repellat architecto commodi, sequi praesentium rerum labore aliquam numquam delectus cumque!</p>
            </div>
          </div>
          {/* skills */}
          <div className="skills">
            <h1 className="h1 uppercase font-semibold py-2 border-b-2 text-sm">Skills</h1>
            <div className="py-2">
              <p className='font-normal text-xs'>skill</p>
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