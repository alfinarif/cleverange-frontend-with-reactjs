import {React, Fragment} from 'react';
import FooterSection from '../../Components/Common/FooterSection';
import NavigationBar from '../../Components/Common/NavigationBar';
import FreeTutorialDetails from '../../Components/Tutorial/FreeTutorialDetails';


const TutorialPage = ()=>{
    return(
        <Fragment>
            <NavigationBar/>
            <br/>
            <br/>
            <FreeTutorialDetails/>
            <br/>
            <br/>
            <br/>
            <br/>
            <FooterSection/>
        </Fragment>
    );
}

export default TutorialPage;