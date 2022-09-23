import React, {Fragment, useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {errorToast} from "../../Helpers/NotificationHelper";


const ProjectListComponent = ()=>{

    let [projectList, setProject] = useState([])

    useEffect(()=>{
        let url = 'http://127.0.0.1:8000/project/list/active'
        axios.get(url)
            .then(res=>{
                setProject(res.data)
            })
            .catch(err=>{
                if(err){
                    errorToast("Server can't load data..!")
                }
            })
    },[])


    const projectDetail =(id)=>{
        window.location = '/project/detail/'+id
    }


    if (projectList.length >0){
        return(
            <Fragment>
                <div className='container'>
                    <div className="my-2 text-left">
                        <h3 className="fw-bold text-success">Completed Projects</h3>
                        <hr style={{'width':'180px', 'margin-bottom':'-10px', 'color':'orangered'}}/>
                        <hr style={{'width':'150px', 'color':'orangered'}}/>
                    </div>
                    <div className='row'>

                        {
                            projectList.map((project, index)=>{
                                return(
                                    <div className="card w-100 m-2">
                                        <div className="card-body">
                                            <Link to=""><h5 className="card-title">{project.title}</h5></Link>
                                            <span className="badge bg-secondary">{project['category'].title}</span>
                                            <p className="card-text">{project.sort_des}</p>

                                            {
                                                project['stack'].map((tech, index)=>{
                                                    return(
                                                        <span className="badge bg-secondary mx-1">{tech.title}</span>
                                                    )
                                                })
                                            }
                                            <br/>
                                            <br/>
                                            <button onClick={projectDetail.bind(this, project.id)} className="btn btn-primary btn-sm mx-2">Details</button>
                                            <a href={project.github_url} className="btn btn-danger btn-sm">GitHub</a>
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
    else {
        return (
            <Fragment>
                <div className="alert alert-danger" role="alert">
                    Data out of range...!
                </div>
            </Fragment>
        )
    }

}

export default ProjectListComponent;