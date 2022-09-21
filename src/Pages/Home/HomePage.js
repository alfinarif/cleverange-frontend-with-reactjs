import {React, Fragment} from 'react';
import NavigationBar from '../../Components/Common/NavigationBar';
import HeroSection from '../../Components/Home/HeroSection';
import OneFreePlaylist from '../../Components/Home/OneFreePlaylist';
import FooterSection from '../../Components/Common/FooterSection';
import ProjectListComponent from '../../Components/Project/ProjectListComponent';
import TutorialListComponent from '../../Components/Tutorial/TutorialListComponent';


const HomePage = ()=>{
    return(
        <Fragment>
            <NavigationBar/>
            <HeroSection/>
            <br/>
            <OneFreePlaylist/>
            <br/>
            <br/>
            <ProjectListComponent/>
            <br/>
            <br/>
            <br/>
            <TutorialListComponent/>
            <br/>
            <br/>
            <FooterSection/>

        </Fragment>
    );
}

export default HomePage;