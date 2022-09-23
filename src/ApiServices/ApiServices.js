import axios from "axios";
import {errorToast, successToast} from "../Helpers/NotificationHelper";

import store from '../redux/store/store';
import {hideLoader, showLoader} from "../redux/stateSlice/settings/settingSlice";
import {setToken, setUserDetails} from "../Helpers/SessionHelper";


const BASE_URL = "http://127.0.0.1:8000";

export function userRegistrationAPI(email_address, user_password) {
    store.dispatch(showLoader())
    let url = BASE_URL+"/account/register";
    let bodyData = {
        email: email_address,
        password: user_password

    }

    return axios.post(url, bodyData)
        .then((res)=>{
            store.dispatch(hideLoader())
            if(res.status === 200){
                if(res.data['status'] !== 'success'){
                    if(res.status === 400){
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