import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
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
    
  );
}

export default App;