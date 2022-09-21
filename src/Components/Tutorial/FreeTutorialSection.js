import {React, Fragment, useState} from 'react';
import itemImage from '../../Assets/img/item.jpg';

import { useNavigate } from 'react-router';


const FreeTutorialSection = ()=>{
    let navigate = useNavigate();
    let [tutDetails, setTutDetails] = useState();


    const ShowDetails = ()=>{
        navigate("/project")
    }




    const detailTutorial = (id)=>{
        navigate('/tutorial')
    }


    return(
        <Fragment>

                <div class="container-fluid mt-3 p-3">
                    <div class="row d-flex justify-content-center">
                      <div class="my-2 text-center">
                        <h3 class="fw-bold text-success">Free <span style={{color:"red"}}>YouTube</span> Playlist</h3>
                        <hr/>
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
                            <hr/>
                            <span>Total Videos: 90</span> | <span>Based: Project</span>
                          </div>
                          <div class="card-footer">
                            <button onClick={detailTutorial.bind(this, 123456)} class="w-100 btn btn-success">Start Learning</button>
                          </div>
                        </div>
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
                            <hr/>
                            <span>Total Videos: 90</span> | <span>Based: Project</span>
                          </div>
                          <div class="card-footer">
                            <button class="w-100 btn btn-success">Start Learning</button>
                          </div>
                        </div>
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
                            <hr/>
                            <span>Total Videos: 90</span> | <span>Based: Project</span>
                          </div>
                          <div class="card-footer">
                            <button class="w-100 btn btn-success">Start Learning</button>
                          </div>
                        </div>
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
                            <hr/>
                            <span>Total Videos: 90</span> | <span>Based: Fundamentel</span>
                          </div>
                          <div class="card-footer">
                            <button class="w-100 btn btn-success">Start Learning</button>
                          </div>
                        </div>
                      </div>
                      
                      
                    

                    </div>
                  </div>




                {/* <!-- Modal --> */}
                <div class="modal fade" id="tutDetailModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {tutDetails}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>


            </Fragment>
    );
}


export default FreeTutorialSection;