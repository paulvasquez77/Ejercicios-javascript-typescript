// Realizar un algoritmo que permita pedir 10 números enteros y determine e imprima cuantos son pares, impares, positivos y negativos.

function determinar(num: number[]) {
    const pares = num.filter((pares) => (pares % 2 === 0))
    const impares = num.filter((pares) => (pares % 2 !== 0))
    const positivos = num.filter((pares) => (pares > 0))
    const negativos = num.filter((pares) => (pares < 0))
    console.log(num)
    console.log(pares, impares, positivos, negativos)
}

console.log(determinar([3, -10, 30, 21, 14, -50, -15, 12, 41, -1, 2]))



// Otro metodo

function determinar(num: number[]) {
    // Inicializamos los contadores
    let pares = 0;
    let impares = 0;
    let positivos = 0;
    let negativos = 0;
  
    // Clasificamos los números en una sola pasada
    num.forEach((n) => {
      if (n % 2 === 0) pares++;
      else impares++;
  
      if (n > 0) positivos++;
      else if (n < 0) negativos++;
    });
  
    console.log(`Números: ${num}`);
    console.log(`Pares: ${pares}, Impares: ${impares}`);
    console.log(`Positivos: ${positivos}, Negativos: ${negativos}`);
  }
  
  // Llamada al método
  determinar([3, -10, 30, 21, 14, -50, -15, 12, 41, -1, 2]);