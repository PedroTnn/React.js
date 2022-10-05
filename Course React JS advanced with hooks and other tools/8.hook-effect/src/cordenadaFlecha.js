import React,{useState,useEffect} from 'react';

function CordenadaFlecha(){
    const [position, setPosition] = useState({x:0,y:0})

    useEffect(() => {
            window.addEventListener('mousemove',fijarPosicion);
            return()=>{
                window.removeEventListener('mousemove',fijarPosicion);
                console.log('se borro el registro de eventos')
            };
})

function fijarPosition(event){
    setPosition({ x: event.clientX, y:event.clientY})
}
return(
    <div>
        <p>
            ({position.x},{position.y})
        </p>
    </div>
);
}

export default CordenadaFlecha