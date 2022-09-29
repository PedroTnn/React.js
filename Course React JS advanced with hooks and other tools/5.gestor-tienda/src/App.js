import './App.css';
import React,{useState} from 'react'


function generarfila(articulo){
return(
  <tr key={articulo.codigo}>
  <td>
    {articulo.codigo}
  </td>
  <td>
    {articulo.descripcion}
    </td>
    <td>
    {articulo.precio}
    </td>
  </tr>
);
}
function Problema1() {
//Creacion de la funcion que borra en la ultima fila
function eliminarUltimafila(){
  if (articulos.length) {
    const temporal = Array.from(articulos);
    temporal.pop();
    setArticulos(temporal);
  }
}

//Creacion de la funcion crear boton bananas xd
function agregarUltimafila(){
if (articulos.length) {
  const temporal = Array.from(articulos);
  temporal.push({codigo:4,descripcion:'bananas',precio:45});
  setArticulos(temporal);
}
}
//Hook useState
 const [articulos,setArticulos]=useState([
  {
    codigo:1,
    descripcion:'papas',
    precio:12.52
  }, {
    codigo:2,
    descripcion:'naranjas',
    precio:21
  }, {
    codigo:3,
    descripcion:'peras',
    precio:18.20
  }
 ])
  return (
    <div>
      <table border={3}>
        <thead>
          <tr>
            <th>codigo</th>
            <th>Descripcion</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>{articulos.map(generarfila)}</tbody>
      </table>
      <button onClick={agregarUltimafila}>Agregar</button>
      <button onClick={eliminarUltimafila}>Eliminar</button>
    </div>
  );
}

export default Problema1;
