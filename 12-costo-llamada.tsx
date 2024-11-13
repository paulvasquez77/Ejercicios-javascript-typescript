// Determinar el costo que se debe pagar por una llamada de 30 minutos si los primeros 10 minutos se cobra a 100 pesos y el resto a 150 pesos

function costoLlamada() {
  const totalMinutos: number = 30;
  const primeros = (totalMinutos - 20) * 100;
  const restantes = (totalMinutos - 10) * 150;
  const total = primeros + restantes;
  return `En total debes pagar ${total} pesos`;
}

console.log(costoLlamada());
