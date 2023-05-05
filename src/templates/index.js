import Sample, { editorsListSample } from "./layouts/Sample";
import Sample2, { editorsListSample2 } from "./layouts/Sample2";
import Template1, { editorsListTemplate1 } from "./layouts/Template1";


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
    ]
}


export default AllTemplates 