import react, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Owners from './components/Owners/Owners';
import Builders from './components/Builders/Builders';
import MaintenanceDetails from './components/MaintenanceDetails/MaintenanceDetails';
import MainContent from './components/Layout/MainContent/MainContent';
import Sites from './components/Sites/Sites';
import SiteUnits from './components/SiteUnits/SiteUnits';




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
                        <Route exact path="/owners">
                            <Owners />
                        </Route>
                        <Route exact path="/owner/details/:id">
                            <Owners />
                        </Route>
                        <Route exact path="/owner/new">
                            <Owners />
                        </Route>
                        <Route exact path="/builders">
                            <Builders />
                        </Route>
                        <Route exact path="/maintenance">
                            <MaintenanceDetails />
                        </Route>
                        <Route exact path="/sites">
                            <Sites />
                        </Route>
                        <Route exact path="/siteunits">
                            <SiteUnits />
                        </Route>
                </MainContent>
            </Switch>
        </Router>
    )
}

export default App;