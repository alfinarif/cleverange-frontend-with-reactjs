import {React, Fragment} from 'react';
import FooterSection from '../../Components/Common/FooterSection';
import NavigationBar from '../../Components/Common/NavigationBar';
import TopicListComponent from "../../Components/Tutorial/TopicListComponent";


const TopicListPage = ()=>{
    return(
        <Fragment>
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <TopicListComponent/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <FooterSection/>
        </Fragment>
    );
}

export default TopicListPage;