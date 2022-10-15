import React, {Fragment, useState, useEffect} from 'react';
import axios from "axios";
import {errorToast} from "../../Helpers/NotificationHelper";
import {Link, useNavigate} from "react-router-dom";
import itemImage from "../../Assets/img/item.jpg";
import PaymentComponent from "../../payment/PaymentComponent";


const TutorialListComponent = ()=>{
    let navigate = useNavigate();
    let [courses, setCourse] = useState([]);
    let [courseDetail, setCourseDetail] = useState('');

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

    const ShowDetails = (course)=>{
        setCourseDetail(course)
    }

    const redirectToPayment = (course)=>{
        localStorage.setItem('course_id', course.id)
        window.location = '/course/'+course.slug+'/payment';
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
                                                <h5 onClick={tutorialDetail.bind(this, course.slug)} className="card-title titlePointer">{course.title} | <span className="badge bg-success mx-1 mb-1">{course.type}</span></h5>

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
                                                <button onClick={ShowDetails.bind(this, course)} data-bs-toggle="modal"
                                                        data-bs-target="#projectDetailModal"
                                                        className="btn btn-primary btn-sm">Join Now
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }


                            })
                        }


                    </div>
                </div>


                {/* <!-- Modal --> */}
                <div class="modal fade" id="projectDetailModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog w-150">
                        <div class="modal-content w-100">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{courseDetail.title}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <div className='container-fluid'>
                                    <div className='row d-flex justify-content-center'>
                                        <div className='col-lg-12 col-md-12 col-sm-12'>
                                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--rAk2-3Xf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/gz5xantp1vycu7ueleh4.jpg" class="card-img-top img-fluid rounded" alt="project-img"/>

                                            <div className='mt-4 text-justify text-wrap'>
                                                <p>আপনি শুরু করার আগে আমাকে এই কোর্স সম্পর্কে আপনাকে ব্যাখ্যা করতে দিন।
                                                    হাই আলফিন এখানে, আমরা পাইথনের মৌলিক বিষয়গুলি শিখতে যাচ্ছি যা ফ্রেমওয়ার্ক বোঝা বা শেখার জন্য খুবই গুরুত্বপূর্ণ,
                                                    যদি মৌলিক ধারণাটি পরিষ্কার না হয় তবে কাঠামো আরও কঠিন হবে,
                                                    তাই আমরা ভিক্ষা থেকে শুরু করতে যাচ্ছি</p>
                                            </div>

                                            <div>
                                                <table className='table shadow-sm my-2'>
                                                    <thead className='bg-info'>
                                                    <tr>
                                                        <th className='text-white'>What technology used on</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Html5</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Css3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bootstrap</td>
                                                    </tr>
                                                    <tr>
                                                        <td>ReactJs</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                                <button onClick={redirectToPayment.bind(this, courseDetail)} className="btn btn-success w-100">Go For Payment</button>

                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal --> */}


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