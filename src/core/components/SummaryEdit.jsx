import React from 'react'
import shallow from 'zustand/shallow';
import { useIntro } from '../../stores/data.store';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function SummaryEdit() {
  const intro = useIntro((state) => state.intro);
  const [update] = useIntro(
    (state) => [state.update],
    shallow
  );


  return (
    <div className='grid'>
      {/* title */}
      <div>
        <h1 className="text-2xl font-bold">Proffessional Summary</h1>
        <p className="text-gray-400 leading-5">
          Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.
        </p>
      </div>
      {/* text Area */}
      <div className='min-w-full mt-4'>
        <ReactQuill
          theme="snow"
          style={{ width: "inherit" }}
          className=' text-gray-600 bg-gray-200 min-h-[inherit]'
          value={intro?.summary}
          onChange={(value) => update("summary", value)}
        />
      </div>
    </div>
  )
}

export default SummaryEdit