function ordenarNumeros() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let num3 = parseFloat(prompt("Ingrese el tercer número:"));
  
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      alert("Por favor, ingrese solo números.");
      return;
    }
  
    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
  
    let menor = numeros[0];
    let medio = numeros[1];
    let mayor = numeros[2];
  
    let resultado = document.getElementById("resultado");
  
    if (num1 === num2 && num2 === num3) {
      resultado.innerHTML = `
        <p>Los números son iguales: ${num1}, ${num2}, ${num3}</p>
      `;
    } else {
      resultado.innerHTML = `
        <p>Orden de mayor a menor: ${mayor}, ${medio}, ${menor}</p>
        <p>Orden de menor a mayor: ${menor}, ${medio}, ${mayor}</p>
      `;
    }
  
    console.log(`Orden de mayor a menor: ${mayor}, ${medio}, ${menor}`);
    console.log(`Orden de menor a mayor: ${menor}, ${medio}, ${mayor}`);
  }