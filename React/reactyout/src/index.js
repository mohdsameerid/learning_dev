import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';


let name = "Samir";
let img1 = "https://picsum.photos/200/300";
let img2 = "https://picsum.photos/202/300";
let img3 = "https://picsum.photos/230/300";
let h = {
  fontFamily: "'Alkalami', serif"
}

////////////////////////////////////////////////////////////////////////////////////
let currDate = new Date();
currDate = currDate.getHours();
let greeting  = "";
let cssStyle = { };

if(currDate >= 1 && currDate < 12){
  greeting = "Good Morning";
  cssStyle.color = "blue";
}else if(currDate >= 12 && currDate < 19){
  greeting = "Good AfterNoon";
  cssStyle.color = "orange";
}else{
  greeting = "Good Night";
  cssStyle.color = "black";
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <>
  //  <div className='box'>
  //   <h1 style={ {fontFamily: "'Alkalami', serif"} } >Hello My name is {name}</h1>

  //   <div className='images'>
  //     <img className='img' src={img1} />
  //     <img className='img' src={img2} />
  //     <img className='img' src={img3} />
  //   </div>
  //  </div>
  // </>

 /////////////////////////////Greeting wish according to time//////////////////////////////////
  <>
    <h1>Hello, <span style={cssStyle}> {greeting}</span></h1>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
