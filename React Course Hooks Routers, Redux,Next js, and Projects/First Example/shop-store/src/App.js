import {Component} from "react";
import React from 'react'
import Products from './components/Products'
class App extends React.Component{
   state = {
    products:[
      {name:'Tomato', price:1500, img: '/products/tomato.jpg'},
      {name:'Lettuce', price:1000, img: '/products/carrot2.jpg'},
      {name:'Spinach', price:2000, img: '/products/spinach2.jpg'},
    ]
  }
  render(){
    return(
      <div>
        <Products 
        addToCart={()=>console.log('I don`t do anything')}
        products={this.state.products}
        />
      </div>
    )
  }
}


export default App;
