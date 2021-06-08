import react, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Owners from './components/Owners/Owners';
import MainContent from './components/Layout/MainContent/MainContent';




function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <MainContent>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/Owners">
                            <Owners />
                        </Route>
                </MainContent>

            </Switch>

        </Router>
    )
}

export default App;