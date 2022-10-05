import React,{useState,useEffect} from 'react';

import CordenadaFlecha from './cordenadaFlecha';

function App() {
    let [visible, setVisible] = useState(true);

    function ocultar() {
        if (visible=== true) {
            setVisible(false);
        }else setVisible(true);
       
       
      
    }

  

    return(
        <div>
            {visible ? <CordenadaFlecha />: <p>Se oculto la cordenada</p>}
            <button onClick={ocultar}>Ocultar</button> 
        </div>
    )

}

export default App