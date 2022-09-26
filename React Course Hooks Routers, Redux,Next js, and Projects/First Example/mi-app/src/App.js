import { Component } from "react"
import React from "react"
class Button extends Component{
    state = {valor:3}
    constructor(props){
        super(props)
        console.log('constructor',props)
    }
    componentDidMount(){
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState,) {
        console.log('ComponentUpdate',prevProps,prevState)
    }

    componentWillUnmount(){
        console.log('Desmontando componente', this.props,this.state)
    }

    render(){
    
        console.log('Ejecutando Render Button');
        return(
            <button onClick={()=> this.setState({prop:1}) }>
                Enviar
            </button>
        )
    }
}
//Componentes Llamados

//Para todos los casos vamos a estar retornando JSX
//Creando el componente basado en clases
class App extends Component{
    state={
        valor:3
    }
  
    render() {
        console.log(this.state);
        return(
        <div>
           <p> Hola Mundo </p>
          {this.state.valor === 3 ? <Button chanchito = 'feliz'/>
          :null}
        <button 
        //Creando boton que cambia estados
        className ={`${this.state.valor}`}
        onClick={()=> this.setState({valor:2}) }>
            Enviar en APP
        </button>
      
        </div>
        )
    }
}
//Exportando la APP 
export default App

/*PROPS
STATE
COMPONENTDIDMOUNT
Componentwillundmount
Componentdidupdate
Render
 */

//Manejar el componente pasandole propiedades de padre a hijo