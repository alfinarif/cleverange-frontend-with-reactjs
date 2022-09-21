import { Fragment } from "react";
import {BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import ProjectPage from "./Pages/Project/ProjectPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import LoginPage from "./Pages/Login/LoginPage";
import TutorialPage from "./Pages/Tutorial/TutorialPage";
import AboutPage from "./Pages/About/AboutPage";
import LoaderHelper from "./Helpers/LoaderHelper";
import ContactPage from "./Pages/Contact/ContactPage";
import {getToken} from "./Helpers/SessionHelper";
import SidebarSection from "./Components/Common/SidebarSection";

function App() {
    if (getToken()){
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/project" element={<ProjectPage/>}/>
                        <Route path="/tutorial" element={<TutorialPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/contact" element={<ContactPage/>}/>

                        {/* undefined router */}
                        <Route
                            path="*"
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <p>There's nothing here! your request to a undefined route<Link className="ml-2" to="/">Go To Home</Link></p>
                                </main>
                            }
                        />

                    </Routes>
                </BrowserRouter>

                <LoaderHelper/>

            </Fragment>
        );
    }
    else {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/project" element={<Navigate to="/loginUser" replace />}/>
                        <Route path="/tutorial" element={<Navigate to="/loginUser" replace />}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/contact" element={<ContactPage/>}/>
                        <Route path="/registerUser" element={<RegisterPage/>}/>
                        <Route path="/loginUser" element={<LoginPage/>}/>

                        {/* undefined router */}
                        <Route
                            path="*"
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <p>There's nothing here! your request to a undefined route<Link className="ml-2" to="/">Go To Home</Link></p>
                                </main>
                            }
                        />

                    </Routes>
                </BrowserRouter>

                <LoaderHelper/>

            </Fragment>
        );
    }





}

export default App;
