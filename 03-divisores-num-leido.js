// Leer un número entero y mostrar todos los divisores exactos del número comprendidos entre 1 y el número leído.

const numDivisibles = (num) => {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(i)
    }
  }
}

numDivisibles(15)