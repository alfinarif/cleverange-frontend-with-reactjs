import React from 'react';
import loader from '../Assets/img/loader.svg';
import {useSelector} from "react-redux";


const LoaderHelper = ()=>{
    const loaderState = useSelector((state)=>state.settings.loader)
    return(
        <div className={loaderState+" ProcessingDiv"}>
            <div className='center-screen'>
                <img className='loader-size' src={loader} alt="loader-svg"/>
            </div>
        </div>
    )
}

export default LoaderHelper;