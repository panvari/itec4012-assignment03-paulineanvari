import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDAP0br5V-kWq5Wj5fGVkn7wi8Cpl1RODw",
  authDomain: "itec4012-assignment-03.firebaseapp.com",
  databaseURL: "https://itec4012-assignment-03-default-rtdb.firebaseio.com",
  projectId: "itec4012-assignment-03",
  storageBucket: "itec4012-assignment-03.appspot.com",
  messagingSenderId: "975041684277",
  appId: "1:975041684277:web:6a47a9dc8171a248c2627c"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
