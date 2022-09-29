
//import React from 'react';
import React,{useState} from 'react'

//Hacer una aplicacion que pueda elegir si se quiere una multiplicacion
//una division o una suma 

function App () {
  //numero de refencia y la funcion que cambia el numero
/*
  function generador(){
    //Creando el array con 5 casillas
    const numeros = new Array(5);
    //Este array tiene 5 posiciones las cuales 
    //
for (let i = 0; i < numeros.length; i++) {
  numeros[i]=Math.trunc(Math.random()*10)
  setNumeros(numeros)
} 
  }
  const [numerosAleatorios, setNumeros]=useState([0,0,0,0,0])
*/
/*function suma(valor1,valor2){
  const total = valor1 + valor2
  return total*/
   /* 
   <p>Número aleatorio</p>
      {numerosAleatorios.map(n => (<p>{n}</p>))}
      <button onClick={generador}>Generar número aleatorio</button>
      */

function sumador() {
    let numero = 1
    let total = 0
    total = numero +  numero

  setInicial(numero)
}

const [inicial,setInicial]=useState(0)
  return (
    <div>
            <p>Sumador de clicks {inicial}</p>
                   
            <button onClick={sumador}> Generador</button>
    </div>
  );
  }

export default App;
