import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
const root = ReactDOM.createRoot(document.getElementById('root'));


const Li = ({children,estado,casa,edad})=> {
  console.log(casa,edad)
return(
<li>{children} está {estado}</li>
)
}
*/
/*
const X = () =>
 <ul>
   <Li 
      estado = {"feliz"}  casa = {false}  edad = {21} >Felipe </Li>
   <Li estado ={"a verga"}>Pedro</Li>
    <Li estado= {"Bobo"}>Pablo</Li>
  </ul>

  root.render(
  <X/>,document.getElementById("root")
);
*/
/*const root = ReactDOM.createRoot(document.getElementById('root'));

  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
*/
reportWebVitals();
