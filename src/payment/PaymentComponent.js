import React,{Fragment, useRef} from "react";
import {useParams, useNavigate} from "react-router-dom";

import '../Assets/css/payment.css';
import bkash from '../Assets/img/bkash.png';
import rocket from '../Assets/img/rocket.png';
import {getUserDetails} from "../Helpers/SessionHelper";
import axios from "axios";
import {errorToast} from "../Helpers/NotificationHelper";

const PaymentComponent = ()=>{
    let bkash_or_rocket_number, bkash_or_rocket_trx = useRef()
    let params = useParams()
    let navigate = useNavigate()


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

    const paymentHandler = ()=>{
        const profile = getUserDetails() // get all user data
        let user = profile['pk'];
        let course_slug = localStorage.getItem('course_id');
        let bkashOrRocketNumber = bkash_or_rocket_number.value;
        let bkashOrRocketTrx = bkash_or_rocket_trx.value;

        let dataBody = {
            user: user,
            course: course_slug,
            sander_number: bkashOrRocketNumber,
            sander_trx: bkashOrRocketTrx
        }

        const csrftoken = getCookie('csrftoken');
        let url = "http://127.0.0.1:8000/payment/submit"
        axios.post(url, dataBody, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            }
        })
            .then((res)=>{
                if(res.data['status'] === "exist"){
                    errorToast(res.data['msg'])
                }
                else{
                    navigate('/profile')
                }
            })
            .catch((err)=>{
                errorToast("Please try again!")
            })

    }

    return(
        <Fragment>
            <div className="pay-card mt-50 mb-50">
                <div className="pay-card-title mx-auto">
                    {params.slug}
                    <br/>
                </div>
                <div className="text-wrap">
                    <p>আপনি শুরু করার আগে আমাকে এই কোর্স সম্পর্কে আপনাকে ব্যাখ্যা করতে দিন।
                        হাই আলফিন এখানে, আমরা পাইথনের মৌলিক বিষয়গুলি শিখতে যাচ্ছি যা ফ্রেমওয়ার্ক বোঝা বা শেখার জন্য খুবই গুরুত্বপূর্ণ,
                        যদি মৌলিক ধারণাটি পরিষ্কার না হয় তবে কাঠামো আরও কঠিন হবে,
                        তাই আমরা ভিক্ষা থেকে শুরু করতে যাচ্ছি
                    </p>
                </div>
                <div className="payment-section">
                    <span id="card-header">Banking info:</span>
                    <div className="row row-1">
                        <div className="col-2"><img className="img-fluid"
                                                    src={bkash}/>
                        </div>
                        <div className="col-7">
                            <span className="ml-2 font-weight-bold">+8801926002374</span>
                        </div>
                    </div>
                    <div className="row row-1">
                        <div className="col-2"><img className="img-fluid"
                                                    src={rocket}/></div>
                        <div className="col-7">
                            <span className="ml-2 font-weight-bold">+8801926002374</span>
                        </div>
                    </div>
                    <span id="card-header">Your payment info:</span>

                    <div className="row-1">
                        <div className="row row-2">
                            <input ref={(input)=>bkash_or_rocket_number=input} type="text" placeholder="Bkash/Rocket Number"/>
                        </div>
                    </div>
                    <div className="row-1">
                        <div className="row row-2">
                            <input ref={(input)=>bkash_or_rocket_trx=input} type="text" placeholder="Bkash/Rocket TrxID"/>
                        </div>
                    </div>


                    <button onClick={paymentHandler} className="btn btn-success w-100"><span className="text-center">Submit Payment</span></button>
                </div>
            </div>
        </Fragment>
    )
}

export default PaymentComponent;