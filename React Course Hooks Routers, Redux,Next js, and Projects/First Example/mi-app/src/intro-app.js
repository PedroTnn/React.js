import logo from './logo.svg';
import './App.css';
import './main.css';

const estilo2={
  boxShadow:'0 5px 3px rba(0,0,0,0.5)'
}

const estilo =({bg = '#333'})=> ({
  backgroundColor: bg,
  color:'#fff',
  padding:'10px 15px',
  margin:'50px 15px'
})


const Li = ({children})=>{
  return(
  <li className='class-li'>{children}</li>
  )
}
const App = ()=> {
  const valor = 'feliz'
  return (
   <ul className='class-css'>
    <Li estado='feliz'>valor de li</Li>
    </ul>
  );
    
 

}

export default App;
