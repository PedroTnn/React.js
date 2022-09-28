
//import React from 'react';
import React,{useState} from 'react'

//Hacer una aplicacion que pueda elegir si se quiere una multiplicacion
//una division o una suma 

function App () {
  //numero de refencia y la funcion que cambia el numero

  function generador(){
    const numeros = new Array(5);
for (let i = 0; i < numeros.length; i++) {
  numeros[i]=Math.trunc(Math.random()*10)
  setNumeros(numeros)
}
    const entero = Math.trunc(Math.random()*10);
    
  }
  const [numerosAleatorios,setNumeros]=useState([0,0,0,0,0])

/*function suma(valor1,valor2){
  const total = valor1 + valor2
  return total*/
    


  
  return (
    <div>
    <p>Número aleatorio</p>
      {numerosAleatorios.map(n => (<p>{n}</p>))}
      <button onClick={generador}>Generar número aleatorio</button>
    </div>
  );
  }

export default App;
