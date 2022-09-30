import React, {Fragment, useState, useEffect} from 'react';
import axios from "axios";
import {errorToast} from "../../Helpers/NotificationHelper";
import {Link, useNavigate} from "react-router-dom";


const TutorialListComponent = ()=>{
    let navigate = useNavigate();
    let [courses, setCourse] = useState([]);

    useEffect(()=>{
        let url = "http://127.0.0.1:8000/course/list/courses"
        axios.get(url)
            .then((res)=>{
                setCourse(res.data)
            })
            .catch((err)=>{
                if(err){
                    errorToast("Data can not load..!")
                }
            })
    },[])


    const tutorialDetail = (slug)=>{
        navigate('/tutorial/'+slug)
    }

    if(courses.length >0){
        return(
            <Fragment>
                <div className='container'>
                    <div className="my-2 text-left">
                        <h3 class="fw-bold text-success">Learn with Alfin</h3>
                        <hr style={{'width':'180px', 'margin-bottom':'-10px', 'color':'orangered'}}/>
                        <hr style={{'width':'150px', 'color':'orangered'}}/>
                    </div>
                    <div className='row'>

                        {
                            courses.map((course, index)=>{
                                if(course.type === 'free'){
                                    return(
                                        <div className="card w-100 m-2">
                                            <div className="card-body">
                                                <Link to=""><h5 className="card-title">{course.title} | <span className="badge bg-success mx-1 mb-1">{course.type}</span></h5></Link>

                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                <span className="mb-2">{course.created}</span><br/>
                                                <button onClick={tutorialDetail.bind(this, course.slug)} className="btn btn-primary btn-sm">Start</button>
                                                <a href="#" className="btn btn-danger btn-sm ml-1">From YouTube</a>
                                            </div>
                                        </div>
                                    )
                                }

                                if(course.type === 'paid'){
                                    return (
                                        <div className="card w-100 m-2">
                                            <div className="card-body">
                                                <Link to=""><h5 className="card-title">{course.title} | <span className="badge bg-danger mx-1">{course.type}</span></h5></Link>

                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                <span className="mb-2">{course.created}</span><br/>
                                                <button className="btn btn-primary btn-sm">Join Now</button>
                                            </div>
                                        </div>
                                    )
                                }


                            })
                        }


                    </div>
                </div>
            </Fragment>
        )
    }
    else{
        return (
            <Fragment>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="alert alert-danger" role="alert">
                                <h4>Tutorials</h4>
                                Data out of range...!
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default TutorialListComponent;