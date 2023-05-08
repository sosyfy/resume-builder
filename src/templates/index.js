import Sample, { editorsListSample } from "./layouts/Sample";
import Sample2, { editorsListSample2 } from "./layouts/Sample2";
import Template1, { editorsListTemplate1 } from "./layouts/Template1";
import Template2, { editorsListTemplate2 } from "./layouts/Template2";


const AllTemplates = ( )=>{
    return [
        {   
            id:1,
            template: <Sample />,
            editorsList: editorsListSample() 
        },

        {   
            id:2,
            template: <Sample2 />,
            editorsList: editorsListSample2() 
        },

        {   
            id:3,
            template: <Template1 />,
            editorsList: editorsListTemplate1() 
        },
        {   
            id:4,
            template: <Template2 />,
            editorsList: editorsListTemplate2() 
        },
    ]
}


export default AllTemplates 