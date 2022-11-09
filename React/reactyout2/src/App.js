import logo from './logo.svg';
import './App.css';
import Movie from './Components/Movie.js';
import './Components/Movie.css';

function App(props) {
  console.log(props)
  return (
    <>
     <div className='main'>

       <div className='box'>
         <img src={props.imglink} />
         <div className='card-info'>
           <p> {props.title}</p>
           <p> {props.language}</p>
           <button> Watch now </button>
         </div> 
       </div> 
       
     </div>
    </>
  );
}

export default App;
