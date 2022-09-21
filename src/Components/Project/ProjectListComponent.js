import React, {Fragment} from 'react';


const ProjectListComponent = ()=>{

    return(
        <Fragment>
            <div className='container'>
            <div className="my-2 text-left">
                    <h3 className="fw-bold text-success">Completed Projects</h3>
                    <hr style={{'width':'180px', 'margin-bottom':'-10px', 'color':'orangered'}}/>
                    <hr style={{'width':'150px', 'color':'orangered'}}/>
                    </div>
                <div className='row'>
                    <div className="card w-100 m-2">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary btn-sm mx-2">Details</a>
                            <a href="#" className="btn btn-secondary btn-sm">GitHub</a>
                        </div>
                    </div>

                    <div className="card w-100 m-2">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary btn-sm mx-2">Details</a>
                            <a href="#" className="btn btn-secondary btn-sm">GitHub</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default ProjectListComponent;