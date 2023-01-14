import Sample, { editorsListSample } from "./layouts/Sample";
import Sample2, { editorsListSample2 } from "./layouts/Sample2";


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
        }
    ]
}


export default AllTemplates 