import React, {Fragment, useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {isEmptyField, isValidEmail} from '../../Helpers/ValidationHelper';
import { errorToast } from '../../Helpers/NotificationHelper';
import {userRegistrationAPI} from "../../ApiServices/ApiServices";


const RegisterSection = ()=>{
    let navigate = useNavigate();

    let emailAddress, password = useRef();

    const RegisterHandler = ()=>{
        let email_address = emailAddress.value;
        let user_password = password.value;

        if(isEmptyField(email_address)){
            errorToast("Email address is required")
        }else if(isEmptyField(user_password)){
            errorToast("Password is required")
        }else if(user_password.length <4){
            errorToast("Password must be more then or 4 digit")
        }else if(!isValidEmail(email_address)){
            errorToast("Email is not valid")
        }
        else{
            // here will create account
            userRegistrationAPI(email_address, user_password)
                .then((result)=>{
                    if(result === true){
                        navigate('/loginUser')
                    }
                })
        }



    }// end registerHandler



    return(
        <Fragment>
            <div className="container mt-3">
                <div className="row d-flex justify-content-center p-1">
                    <div className="col-lg-6 col-md-6 col-sm-12 my-1 p-3 shadow rounded">
                        <div className="formTitle text-center">
                            <h3 className="text-success fw-bold text-uppercase">Sign Up</h3>
                        </div>

                        <div className="my-3">
                            <input ref={(input)=>emailAddress=input} className="form-control" type="text" placeholder="Email address"/>
                        </div>
                        <div className="my-3">
                            <input ref={(input)=>password=input} className="form-control" type="password" placeholder="Password"/>
                        </div>
                        <div className="my-3 mx-2">
                            <Link to="/loginUser"><span>Have an account?</span></Link>
                        </div>

                        <div className="btnSubmit my-2">
                            <button onClick={RegisterHandler} className="btn btn-success btn-small w-100">Create an account</button>
                        </div>
                    </div>


                </div>
            </div>
        </Fragment>
    )
}

export default RegisterSection;