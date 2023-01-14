import React, { useEffect } from 'react'
import { useActiveEditor, useUrl } from '../../stores/settings.store'
import shallow from 'zustand/shallow'
import { useLocation } from "react-router-dom"



function EditorContainer({ editorsList=[], submit }) {
    let location = useLocation()
    const [activeTab , setActiveTab] = useActiveEditor((state)=> [state.activeTab,state.setActiveTab,], shallow)
    const [url , setUrl] = useUrl((state)=> [state.url,state.setUrl,], shallow)

  
    useEffect(() => {
      if ( url !== location.pathname ){
        setActiveTab(0);
        setUrl(location.pathname)
      } 
        
    }, [ location.pathname])

    useEffect(()=>{ window.scroll(0 , 0)},[activeTab])
    
    const handlePrev = ()=>{
        if ( activeTab > 0){
            setActiveTab( activeTab - 1) 
        }
    }

    const handleNext = ()=>{
      if ( activeTab < editorsList?.length-1 ){
          setActiveTab( activeTab + 1) 
      } 
  }


  return (
    <section className='w-full'>
        <div>

        { editorsList[activeTab] } 
        </div>
        { editorsList?.length > 0 &&
        <div className='flex justify-end gap-4 mt-4'>
       { activeTab > 0 && 
       <button 
       onClick={handlePrev} 
       className="inline-flex items-center justify-center px-6 py-2 mr-3 text-base font-medium text-center text-white bg-indigo-700 rounded-lg active:outline-none focus:outline-none active:ring-0 lg:ml-0 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
       >Back</button>
       }
       { activeTab !== editorsList?.length - 1 &&
         <button 
         onClick={handleNext}
         className="inline-flex items-center justify-center px-6 py-2 text-base font-medium text-center text-white bg-indigo-700 rounded-lg focus:outline-none lg:ml-0 hover:bg-primary-800 focus:ring-0 focus:ring-primary-300 dark:focus:ring-primary-900 active:outline-none active:ring-0"
         >Next and Save</button>
       }
       { activeTab === editorsList?.length - 1 &&
         <button 
         onClick={submit}
         className="inline-flex items-center justify-center px-6 py-2 text-base font-medium text-center text-white transition-all duration-300 ease-in-out bg-green-500 rounded-lg focus:outline-none lg:ml-0 hover:bg-green-400 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 active:outline-none active:ring-0"
         >Submit</button>
       }
      
        </div>
        }
    </section>
  )
}

export default EditorContainer