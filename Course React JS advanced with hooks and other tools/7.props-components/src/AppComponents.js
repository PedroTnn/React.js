import React,{useState} from 'react';
import './App.css';
import ListadoResultado from './listadoresultado';

function App() {
const [operation,setOperation] = useState([])

function sumar(event){
  event.preventDefault();
  const valor1 = parseInt(event.target.valor1.value)
  const valor2 = parseInt(event.target.valor2.value)
 const suma = valor1 + valor2;
 const resultado = {
       valor1,
         valor2,
           resultado:suma
 }

 setOperation([resultado,...operation]);

event.target.valor1.value = '';
event.target.valor2.value = '';


}

  return (
      <div>
     
       <ListadoResultado  resultado =  {operation}/>
      </div>
  );
}

export default App;
