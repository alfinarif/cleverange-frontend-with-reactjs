import {React, Fragment} from 'react';
import alfin from '../../Assets/img/alfin.jpg';

const AboutSection = ()=>{
    return(
        <Fragment>

            <div className="bg-white py-5">
                <div className="container py-5">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 order-2 order-lg-1"><i
                            className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">About Author</h2>
                            <p className="font-italic text-muted mb-4 text-justify">Hello, this is Alfin Arif. I am a Mern Stack Developer and expert on Python Django. Web coding, learning new things, fixing coding problems, and helping others are things I enjoy to doing. with over 3+ years of experience in web design & development, I am strongly experienced in Wordpress, HTML5, CSS3, Bootstrap 4/5, JavaScript, ReactJs, NodeJs, ExpressJs, MongoDB, Python Django, Php core. my frontend code is fully responsive and backend start with analysis of application. So, let me know about your project, and let's start working together.</p>

                            <a href="https://www.linkedin.com/in/alfinarif" className="mt-2 btn btn-secondary w-100 px-5 rounded-pill shadow-sm">Learn More</a>
                        </div>

                        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                            <img src="https://cdn0.iconfinder.com/data/icons/occupation-002-1/64/programmer-programming-occupation-avatar-512.png" alt=""
                            className="img-fluid mb-4 mb-lg-0"/>
                        </div>
                    </div>

                </div>
            </div>

        </Fragment>
    );
}

export default AboutSection;