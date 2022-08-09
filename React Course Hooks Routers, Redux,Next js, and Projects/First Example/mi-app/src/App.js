import logo from './logo.svg';
import './App.css';
//const app =()=>{}
//CREAR UN COMPONENTE EL CUAL SEAN 4 CAJAS CADA UNA DE DIFERENTE COLOR
//PERO UTILIZANDO LAS MISMAS PROPIEDADES
const estilo =(bg = '#222') =>({
  backgroundColor: bg,
  color:'#000',
  padding:'10px 15px',
  margin:'10px 15px',
  width:'250px',
  height:'250px'
})

const Li = ({children}) =>{
  return(
  <li style = {{...estilo({bg:'#000'})}}
  className= 'clase-li'>{children}</li>
  )
}
function App() {
  const valor = 'triste'
  return (
   
     <ul style = {estilo('#750')} className = 'clase-css'>
      <Li  estado = 'feliz'>Valor</Li>
      <Li  estado = 'feliz'>Valor</Li>
      <Li  estado = 'feliz'>Valor</Li>
      <Li  estado = 'feliz'>Valor</Li>
      </ul>
      
      
  );
    
 

}

export default App;
