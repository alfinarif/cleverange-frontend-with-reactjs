import axios from "axios";
import {errorToast, successToast} from "../Helpers/NotificationHelper";

import store from '../redux/store/store';
import {hideLoader, showLoader} from "../redux/stateSlice/settings/settingSlice";
import {setToken, setUserDetails} from "../Helpers/SessionHelper";


const BASE_URL = "http://127.0.0.1:8000";

export function userRegistrationAPI(first_name, last_name, github_username, email_address, phone_number, user_password, profile_img) {
    store.dispatch(showLoader())
    let url = BASE_URL+"/account/register";
    let bodyData = {
        firstName: first_name,
        lastName: last_name,
        github: github_username,
        emailAddress: email_address,
        phoneNumber: phone_number,
        password: user_password,
        profileImg: profile_img

    }

    return axios.post(url, bodyData)
        .then((res)=>{
            store.dispatch(hideLoader())
            if(res.status === 201){
                if(res.data['status'] === 'failed'){
                    if(res.data['data']['keyPattern']['emailAdress'] === 1){
                        errorToast('Email address already exist');
                        return  false
                    }else {
                        errorToast('Somthing went wrong')
                        return false
                    }
                }else{
                    successToast("Account created success")
                    return true
                }
            }else{
                errorToast('Somthing went wrong')
                return false
            }
        })
        .catch((err)=>{
            store.dispatch(hideLoader())
            errorToast('Somthing went wrong')
            return false
        })
}



export function userLoginAPI(email, user_password) {
    store.dispatch(showLoader)
    let url = BASE_URL+"/account/login";
    let bodyData = {
        email: email,
        password:user_password
    }
    return axios.post(url, bodyData)
        .then((res)=>{
            if(res.status === 200){
                setToken(res.data['token']);
                setUserDetails(res.data['data']);
                successToast("Login Success");
                return true
            }else{
                errorToast('Somthing went wrong')
                return false
            }
        })
        .catch((err)=>{
            store.dispatch(hideLoader())
            errorToast('Somthing went wrong')
            return false
        })
}