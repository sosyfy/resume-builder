import React, { useEffect, useState } from 'react'
import shallow from 'zustand/shallow';
import { useSkillsNoValue } from '../../stores/data.store';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function SkillsNoValue() {
 
 

  const [update, languages, tools] = useSkillsNoValue(
    (state) => [ state.update, state.languages, state.tools],
    shallow
  );

  const [lanValue, setLanValue] = useState(languages);
  const [toolsValue, setToolsValue] = useState(tools);

  
  useEffect(()=>{
    handleLanChange()
    handleToolsChange()
  },[lanValue, toolsValue])
  

 const handleLanChange = ()=> update("languages", lanValue)
 const handleToolsChange = ()=> update("tools", toolsValue)

  return (
    <div className='grid'>
      {/* title */}
      <div className=''>
        <h1 className="text-2xl font-bold">Langauges and tools </h1>
        <p className="text-gray-400 leading-5">
          Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.
        </p>
      </div>
      {/* text Area */}
      <h2 className='py-2 text-xl font-bold'>Langauges</h2>
      <div className='w-full mt-2'>
      <ReactQuill theme="snow" style={{ height : "200px" }} className='mb-4 pb-10 text-gray-600 bg-gray-200' value={lanValue} onChange={setLanValue}/>
      </div>
      <h2 className='py-2 text-xl font-bold'>Tools</h2>
      <div className='w-full mt-2 '>
       <ReactQuill theme="snow" style={{ height : "200px" }} className='mb-4 pb-10 text-gray-600 bg-gray-200' value={toolsValue} onChange={setToolsValue}/>
      </div>
    </div>
  )
}

export default SkillsNoValue