import React,{Fragment, useEffect, useState} from "react";
import '../Assets/css/payment.css';
import bkash from '../Assets/img/bkash.png';
import rocket from '../Assets/img/rocket.png';

const PaymentComponent = ()=>{


    const paymentHandler = ()=>{
        window.location = "/profile"
    }

    return(
        <Fragment>
            <div className="pay-card mt-50 mb-50">
                <div className="pay-card-title mx-auto">
                    Payment Settings
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
                            <input type="text" placeholder="Bkash/Rocket Number"/>
                        </div>
                    </div>
                    <div className="row-1">
                        <div className="row row-2">
                            <input type="text" placeholder="Bkash/Rocket TrxID"/>
                        </div>
                    </div>


                    <button onClick={paymentHandler} className="btn btn-success w-100"><span className="text-center">Submit Payment</span></button>
                </div>
            </div>
        </Fragment>
    )
}

export default PaymentComponent;