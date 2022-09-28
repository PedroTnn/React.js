

function calcularSuma(event){
    event.preventDefault();
    const valor1 = parseInt(event.target.valor1.value);
    const valor2 = parseInt(event.target.valor2.value);
    const suma = valor1 + valor2;
    alert(`La suma es: ${suma}`)
  }


 
  export default calcularSuma
