import React,{useState,useEffect} from 'react';
import './App.css';

function App() {

  const [articles, setArticles] = useState([])

  useEffect(()=>
  {fetch('https://scratchya.com.ar/react/datos.php')
  .then((response)=>{return response.json()})
    .then((articles)=>setArticles(articles))

  })
  return (
   <div>
    <table border={1}>
    <thead>
      <tr> 
        <th> Code </th>
        <th> Description </th>
        <th>Price </th>
      </tr>
    </thead>
    <tbody>
      {articles.map(e=>{
        return(
        <tr key ={e.codigo}>
          <td>{e.codigo}</td>
          <td>{e.descripcion}</td>
          <td>{e.precio}</td>
        </tr>
         );
      })}
    </tbody>
    </table>
   </div>
  );
}

export default App;
