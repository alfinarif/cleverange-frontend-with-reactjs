import React,{Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import axios from "axios";
import {errorToast} from "../../Helpers/NotificationHelper";

const OneFreePlaylist = ()=>{
    let [tutorials, setTutorials] = useState([]);
    let [courseTitle, setCourseTitle] = useState([]);
    let [vUrl, setUrl] = useState("https://youtu.be/nhgy3IDqZZk");

    useEffect(()=>{
        let url = "http://127.0.0.1:8000/course/list/index/free";
        axios.get(url)
            .then((res)=>{
                setTutorials(res.data)
                setCourseTitle(res.data[0]['course'])
                console.log(res.data[0]['course'])
            })
            .catch((err)=>{
                if(err){
                    errorToast("Can not load data..!")
                }
            })

    },[]);


    const setVideoUrl = (url)=>{
        setUrl(url)
    }


    return(
        <Fragment>
            <div className="container-fluid mt-3">
                <div className="row d-flex justify-content-center  shadow-sm rounded p-1">
                    <div className="col-lg-6 col-md-6 col-sm-12 my-1" style={{height:"409", width:"309"}}>
                        <div className="player-wrapper">
                            <ReactPlayer
                                url={vUrl}
                                className="react-player"
                                playing
                                width="100%"
                                height="100%"
                                controls={false}
                                pip ={false}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-1">
                        <div style={{height:"380px", overflow:"auto"}}>
                            <table className="table border">
                                <thead className="table-header bg-success">
                                <tr>
                                    <th className="text-white">{courseTitle.title}</th>
                                </tr>
                                </thead>
                                <tbody>

                                {
                                    tutorials.map((tutorial, index)=>{
                                        return(

                                            <tr className="plylistTitleStyle" onClick={setVideoUrl.bind(this, tutorial.url)}>
                                                <td>{index} - {tutorial.title}</td>
                                            </tr>

                                        )
                                    })
                                }



                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default OneFreePlaylist;