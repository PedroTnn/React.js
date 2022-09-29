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
function App() {
function eliminarUltimafila(){
  if (articulos.length) {
    const temporal = Array.from(articulos);
    temporal.pop();
    setArticulos(temporal);
  }
}
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
    codigo:1,
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
      <button onClick={eliminarUltimafila}>Eliminar la ultima fila</button>
    </div>
  );
}

export default App;
