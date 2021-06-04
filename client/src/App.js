import react, { useState, useEffect } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


function App() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        debugger
        axios.post('http://localhost:3001/api/login', {
            userName: userName,
            password: password
        }).then((response, error) => {
            console.log("response == >", response)
            console.log("error == >", error)
        })
    }



    return (
        <div>
            <div className="sidenav">
                <div className="login-main-text">
                    <h2>Society Maintenance System Login Page</h2>
                    <p>Login or register from here to access.</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        <div className="form-group">
                            <label>User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="User Name"
                                onChange={(e) => {
                                    setUserName(e.target.value)
                                }} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />
                        </div>
                        <div className="form-group btn-group">
                            <button
                                className="btn btn-black"
                                onSubmit={login}
                            >
                                Login
                            </button>
                            <button
                                className="btn btn-secondary"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;