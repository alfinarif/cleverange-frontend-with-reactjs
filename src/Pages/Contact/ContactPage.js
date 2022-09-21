import React,{Fragment} from 'react';
import NavigationBar from '../../Components/Common/NavigationBar';
import FooterSection from '../../Components/Common/FooterSection';
import ContactSection from "../../Components/Contact/ContactSection";

const AboutPage = ()=>{
    return(
        <Fragment>
            <NavigationBar/>
            <br/>
            <ContactSection/>
            <br/>
            <br/>
            <br/>

            <FooterSection/>
        </Fragment>
    );
}

export default AboutPage;