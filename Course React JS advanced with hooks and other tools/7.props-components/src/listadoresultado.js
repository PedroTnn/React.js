


function ListadoResultado(propiedades) {
    return(
        <ul>
            {propiedades.resultado.map
            (e => <li>{e.valor1} y  {e.valor2} es igual a {e.resultado} </li>)}
        </ul>
    )
}

export default ListadoResultado