import React,{Fragment, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../Assets/img/cleverange.png';
import {getToken, getUserDetails} from "../../Helpers/SessionHelper";
import axios from "axios";
import {errorToast, successToast} from "../../Helpers/NotificationHelper";

const NavigationBar = ()=>{
    let navigate = useNavigate();

    let [numberOfNotific, setNumberOfNotific] = useState('0')

    const logoutUser = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('userDetails')
        window.location = '/loginUser'
    }

    const getCookie =(name)=> {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    useEffect(()=>{
        if(getUserDetails()){
            const profile = getUserDetails() // get all user data
            const csrftoken = getCookie('csrftoken');
            let url = "http://127.0.0.1:8000/notification/count";
            let dataBody = {
                email: profile['email']
            }
            axios.post(url, dataBody, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                }
            })
                .then((res)=>{
                    setNumberOfNotific(res.data.length)
                })
                .catch((err)=>{
                    errorToast("Notification API can not called!")
                })
        }else{
            setNumberOfNotific(0)
        }
    },[])

    const notificationHandler = ()=>{
        if(getUserDetails()){
            const profile = getUserDetails() // get all user data
            const csrftoken = getCookie('csrftoken');
            let url = "http://127.0.0.1:8000/notification/seen/all";
            let dataBody = {
                email: profile['email']
            }
            axios.post(url, dataBody, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                }
            })
                .then((res)=>{
                    navigate('/profile')
                })
                .catch((err)=>{
                    navigate('/profile')
                })
            navigate('/profile')
        }
    }



    if(getToken()){
        return(
            <Fragment>
                <section className="">
                    <div className="container">
                        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid">
                                <Link to="/" className="navbar-brand pl-2">
                                    <img className="mainLogo" src={logo}/>
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>

                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ms-md-auto gap-2 justify-content-end">
                                        <Link to="/">
                                            <li className="nav-item rounded">
                                            <span className="nav-link active" aria-current="page"><i
                                                className="bi bi-house-fill me-2"></i>Home</span>
                                            </li>
                                        </Link>

                                        <Link to="/alfin">
                                            <li className="nav-item rounded">
                                            <span className="nav-link active" aria-current="page"><i
                                                className="bi bi-house-fill me-2"></i>About Author</span>
                                            </li>
                                        </Link>
                                        {/*<Link to="/about">*/}
                                        {/*    <li className="nav-item rounded">*/}
                                        {/*    <span className="nav-link active" aria-current="page"><i*/}
                                        {/*        className="bi bi-house-fill me-2"></i>About</span>*/}
                                        {/*    </li>*/}
                                        {/*</Link>*/}
                                        {/*<Link to="/contact">*/}
                                        {/*    <li className="nav-item rounded">*/}
                                        {/*    <span className="nav-link active" aria-current="page"><i*/}
                                        {/*        className="bi bi-house-fill me-2"></i>Contact</span>*/}
                                        {/*    </li>*/}
                                        {/*</Link>*/}

                                        <li className="nav-item dropdown rounded">
                                            <a className="text-white nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                               role="button" data-bs-toggle="dropdown" aria-expanded="false"><i
                                                className="bi bi-person-fill me-2"></i>Profile</a>
                                            <ul className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="navbarDropdown">

                                                <Link to="/profile"><li><a className="dropdown-item" href="#">Settings</a></li></Link>
                                                <Link to="/profile/myCourses"><li><a className="dropdown-item" href="#">My Courses</a></li></Link>

                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li><a className="dropdown-item" style={{'cursor': 'pointer'}} onClick={logoutUser}>Logout</a></li>
                                            </ul>
                                        </li>


                                        <li className="nav-item rounded titlePointer position-relative" onClick={notificationHandler}>
                                            <span className="position-relative mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22"
                                                     fill="currentColor" className="bi bi-bell text-white mt-2 mr-1" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                                                </svg>
                                                <span
                                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2">
                                                {numberOfNotific}
                                                </span>
                                            </span>

                                        </li>


                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </section>
            </Fragment>
        );
    }

    else {
        return(
            <Fragment>
                <section className="">
                    <div className="container">
                        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid">
                                <Link to="/" className="navbar-brand pl-2">
                                    <img className="mainLogo" src={logo}/>
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>

                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ms-md-auto gap-2 justify-content-end">
                                        <Link to="/">
                                            <li className="nav-item rounded">
                                            <span className="nav-link active" aria-current="page"><i
                                                className="bi bi-house-fill me-2"></i>Home</span>
                                            </li>
                                        </Link>
                                        <Link to="/project">
                                            <li className="nav-item rounded">
                                            <span className="nav-link active" aria-current="page"><i
                                                className="bi bi-house-fill me-2"></i>Projects</span>
                                            </li>
                                        </Link>
                                        <Link to="/about">
                                            <li className="nav-item rounded">
                                            <span className="nav-link active" aria-current="page"><i
                                                className="bi bi-house-fill me-2"></i>About Author</span>
                                            </li>
                                        </Link>
                                        <Link to="/contact">
                                            <li className="nav-item rounded">
                                            <span className="nav-link active" aria-current="page"><i
                                                className="bi bi-house-fill me-2"></i>Contact</span>
                                            </li>
                                        </Link>


                                        <Link to="/loginUser" className="">
                                            <li className="nav-item rounded">
                                                <span className="nav-link active btn btn-danger btn-sm h-25" aria-current="page">LOGIN</span>
                                            </li>
                                        </Link>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default NavigationBar;