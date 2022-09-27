
import {Component} from 'react'
import React from 'react'
import Product from './Product.js'
const styles ={
    products:{
        display:'flex',
        FlexDirection:'row',
        justifyContent:'space-between',
       

        
    }
}

class Products extends Component{
    render(){
       const { products, addToCart }= this.props
       return(
      <div style={styles.products}>
        {products.map(product =>
            <Product
            addToCart = {()=>addToCart(product)}
            key={product.name}
            product={product}
            />)}
      </div>
       ) 
    }
}
export default Products