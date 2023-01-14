import React, { useEffect, useRef } from 'react'
import EditorContainer from '../../core/widgets/EditorContainer'
import AllTemplates from '../../templates'
import { useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf"; 
import { useActiveEditor } from '../../stores/settings.store';
import shallow from 'zustand/shallow';


function Editor() {
  const templates = AllTemplates()
  const { id } = useParams()
 
  const template = templates.filter((temp) => temp.id == id )[0]
  const [activeTab , setActiveTab] = useActiveEditor((state)=> [state.activeTab,state.setActiveTab,], shallow)
 

  const submit = async()=>{
    // handlePrint()
    console.log(componentRef.current);
    const canvas = await html2canvas(componentRef.current);
    const dataURL = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(dataURL, 'JPEG', 0, 0);
    pdf.save("download.pdf");
    // downloadjs(dataURL, 'resume.png', 'image/png');
  }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  return (
    <section className='grid grid-cols-1 md:grid-cols-12 relative min-h-screen max-w-screen-xl mx-auto'>

      <div className="md:col-span-6 p-6 lg:p-12 bg-white">
       <EditorContainer editorsList={ template.editorsList}  submit={submit}/> 
      </div>

      <div ref={componentRef}  className="md:col-span-6 items-center h-screen py-4 px-4 my-auto">
        { template.template }
      </div>
    </section>
  )



}

export default Editor