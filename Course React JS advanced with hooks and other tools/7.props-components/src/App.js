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
  valor1,valor2,resultado:suma
 }

 setOperation([resultado,...operation]);

 event.target.valor1.value = '';
 event.target.valor2.value = '';
}

  return (
      <div>
       <form onSubmit={sumar}>
      <p>
        Ingrese primer valor 
        <input type="number" name="valor1"></input>
      </p>
      <p>
        Ingrese el segundo valor 
        <input type="number" name="valor2"></input>
      </p>
      <input type="submit" value="Sumar"></input>
       </form>
       <ListadoResultado  resultado =  {operation}/>
      </div>
  );
}

export default App;
