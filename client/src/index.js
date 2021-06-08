import React from 'react';
import ReactDOM from 'react-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import App from './App';

ReactDOM.render(
  <div>
    <NotificationContainer />
    <App />
  </div>,
  document.getElementById('root')
);
