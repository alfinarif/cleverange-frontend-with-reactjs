import React,{Fragment} from 'react';
import NavigationBar from '../../Components/Common/NavigationBar';
import ProjectDetailComponent from "../../Components/Project/ProjectDetailComponent";

const ProjectDetailPage = ()=>{
    return(
        <Fragment>
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <ProjectDetailComponent/>
        </Fragment>
    );
}

export default ProjectDetailPage;