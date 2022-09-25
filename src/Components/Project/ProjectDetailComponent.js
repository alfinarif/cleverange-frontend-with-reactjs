import React,{ Fragment, useState, useEffect } from "react";
import '../../Assets/css/projectDetail.css';
import axios from "axios";
import {errorToast} from "../../Helpers/NotificationHelper";
import {useParams} from "react-router";

const ProjectDetailComponent = ()=>{
    const params = useParams();
    const [projectDetail, setProjectDetail] = useState([]);
    const [category, setCategory] = useState([]);
    const [stack, setStack] = useState([]);

    useEffect(()=>{
        let url = "http://127.0.0.1:8000/project/list/detail/"+params.id;
        axios.get(url)
            .then((res)=>{
                setProjectDetail(res.data)
                setCategory(res.data['category'])
                setStack(res.data['stack'])

            })
            .catch((err)=>{
                errorToast('Server can not load data..!')
            })
    },[])

    if(projectDetail){
        return(
            <Fragment>
                <div className="blog-single gray-bg">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-8 m-15px-tb">
                                <article className="article">
                                    <div className="article-img">
                                        <img src={projectDetail.img} title="" alt=""/>
                                    </div>
                                    <div className="article-title">
                                        <h6><a href="#">{category.title}</a></h6>

                                        <h2>{projectDetail.title}</h2>
                                        <div className="media">
                                            <div className="media-body">
                                                <span>{projectDetail.created}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="article-content">
                                        <p>{projectDetail.sort_des}</p>
                                        {/*<blockquote>*/}
                                        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod*/}
                                        {/*        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim*/}
                                        {/*        veniam.</p>*/}
                                        {/*    <p className="blockquote-footer">Someone famous in <cite title="Source Title">Dick*/}
                                        {/*        Grayson</cite></p>*/}
                                        {/*</blockquote>*/}
                                        <p>{projectDetail.full_des}</p>
                                    </div>
                                    <div className="nav tag-cloud">
                                        {
                                            stack.map((tech, index)=>{
                                                return(
                                                    <a className="text-white">{tech.title}</a>
                                                )
                                            })
                                        }

                                    </div>
                                </article>

                            </div>



                            <div className="col-lg-4 m-15px-tb blog-aside">

                                <div className="widget widget-author">
                                    <div className="widget-title">
                                        <h3>Author</h3>
                                    </div>
                                    <div className="widget-body">
                                        <div className="media align-items-center">
                                            <div className="avatar">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" title=""
                                                     alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h6>Hello, I'm<br/> Alfin Arif</h6>
                                            </div>
                                        </div>
                                        <p>I design and develop services for customers of all sizes, specializing in
                                            creating stylish, modern websites, web services and online stores</p>
                                    </div>
                                </div>



                                <div className="widget widget-latest-post">
                                    <div className="widget-title">
                                        <h3>Latest Projects</h3>
                                    </div>
                                    <div className="widget-body">
                                        <div className="latest-post-aside media">
                                            <div className="lpa-left media-body">
                                                <div className="lpa-title">
                                                    <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                                </div>
                                                <div className="lpa-meta">
                                                    <a className="name" href="#">
                                                        Rachel Roth
                                                    </a>
                                                    <a className="date" href="#">
                                                        26 FEB 2020
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="lpa-right">
                                                <a href="#">
                                                    <img src="https://via.placeholder.com/400x200/FFB6C1/000000" title=""
                                                         alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="latest-post-aside media">
                                            <div className="lpa-left media-body">
                                                <div className="lpa-title">
                                                    <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                                </div>
                                                <div className="lpa-meta">
                                                    <a className="name" href="#">
                                                        Rachel Roth
                                                    </a>
                                                    <a className="date" href="#">
                                                        26 FEB 2020
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="lpa-right">
                                                <a href="#">
                                                    <img src="https://via.placeholder.com/400x200/FFB6C1/000000" title=""
                                                         alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="latest-post-aside media">
                                            <div className="lpa-left media-body">
                                                <div className="lpa-title">
                                                    <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                                </div>
                                                <div className="lpa-meta">
                                                    <a className="name" href="#">
                                                        Rachel Roth
                                                    </a>
                                                    <a className="date" href="#">
                                                        26 FEB 2020
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="lpa-right">
                                                <a href="#">
                                                    <img src="https://via.placeholder.com/400x200/FFB6C1/000000" title=""
                                                         alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
    else{
        return (
            <Fragment>
                <div className="alert alert-danger" role="alert">
                    Data out of range...!
                </div>
            </Fragment>
        )
    }
}

export default ProjectDetailComponent;