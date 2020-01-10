import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./shared/Header";
import NotFound from "./not-found/NotFound";

function App() {
    return (
        <div className='container-fluid'>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={AboutPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
