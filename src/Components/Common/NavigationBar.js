import React,{Fragment} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../Assets/img/cleverange.png';
import {getToken} from "../../Helpers/SessionHelper";

const NavigationBar = ()=>{
    let navigate = useNavigate();

    const logoutUser = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('userDetails')
        window.location = '/loginUser'
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

                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li><a className="dropdown-item" style={{'cursor': 'pointer'}} onClick={logoutUser}>Logout</a></li>
                                            </ul>
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
                                                className="bi bi-house-fill me-2"></i>About</span>
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