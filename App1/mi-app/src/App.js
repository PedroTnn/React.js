import logo from './logo.svg';
import './App.css';
const Li = ({children} )=>{
  return(
    <li class='hola'>{children}</li>
  )
}
function App() {
  const valor = "Triste"
  return (
   <ul className='class1'> 
   <Li estado = "feliz">valor de li</Li>
   </ul>
 
  );
}

export default App;
