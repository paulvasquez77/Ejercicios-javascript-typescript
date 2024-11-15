// Elaborar un programa que solicite a un postulante, el número de respuestas correctas, incorrectas y en blanco y muestre su puntaje final, considerando que por cada respuesta correcta obtendrá 10 puntos, respuestas incorrectas obtendrán - 1, y respuestas en blanco tendrá 0.

const respCorrec: number = 10;
const respIncorrec: number = -1;
const respBlanco: number = 0;

function respuestas(correctas: number, incorrectas: number, blanco: number) {
  const result1 = correctas * respCorrec;
  const result2 = incorrectas * respIncorrec;
  const result3 = blanco * respBlanco;
  const result = result1 + result2 + result3;
  console.log(result);
  return `Su puntaje final es de ${result}`;
}

console.log(respuestas(4, 4, 4));
