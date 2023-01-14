import React from 'react'
import EducationEdit from '../../core/components/EducationEdit'
import ExperienceEdit from '../../core/components/ExperienceEdit'
import IntroEdit from '../../core/components/IntroEdit'
import ReferencesEdit from '../../core/components/ReferencesEdit'
import SkillsNoValue from '../../core/components/SkillsNoValue'
import SocialsEdit from '../../core/components/SocialsEdit'
import SummaryEdit from '../../core/components/SummaryEdit'
import { useIntro, useWork, useSocials, useEducation, useSkillsNoValue } from '../../stores/data.store'
import parse from 'html-react-parser';

function Sample() {
  const intro = useIntro(state => state.intro)
  const companies = useWork(state => state.companies)
  const languages = useSkillsNoValue(state => state.languages)
  const tools = useSkillsNoValue(state => state.tools)
  const socials = useSocials(state => state.socials)
  //  const references = useReferences(state => state.references )
  const education = useEducation(state => state.education)

  return (
    <div className='w-full'>
      <div className="grid grid-cols-12">
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
          {/* socials  */}
          {socials?.map((social) => (
            <div className="socials flex gap-3">
              <p className='text-xs font-medium py-1'>{social.network}</p>
              <p className='text-xs font-medium py-1 text-blue-500'><a href={social.url} target="_blank" rel="noopener noreferrer">{social.userName}</a></p>
            </div>
          ))
          }

          {/* education */}
          <div className="education">
            <h1 className="h1 uppercase font-semibold py-2 border-b-2 text-sm">Education</h1>
            {education?.map((edu, index)=>(
                <div className="py-2" key={index}>
                <p className='font-normal text-xs capitalize'>{edu.institution}</p>
                <p className='font-semibold text-xs py-1'>{edu.studyArea}</p>
                <div className='font-normal text-xs'>{ parse(edu.courseSummary )}</div>
              </div>
            ))}
          </div>
          {/* skills */}
          <div className="skills">
            <h1 className="h1 uppercase font-semibold py-2 border-b-2 text-sm">langauges</h1>
            <div className="py-2">
              <div className='font-normal text-xs'>{parse(languages)}</div>
            </div>
          </div>
          
          <div className="skills">
            <h1 className="h1 uppercase font-semibold py-2 border-b-2 text-sm">tools</h1>
            <div className="py-2">
              <div className='font-normal text-xs'>{parse(tools)}</div>
            </div>
          </div>


        </div>
        <div className="col-span-7 py-4 px-2 bg-slate-300 whitespace-pre-wrap">
          {/* summary */}
          <div className="summary">
            <h1 className="h1 uppercase  text-gray-600 font-semibold py-2 border-b-2 text-sm">Summary</h1>
            <div className="py-2">
              <div className='font-medium text-gray-600 text-xs whitespace-pre-wrap break-words'>{ parse(intro.summary) }</div>
            </div>
          </div>
          {/* experience */}
          <div className="experience">
            <h1 className="h1 uppercase pt-4 text-gray-600 font-semibold py-2 border-b-2 text-sm">experience</h1>

            {companies?.map((com, index) => (
              <div className="py-2" key={index}>
                <h3 className='font-semibold text-sm text-black'>{com.position}</h3>
                <h3 className='font-semibold text-sm pb-2 text-blue-500'>{com.CompanyName} <span className='text-xs ml-8 text-gray-500 font-bold'>{com.startDate}</span> - <span className='text-xs text-gray-500 font-bold'>{com.endDate}</span></h3>
                <div className='font-medium text-gray-600 text-xs break-words whitespace-normal'>{parse(com.summary)}</div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  )
}


export const editorsListSample = () => {
  return [
    <IntroEdit />,
    <SocialsEdit />,
    <EducationEdit />,
    <SummaryEdit />,
    <SkillsNoValue />,
    <ExperienceEdit />,
    <ReferencesEdit />
  ]
}


export default Sample