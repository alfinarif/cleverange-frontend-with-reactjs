import {React, Fragment} from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const OneFreePlaylist = ()=>{

    return(
        <Fragment>
            <div className="container-fluid mt-3">
                <div className="row d-flex justify-content-center  shadow-sm rounded p-1">
                    <div className="col-lg-6 col-md-6 col-sm-12 my-1" style={{height:"409", width:"309"}}>
                        <div className="player-wrapper">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=-X4ikwUwxoE"
                                className="react-player"
                                playing
                                width="100%"
                                height="100%"
                                controls={false}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-1">
                    <div style={{height:"380px", overflow:"auto"}}>
                        <table className="table border">
                        <thead className="table-header bg-success">
                            <tr>
                            <th className="text-white">Django Free Playlist</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1 - Introduction to django</td>
                            </tr>
                            <tr>
                                <td>2 - Creating virtualenv for django</td>
                            </tr>
                            <tr>
                                <td>3 - Install initial modules</td>
                            </tr>
                            <tr>
                                <td>3 - Install initial modules</td>
                            </tr>
                            <tr>
                                <td>3 - Install initial modules</td>
                            </tr>
                            <tr>
                                <td>3 - Install initial modules</td>
                            </tr>
                            <tr>
                                <td>3 - Install initial modules</td>
                            </tr>
                            <tr>
                                <td>3 - Install initial modules</td>
                            </tr>
                            <tr>
                                <td>3 - Install initial modules</td>
                            </tr>
                            
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