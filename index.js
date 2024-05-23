import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
 import reportWebVitals from './reportWebVitals';
// // import Menu from './hovermenu';

// import Main from './greatstack/main';
// import Use from './useeffect';
import Travel from './travel/travel';
// import Wheather from './wheather';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Travel/> 
    {/* <Wheather/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
