import React,{Fragment, useState, useRef, useEffect} from "react";
import '../../Assets/css/profile.css';
import {getUserDetails} from "../../Helpers/SessionHelper";
import axios from "axios";
import {errorToast, successToast} from "../../Helpers/NotificationHelper";


const ProfileComponent = ()=>{
    let full_name, phone, city, address, image = useRef();
    let [email, setEmail] = useState('');
    let [last_login, setLastLogin] = useState('');
    let [notifications, setNotifications] = useState([]);


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
        const profile = getUserDetails() // get all user data
        setEmail(profile['email'])
        setLastLogin(profile['last_login'])
        full_name.value = profile['profile']['full_name']
        phone.value = profile['profile']['phone']
        city.value = profile['profile']['city']
        address.value = profile['profile']['address']

        const csrftoken = getCookie('csrftoken');
        let url = "http://127.0.0.1:8000/notification/all";
        let emailBody = {
            email: profile['email']
        }
        axios.post(url, emailBody, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            }
        })
            .then((res)=>{
                setNotifications(res.data)
            })
            .catch((err)=>{
                errorToast("Notification API can not called!")
            })

    }, [])

    const seenNotific = (id)=>{
        const profile = getUserDetails() // get all user data
        const csrftoken = getCookie('csrftoken');
        let url = "http://127.0.0.1:8000/notification/seen";
        let dataBody = {
            id: id,
            email: profile['email']
        }
        axios.post(url, dataBody, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            }
        })
            .then((res)=>{
                successToast("Notification deleted")
                window.location = '/profile'
            })
            .catch((err)=>{
                errorToast("Notification API can not called!")
            })

    }

    return(
        <Fragment>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                            <span className="font-weight-bold">{email}</span>
                            {/*<span className="text-black-50">{email}</span><span> </span>*/}
                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>

                            <span className="mt-3 font-weight-bold"><span style={{'color': 'green'}}>Last Login:</span> {last_login}</span>

                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Full Name</label><input ref={(input=>full_name=input)} type="text" className="form-control" placeholder="full name"/></div>
                                <div className="col-md-12"><label className="labels">Phone</label><input ref={(input=>phone=input)} type="text" className="form-control" placeholder="phone number"/></div>
                                <div className="col-md-12"><label className="labels">City</label><input ref={(input=>city=input)} type="text" className="form-control" placeholder="city"/></div>
                                <div className="col-md-12"><label className="labels">Address</label><input ref={(input=>address=input)} type="text" className="form-control" placeholder="address"/></div>

                            </div>
                            {/*<div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>*/}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-1 py-2"><br/>

                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header fw-bold" style={{'color': 'green'}}>
                                        Notifications
                                    </div>
                                    <div className="card-body">

                                        {
                                            notifications.map((notification, index)=>{
                                                console.log('notificaiton', notification)
                                                return(
                                                    <div className="alert alert-warning alert-dismissible fade show text-wrap" role="alert">
                                                        {notification.message}
                                                        <button onClick={seenNotific.bind(this, notification.id)} type="button" className="btn-close"></button>
                                                    </div>
                                                )
                                            })
                                        }




                                    </div>
                                </div>
                            </div> <br/>

                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default ProfileComponent;