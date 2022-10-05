function FormularioNumeros(propiedades) {
    return(
        <form onSubmit={propiedades.OnSumar}>
        <p>
        Ingrese primer valor 
        <input type="number" name="valor1"></input>
      </p>
      <p>
        Ingrese el segundo valor 
        <input type="number" name="valor2"></input>
      </p>
      <input type="submit" value="Sumar"></input>
        </form>
    );
}

export default FormularioNumeros;