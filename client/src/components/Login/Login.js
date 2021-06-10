import react, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import './Login.css';
import { NotificationManager } from 'react-notifications';


function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory(); 

    const login = () => {
        axios.post('http://localhost:3001/api/login', {
            userName: userName,
            password: password
        }).then((response) => {
            const userData = response.data[0];
            NotificationManager.success("Login Successfull!");
            history.push({
                pathname: '/home',
                // search: '?update=true',  // query string
                state: {  // location state
                  user: userData, 
                },
              }); 
        }).catch(error => {
            console.log("error ===> ", error)
            NotificationManager.error(error.response.data.message);
        })
    }

    // useEffect(() => {
    //     console.log(this);
    //     debugger
    // }, []);

    return (
        <div class="animsition">
            <div class="page-wrapper">
                <div class="page-content--bge5">
                    <div class="container">
                        <div class="login-wrap">
                            <div class="login-content">
                                <div class="login-logo">
                                    <img
                                        src={process.env.PUBLIC_URL + '/sai_sparsh_logo.jpg'}
                                        className="mainLogo"
                                    />
                                </div>
                                <div class="login-form">
                                    <div class="form-group">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="au-input au-input--full"
                                            placeholder="Email"
                                            onChange={(e) => {
                                                setUserName(e.target.value)
                                            }} />
                                    </div>
                                    <div className="mt-2"></div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="au-input au-input--full"
                                            placeholder="Password"
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="mt-2"></div>
                                    <div class="login-checkbox">
                                        <label>
                                            <a href="#">Forgotten Password?</a>
                                        </label>
                                    </div>
                                    <div className="mt-4"></div>
                                    <button
                                        className="au-btn au-btn--block au-btn--green m-b-20"
                                        onClick={login}
                                    >
                                        Sign in
                                    </button>

                                    <div class="register-link">
                                        <p>
                                            Don't you have account?
                                            <a href="#" className="ms-1">Sign Up Here</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;