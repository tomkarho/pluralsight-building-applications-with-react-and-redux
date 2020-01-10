import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./shared/Header";
import NotFound from "./not-found/NotFound";
import CoursesPage from "./courses/CoursesPage";

function App() {
    return (
        <div className='container-fluid'>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/courses' component={CoursesPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
