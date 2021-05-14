import React from 'react';
import HomePage from './homepage'
import {Switch, Route} from 'react-router-dom'
import About from './about'
import Projects from './projects'
// import '../index.css';

const Main = () => (
    <Switch>
        <div id="MainPage">
            <Route exact path = "/" component={HomePage} />
            <Route path = "/about" component={About} />
            <Route path = "/projects" component={Projects} />
        </div>
    </Switch>
)

export default Main;