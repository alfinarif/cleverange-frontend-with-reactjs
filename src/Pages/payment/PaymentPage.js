import React,{Fragment} from 'react';
import NavigationBar from '../../Components/Common/NavigationBar';
import FooterSection from "../../Components/Common/FooterSection";
import PaymentComponent from "../../payment/PaymentComponent";

const PaymentPage = ()=>{
    return(
        <Fragment>
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <PaymentComponent/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <FooterSection/>
        </Fragment>
    );
}

export default PaymentPage;