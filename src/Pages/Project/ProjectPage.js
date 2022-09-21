import {React, Fragment} from 'react';
import NavigationBar from '../../Components/Common/NavigationBar';
import ProjectSection from '../../Components/Project/ProjectSection';

const ProjectPage = ()=>{
    return(
        <Fragment>
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <ProjectSection/>
        </Fragment>
    );
}

export default ProjectPage;