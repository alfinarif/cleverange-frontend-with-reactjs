import {React, Fragment, useState} from 'react';
import itemImage from '../../Assets/img/item.jpg';

import { useNavigate } from 'react-router-dom';


const ProjectSection = ()=>{
    let navigate = useNavigate();
    let [projectList, setProjectList] = useState()


    const ShowDetails = (id)=>{
        setProjectList(id)
    }


    return(
        <Fragment>

            <div class="container mt-3 p-3">
                <div class="row d-flex justify-content-start">
                    <div class="my-2 text-start">
                    <h3 class="fw-bold text-success">My Courses</h3>
                        <hr style={{width:"120px"}}/>
                        <hr style={{width:"90px"}}/>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-12 shadow rounded my-2 p-2">
                    <div class="card">
                        <div class="card-header">
                        <div class="text-center">
                            <img src="https://www.w3schools.com/css/rock600x400.jpg" class="rounded img-thumbnail"/>
                        </div>
                        </div>

                        <div class="card-body">
                        <h4 class="text-success">Authentication app with Django</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, eligendi ab.</p>
                        </div>
                        <div class="card-footer">
                        <button onClick={ShowDetails.bind(this, 234554)} data-bs-toggle="modal" data-bs-target="#projectDetailModal" class="w-100 btn btn-success">More Info</button>
                        </div>
                    </div>
                    </div>


                    
                    
                

                </div>
                </div>


                {/* <!-- Modal --> */}
                <div class="modal fade" id="projectDetailModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog w-150">
                        <div class="modal-content w-100">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <div className='container-fluid'>
                                    <div className='row d-flex justify-content-center'>
                                        <div className='col-lg-12 col-md-12 col-sm-12'>
                                            <img src={itemImage} class="card-img-top img-fluid rounded" alt="project-img"/>

                                            <div>
                                                <table className='table shadow-sm my-2'>
                                                    <thead className='bg-success'>
                                                        <tr>
                                                            <th className='text-white'>Used Technology</th>
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

                                            <div className='mt-4 text-justify text-wrap'>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum et harum, accusantium sed sint omnis asperiores, reprehenderit nam illo aliquam quam dolore dignissimos, sit vitae. Incidunt ad ratione similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum et harum, accusantium sed sint omnis asperiores, reprehenderit nam illo aliquam quam dolore dignissimos, sit vitae. Incidunt ad ratione similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum et harum, accusantium sed sint omnis asperiores, reprehenderit nam illo aliquam quam dolore dignissimos, sit vitae. Incidunt ad ratione similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum et harum, accusantium sed sint omnis asperiores, reprehenderit nam illo aliquam quam dolore dignissimos, sit vitae. Incidunt ad ratione similique?</p>
                                            </div>


                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal --> */}

            </Fragment>
    );
}


export default ProjectSection;