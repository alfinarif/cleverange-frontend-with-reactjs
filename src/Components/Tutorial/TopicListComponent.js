import React,{Fragment} from "react";
import {Link, useParams} from "react-router-dom";


const TopicListComponent =()=>{
    let params = useParams();

    return(
        <Fragment>
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-md-3 col-sm-4">
                        <Link to="">
                            <div className="card w-100 m-2 text-center">
                                <div className="card-body">
                                    <h2>{params.id}</h2>
                                    <h5 className="card-title">Fundamentals</h5>
                                </div>
                            </div>
                        </Link>
                    </div>



                </div>
            </div>
        </Fragment>
    )
}

export default TopicListComponent;