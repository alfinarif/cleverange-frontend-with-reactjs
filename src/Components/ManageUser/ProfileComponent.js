import React,{Fragment, useState, useRef, useEffect} from "react";
import '../../Assets/css/profile.css';
import {getUserDetails} from "../../Helpers/SessionHelper";


const ProfileComponent = ()=>{
    let full_name, phone, city, address, image = useRef();
    let [email, setEmail] = useState('');
    let [last_login, setLastLogin] = useState('');

    useEffect(()=>{
        const profile = getUserDetails() // get all user data
        console.log(profile)
        setEmail(profile['email'])
        setLastLogin(profile['last_login'])
        full_name.value = profile['profile']['full_name']
        phone.value = profile['profile']['phone']
        city.value = profile['profile']['city']
        address.value = profile['profile']['address']

    }, [])

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
                                        <div className="alert alert-success" role="alert">
                                            A simple success alert—check it out!
                                        </div>

                                        <div className="alert alert-success" role="alert">
                                            A simple success alert—check it out!
                                        </div>
                                        <div className="alert alert-success" role="alert">
                                            A simple success alert—check it out!
                                        </div>
                                        <div className="alert alert-success" role="alert">
                                            A simple success alert—check it out!
                                        </div>


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