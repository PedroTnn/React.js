import calcularSuma from './calcular';
import './App.css';
import React from 'react';




//Checha como esta accediendo a la propiedad valor1 y valor2
//Como si estuviera utilizando una propiedad
function App() {
  return (
    <div>
      <form onSubmit={calcularSuma}>
      <p>Ingrese el primer valor
      <input type='number' name='valor1'/>
      </p>
      <p>
        Ingrese el segundo valor
        <input type='number' name='valor2'/>
      </p>
      <input type="submit" value='Sumar'/>
      </form>
    </div>
  )


}

//Esto es programacion orientada a Eventos

export default App;
