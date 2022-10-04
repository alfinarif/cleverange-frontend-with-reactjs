import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import EditorJs from "@natterstefan/react-editor-js";

import { EDITOR_JS_TOOLS } from "../constants";
import { data } from "../data";
import OthersProjectComponent from "../../Project/OthersProjectComponent";
import axios from "axios";

class CreateProjectComponent extends Component {

    getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }





    async onSave() {
        const outputData = await this.editorInstance.save();
        console.log('response', outputData['blocks'])
        const csrftoken = this.getCookie('csrftoken');
        const url = "http://127.0.0.1:8000/project/list/app/test"
        axios.post(url, outputData['blocks'],{
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            }
        })
            .then((res)=>{
            console.log("response", res.data)
        })
            .catch((err)=>{
                console.log("error", err)
            })
    }

    render() {
        return (
            <Fragment>
                <div className="blog-single gray-bg">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-8 m-15px-tb">

                                <article className="article">
                                    <>
                                        <EditorJs
                                            editorInstance={instance => (this.editorInstance = instance)}
                                            tools={EDITOR_JS_TOOLS}
                                            data={data}
                                        />

                                        <br/>
                                        <button onClick={this.onSave.bind(this)} type="button" className="btn btn-success">
                                            Add new project
                                        </button>

                                    </>
                                </article>

                            </div>



                            <div className="col-lg-4 m-15px-tb blog-aside">

                                <div className="widget widget-author">
                                    <div className="widget-title">
                                        <h3>Author</h3>
                                    </div>
                                    <div className="widget-body">
                                        <div className="media align-items-center">
                                            <div className="avatar">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" title=""
                                                     alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h6>Hello, I'm<br/> Alfin Arif</h6>
                                            </div>
                                        </div>
                                        <p>I design and develop services for customers of all sizes, specializing in
                                            creating stylish, modern websites, web services and online stores</p>
                                    </div>
                                </div>



                                <OthersProjectComponent/>


                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default CreateProjectComponent;
