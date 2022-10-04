import './Dado.css'
import React,{useState} from 'react'




function Dado(propiedades){
  
    const valor = Math.trunc(Math.random()*6)+1; 

   

    return(
        <div className='dado-cuadrado'>
            {propiedades= valor}
        </div>
    )

}

    //tirar
   


export default Dado