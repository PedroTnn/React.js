
import './App.css';
import React from 'react';
/*
function retornarAleatorio() {
  return Math.trunc(Math.random()*10)
}
*/

function Mostrar(titulo){
  return (
  <h1>
    {titulo}
  </h1>)
}

function App() {
  /*
  const siglo = 21;
  const persona={
    nombre: 'Juan',
    edad:34
  }

  return(
    <div>
      <h1>Titulo Nivel 1</h1>
      <hr/>
      <p>Estamos en el siglo {siglo}</p>
      <h3>Acceso a un objeto</h3>
      <p>{persona.nombre} tiene {persona.edad} años</p>
      <h3>Llamada a un metodo</h3>
      <p>Un valor aletorio llamando a un metodo: </p>
      {retornarAleatorio()}
      <h3>Calculo Inmediato</h3>
         3 + 3 = {3 + 3}
    </div>
  )
  

  const buscadores = ['http://www.google.com',
    'http://www.bing.com',
    'http://www.yahoo.com'];
  return (
    <div>
      <a href={buscadores[0]}>Google</a><br />
      <a href={buscadores[1]}>Bing</a><br />
      <a href={buscadores[2]}>Yahoo</a><br />
    </div>
  );
  */
return(

  <div>
    <div>
{Mostrar('Hola Mundo')}
</div>
<div>
{Mostrar('Fin del mundo, soy un capo papa')}
    </div>
  </div>
)

  
}

export default App;
