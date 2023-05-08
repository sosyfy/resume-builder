
import React from 'react'
import EducationEdit from '../../core/components/EducationEdit'
import ExperienceEdit from '../../core/components/ExperienceEdit'
import IntroEdit from '../../core/components/IntroEdit'
import SkillsNoValue from '../../core/components/SkillsNoValue'
import SummaryEdit from '../../core/components/SummaryEdit'
import { useIntro, useWork, useEducation, useSkillsNoValue } from '../../stores/data.store'
import parse from 'html-react-parser';



const Template2 = () => {

    const intro = useIntro(state => state.intro)
    const companies = useWork(state => state.companies)
    const languages = useSkillsNoValue(state => state.languages)
    const tools = useSkillsNoValue(state => state.tools)
    const education = useEducation(state => state.education)



    return (
        <div className="relative bg-white w-full overflow-hidden text-left text-[0.75rem] text-black font-mulish">
            <div className="grid w-full grid-cols-5 gap-10 px-6 mt-8">

                <div className=" col-span-3 flex flex-col items-start justify-start text-[1.75rem] text-blue font-arima-madurai">
                    <b className="relative">{intro?.firstname} {intro?.lastname}</b>
                    <div className="relative text-[0.75rem] font-mulish text-black">
                        {intro?.jobTitle}
                    </div>
                </div>
                <div className=" col-span-2 self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                    <b className="relative">Contact</b>
                    <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[0.63rem]">
                        <div
                            className="relative [text-decoration:underline] leading-[1rem] text-[inherit]"
                        >
                            {intro?.email}
                        </div>
                        <div className="relative leading-[1rem]">{intro?.phone}</div>
                    </div>
                </div>
            </div>
            <div className="grid w-full grid-cols-5 gap-10 px-6 mt-8">
                <div className="col-span-3 flex flex-col items-start justify-start gap-[1.75rem]">
                    <i className="relative leading-[1.13rem] inline-block">
                        {parse(intro.summary)}
                    </i>

                    <div className="flex flex-col items-start justify-start gap-[1rem]">
                        <b className="relative">Work Experience</b>
                        <div className="flex flex-col items-start justify-start gap-[1rem] text-blue">
                            {companies?.map((com, index) => (
                                <div key={index} className=" flex flex-col items-start justify-start gap-[0.75rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                                        <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem]">
                                            <div className="relative font-semibold">{com.CompanyName}</div>
                                            <div className="relative text-black">{com.position}</div>
                                        </div>
                                        <i className="self-stretch relative text-[0.5rem] tracking-[0.02em] uppercase text-black opacity-[0.8]">
                                            {com.startDate} - {com.endDate}
                                        </i>
                                    </div>
                                    <div className="self-stretch relative text-[inherit] leading-[1rem] font-inherit text-grey">
                                        <div className="self-stretch relative text-[inherit] leading-[1rem] font-inherit text-grey">
                                            {parse(com.summary)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="flex flex-col items-start justify-start gap-[1rem]">
                        <b className="relative">Education</b>
                        <div className="flex flex-col items-start justify-start gap-[1rem] text-blue">
                            {education?.map((edu, index) => (

                                <div key={index} className="flex flex-col items-start justify-start gap-[0.75rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                                        <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem]">
                                            <div className="relative font-semibold">
                                                {edu.institution}
                                            </div>
                                            <div className="relative text-black">{edu.studyArea}</div>
                                        </div>
                                        <i className="self-stretch relative text-[0.5rem] tracking-[0.02em] text-black opacity-[0.8]">
                                            {edu.startDate} - {edu.endDate}

                                        </i>
                                    </div>
                                    <div className="self-stretch relative text-[inherit] leading-[1rem] font-inherit text-grey">
                                        <div className='mt-3 text-xs font-normal'>{parse(edu.courseSummary)}</div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
                <div className="col-span-2 pr-12 flex flex-col items-start justify-start gap-[1.75rem]">

                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                        <b className="relative">Skills</b>
                        <div className="self-stretch flex flex-col items-start justify-start text-[inherit] text-grey font-inherit">
                            <div className="self-stretch relative leading-[1rem]">
                                <div className="py-2">
                                    <div className='text-xs font-normal'>{parse(languages)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                        <b className="relative">Tools</b>
                        <div className="self-stretch flex flex-col items-start justify-start text-[inherit] text-grey font-inherit">
                            <div className="self-stretch relative leading-[1rem]">
                                <div className="py-2">
                                    <div className='text-xs font-normal'>{parse(tools)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export const editorsListTemplate2 = () => {
    return [
        <IntroEdit />,
        <SummaryEdit />,
        <ExperienceEdit />,
        <EducationEdit />,
        <SkillsNoValue />,
    ]
}

export default Template2;
