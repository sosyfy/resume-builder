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
          {/* socials  */}
          {socials?.map((social) => (
            <div className="flex gap-3 socials">
              <p className='py-1 text-xs font-medium'>{social.network}</p>
              <p className='py-1 text-xs font-medium text-blue-500'><a href={social.url} target="_blank" rel="noopener noreferrer">{social.userName}</a></p>
            </div>
          ))
          }

          {/* education */}
          <div className="education">
            <h1 className="py-2 text-sm font-semibold uppercase border-b-2 h1">Education</h1>
            {education?.map((edu, index)=>(
                <div className="py-2" key={index}>
                <p className='text-xs font-normal capitalize'>{edu.institution}</p>
                <p className='py-1 text-xs font-semibold'>{edu.studyArea}</p>
                <div className='text-xs font-normal'>{ parse(edu.courseSummary )}</div>
              </div>
            ))}
          </div>
          {/* skills */}
          <div className="skills">
            <h1 className="py-2 text-sm font-semibold uppercase border-b-2 h1">langauges</h1>
            <div className="py-2">
              <div className='text-xs font-normal'>{parse(languages)}</div>
            </div>
          </div>
          
          <div className="skills">
            <h1 className="py-2 text-sm font-semibold uppercase border-b-2 h1">tools</h1>
            <div className="py-2">
              <div className='text-xs font-normal'>{parse(tools)}</div>
            </div>
          </div>


        </div>
        <div className="col-span-7 px-2 py-4 whitespace-pre-wrap bg-slate-300">
          {/* summary */}
          <div className="summary">
            <h1 className="py-2 text-sm font-semibold text-gray-600 uppercase border-b-2 h1">Summary</h1>
            <div className="py-2">
              <div className='text-xs font-medium text-gray-600 break-words whitespace-pre-wrap'>{ parse(intro.summary) }</div>
            </div>
          </div>
          {/* experience */}
          <div className="experience">
            <h1 className="py-2 pt-4 text-sm font-semibold text-gray-600 uppercase border-b-2 h1">experience</h1>

            {companies?.map((com, index) => (
              <div className="py-2" key={index}>
                <h3 className='text-sm font-semibold text-black'>{com.position}</h3>
                <h3 className='pb-2 text-sm font-semibold text-blue-500'>{com.CompanyName} <span className='ml-8 text-xs font-bold text-gray-500'>{com.startDate}</span> - <span className='text-xs font-bold text-gray-500'>{com.endDate}</span></h3>
                <div className='text-xs font-medium text-gray-600 break-words whitespace-normal'>{parse(com.summary)}</div>
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