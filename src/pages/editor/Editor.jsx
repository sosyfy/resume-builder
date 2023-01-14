import React, { useRef } from 'react'
import EditorContainer from '../../core/widgets/EditorContainer'
import AllTemplates from '../../templates'
import { Link, useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";



function Editor() {
  const templates = AllTemplates()
  const { id } = useParams()

  const template = templates.filter((temp) => temp.id == id)[0]

  const submit = async () => {
    // handlePrint()
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
    <main>
      <header className='sticky top-0 z-50 shadow-lg'>
        <nav className="px-4 pt-6 pb-2 bg-white border-gray-200 lg:px-6 dark:bg-gray-800">
          <div className="flex flex-wrap items-center justify-center max-w-screen-xl mx-auto">
            {/* LOGO  */}
            <Link to="/" className="flex items-center px-3 py-1 text-purple-600 rounded">
              <span className="self-center text-xl font-semibold uppercase whitespace-nowrap dark:text-white">Resume gen</span>
            </Link>
          </div>
        </nav>
      </header>
      <section className='relative grid max-w-screen-xl min-h-screen grid-cols-1 mx-auto md:grid-cols-12'>
        <div className="p-6 bg-white md:col-span-6 lg:p-12">
          <EditorContainer editorsList={template.editorsList} submit={submit} />
        </div>

        <div ref={componentRef} className="items-center h-screen px-4 py-4 my-auto md:col-span-6">
          {template.template}
        </div>
      </section>
    </main>
  )



}

export default Editor