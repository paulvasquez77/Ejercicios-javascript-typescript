// Determinar si un número es positivo o negativo

function determinar(num: number) {
  if (num >= 1) {
    return 'El numero es positivo';
  } else if (num === 0) {
    return `el ${num} no es ni negativo ni positivo`;
  } else {
    return 'El numero es negativo';
  }
}

console.log(determinar(12));
