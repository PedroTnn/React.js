
//import React from 'react';
import React,{useState} from 'react'



function App () {
  const  [numero,setNumero]=useState(0)
  function generador(){
    const entero= Math.trunc(Math.random()*10);
    setNumero(entero)
  }

  
  return (
    <div>
      <p>Numero aleatorio : {numero}</p>
      <button onClick={generador}>Generador</button>
    </div>
  );
}

export default App;
