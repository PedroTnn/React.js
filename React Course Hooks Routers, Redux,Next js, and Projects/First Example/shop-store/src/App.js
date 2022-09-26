import {Component} from "react";
import React from 'react'
class App extends Component{
   state = {
    productos:[
      {name:'Tomato', price:1500, img: '/productos/tomato.jpg'},
      {name:'Lettuce', price:1000, img: '/productos/lettuce.jpg'},
      {name:'Spinach', price:2000, img: '/productos/spinach.jpg'},
    ]
  }
  render(){
    return(
      <div>
        <p>Hola mundo</p>
      </div>
    )
  }
}


export default App;
