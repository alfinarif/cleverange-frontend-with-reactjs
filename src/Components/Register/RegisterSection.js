import {React, Fragment, useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {isEmptyField, isValidEmail, isMobileNumber} from '../../Helpers/ValidationHelper';
import { errorToast } from '../../Helpers/NotificationHelper';
import {userRegistrationAPI} from "../../ApiServices/ApiServices";
import LoaderHelper from "../../Helpers/LoaderHelper";


const RegisterSection = ()=>{
    let navigate = useNavigate();

    let firstName, lastName, github,emailAddress, phoneNumber, password = useRef();

    const RegisterHandler = ()=>{
        let first_name = firstName.value;
        let last_name = lastName.value;
        let github_username = github.value;
        let email_address = emailAddress.value;
        let phone_number = phoneNumber.value;
        let user_password = password.value;
        let profile_img = "";

        if(isEmptyField(first_name)){
            errorToast("First name is required")
        }else if(isEmptyField(last_name)){
            errorToast("Last name is required")
        }else if(isEmptyField(github_username)){
            errorToast("Github username is required")
        }else if(isEmptyField(email_address)){
            errorToast("Email address is required")
        }else if(isEmptyField(phone_number)){
            errorToast("Phone number is required")
        }else if(isEmptyField(user_password)){
            errorToast("Password is required")
        }else if(user_password.length <4){
            errorToast("Password must be more then or 4 digit")
        }else if(!isValidEmail(email_address)){
            errorToast("Email is not valid")
        }else if(!isMobileNumber(phone_number)){
            errorToast("Phone number is not valid")
        }
        else{
            // here will create account
            userRegistrationAPI(first_name, last_name, github_username, email_address, phone_number, user_password, profile_img)
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
                            <input ref={(input)=>firstName=input} className="form-control" type="text" placeholder="First name"/>
                        </div>
                        <div className="my-3">
                            <input ref={(input)=>lastName=input} className="form-control" type="text" placeholder="Last name"/>
                        </div>
                        <div className="my-3">
                            <input ref={(input)=>github=input} className="form-control" type="text" placeholder="GitHub username"/>
                        </div>
                        <div className="my-3">
                            <input ref={(input)=>emailAddress=input} className="form-control" type="text" placeholder="Email address"/>
                        </div>
                        <div className="my-3">
                            <input ref={(input)=>phoneNumber=input} className="form-control" type="text" placeholder="Phone number"/>
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