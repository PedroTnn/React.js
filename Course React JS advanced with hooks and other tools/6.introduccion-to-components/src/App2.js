import React, { useState } from 'react';
import Dado from './Dado';



function App() {

    function aleatorio() {
        return Math.trunc(Math.random()*6)+1
      }
      
      function tirar() {
          setNumero1(aleatorio())
          setNumero2(aleatorio())
          setNumero3(aleatorio())
      }
     

    const [numero1,setNumero1]=useState(aleatorio())
    const [numero2,setNumero2]=useState(aleatorio())
    const [numero3,setNumero3]=useState(aleatorio())
    


  return (
   <div>
    <p>Dados</p>
   <Dado valor = {numero1} />
   <Dado valor = {numero2} />
   <Dado valor = {numero3} />
    <button onClick={tirar}>Tirar</button>
   
   </div>
  );
}

export default App;
