import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { NotificationManager } from 'react-notifications';
import Textbox from '../Layout/Textbox/Textbox';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ userName: '', password: '' });
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as any;
    setFormData({ ...formData, [name]: value });
  };

  const login = () => {
    axios
      .post('http://localhost:3001/api/login', formData)
      .then((response) => {
        const userData = response.data; // server now returns mapped user
        NotificationManager.success('Login Successfull!');
        history.push({ pathname: '/home', state: { user: userData } });
      })
      .catch((error) => {
        console.log('error ===> ', error);
      });
  };

  return (
    <div className="animsition">
      <div className="page-wrapper">
        <div className="page-content--bge5">
          <div className="container">
            <div className="login-wrap">
              <div className="login-content">
                <div className="login-logo">
                  <img src={process.env.PUBLIC_URL + '/logo.jpg'} className="mainLogo" />
                </div>
                <div className="login-form">
                  <Textbox type={'email'} label={'Email Address'} name={'userName'} placeholder={'Email'} onChange={handleChange} />
                  <div className="mt-2"></div>

                  <Textbox type={'password'} label={'Password'} name={'password'} placeholder={'Password'} onChange={handleChange} />
                  <div className="mt-2"></div>
                  <div className="login-checkbox">
                    <label>
                      <a href="#">Forgotten Password?</a>
                    </label>
                  </div>
                  <div className="mt-4"></div>
                  <button className="au-btn au-btn--block au-btn--green m-b-20" onClick={login}>
                    Sign in
                  </button>

                  <div className="register-link">
                    <p>
                      Don't you have account?
                      <a href="#" className="ms-1">
                        Sign Up Here
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
