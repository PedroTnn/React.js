import React from 'react'
import Button from './btn'
const arr = [
    'chanchito feliz',
    'chanchito emocionado',
    'chanchito triste',

]
const App = ()=>{
    const miVariable = false
    if (miVariable) {
        return <p>Mi variable dio true</p>
    }
    return(
    <div>
        <h1 onClick={(e) => console.log('click',e)}>Hola Mundo</h1>
        {arr.map(el => <p key={el}>{el}</p>)}
        <Button onClick={() => console.log('clickeado')}></Button>
        
    </div>
    )

}

export default App