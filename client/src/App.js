import react, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


import Login  from './components/Login/Login';
import Home  from './components/Home/Home';




function App() {

    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;