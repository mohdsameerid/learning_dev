import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

let name = "Samir";
let img1 = "https://picsum.photos/200/300";
let img2 = "https://picsum.photos/202/300";
let img3 = "https://picsum.photos/230/300";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <div className='box'>
    <h1 className='h'>Hello My name is {name}</h1>

    <div className='images'>
      <img className='img' src={img1} />
      <img className='img' src={img2} />
      <img className='img' src={img3} />
    </div>
   </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
