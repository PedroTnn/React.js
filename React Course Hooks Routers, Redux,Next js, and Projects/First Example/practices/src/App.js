import React from "react";
import{Component} from 'react'

//Pasar unicamente propiedades de padre a hijo
//Esta es una buena practica de programacion
class Button extends Component{
    constructor(props){
        super(props)
        console.log('constructor',props)
    }
    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps,prevState){
            console.log('componentdid Update',prevProps,prevState)
    }

    componentWillMount(){
        console.log('desmontando componentes',this.props,this.State)
    }
    render(){
        console.log('Renderizando')
        return(
             <button onClick={()=>this.setState({prop:1})}>
                Enviar
             </button>
        )
    }
}

class App extends Component{
    state = {valor:3}
    render(){
        
        //ESTADO ES EL ALGO QUE SE PUEDE ACCEDER
        //A LOS COMPONENTES CREADOS CON CLASE
        console.log(this.state)
        return(
            
            <div>
                <p>Hola mundo</p>
                <Button chanchito='feliz'/>
                <button className={`${this.state.valor}`} 
                onClick={()=> this.setState({valor:2}) }>Enviar en la APP</button>
            </div>
            
        )
    }
}
export default App;
