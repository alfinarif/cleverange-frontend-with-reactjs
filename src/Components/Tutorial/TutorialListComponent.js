import React, {Fragment} from 'react';


const TutorialListComponent = ()=>{

    return(
        <Fragment>
            <div className='container'>
            <div className="my-2 text-left">
                    <h3 class="fw-bold text-success">Learn with Cleverange</h3>
                    <hr style={{'width':'180px', 'margin-bottom':'-10px', 'color':'orangered'}}/>
                    <hr style={{'width':'150px', 'color':'orangered'}}/>
                    </div>
                <div className='row'>
                    <div className="card w-100 m-2">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary btn-sm mx-2">Start</a>
                            <a href="#" className="btn btn-danger btn-sm">YouTube</a>
                        </div>
                    </div>

                    <div className="card w-100 m-2">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary btn-sm mx-2">Start</a>
                            <a href="#" className="btn btn-danger btn-sm">YouTube</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TutorialListComponent;