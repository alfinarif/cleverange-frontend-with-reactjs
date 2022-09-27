import React,{Fragment} from 'react';
import NavigationBar from '../../Components/Common/NavigationBar';
import FooterSection from '../../Components/Common/FooterSection';
import ProfileComponent from "../../Components/ManageUser/ProfileComponent";


const ProfilePage = ()=>{
    return(
        <Fragment>
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <ProfileComponent/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <FooterSection/>

        </Fragment>
    );
}

export default ProfilePage;