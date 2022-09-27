import {Component} from 'react'
import React from 'react'
import Button from './Button'
const styles = {
    product:{
        border:'solid 5px #eee',
        boxShadow:'0 5px 5px rgb(0,0,0,01)',
        width:'20%',
        padding:'10px 15px',
        borderRadius:'15px'
    },
    img:{
        width:'100%'
    }
}
class Product extends Component{
    
    render(){
        console.log(this.props)
        const{product,addToCart} = this.props
        return(
            <div style={styles.product}>
           <img style={styles.img}alt={Product.name} src={product.img}/>
           <h3>{product.name}</h3>
           <p>{product.price}</p>
           <Button OnClick ={() => addToCart(product)}>
            Add to cart
           </Button>
           </div>
        )
    }
}

export default Product