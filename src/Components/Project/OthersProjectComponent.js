import React,{Fragment, useEffect, useState} from "react";
import {errorToast} from "../../Helpers/NotificationHelper";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const OthersProjectComponent = ()=>{
    let navigate = useNavigate();
    let [projects, setProjects] = useState([]);

    useEffect(()=>{
        let url = "http://127.0.0.1:8000/project/list/others";
        axios.get(url)
            .then((res)=>{
                setProjects(res.data)
            })
            .catch((err)=>{
                if (err){
                    errorToast("Data can not load..!")
                }
            })
    }, [])

    const projectDetail =(slug)=>{
        window.location = '/project/'+slug;
    }


    return(
        <Fragment>
            <div className="widget widget-latest-post">
                <div className="widget-title">
                    <h3>Others Projects</h3>
                </div>
                <div className="widget-body">

                    {
                        projects.map((project, index)=>{
                            return(
                                <div className="latest-post-aside media">
                                    <div className="lpa-left media-body">
                                        <div className="lpa-title">
                                            <h5 className="titlePointer" onClick={projectDetail.bind(this, project.slug)}>{project.title}</h5>
                                        </div>
                                        <div className="lpa-meta">
                                            <a className="date" href="#">
                                                {project.created}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="lpa-right">
                                        <a href="#">
                                            <img src={project.img} title=""
                                                 alt="project_img"/>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </Fragment>
    )
}


export default OthersProjectComponent;

