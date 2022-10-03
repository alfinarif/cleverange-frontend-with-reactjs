import React,{Fragment} from "react";
import NavigationBar from "../../../Components/Common/NavigationBar";
import CreateProjectComponent from "../../../Components/Dashboard/Project/CreateProjectComponent";



const CreateProjectPage = ()=>{
    return(
        <Fragment>
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <CreateProjectComponent/>
        </Fragment>
    )
}

export default CreateProjectPage;