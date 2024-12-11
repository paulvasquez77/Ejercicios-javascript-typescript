let minutosPorDia: number = 1440; // Minutos en un día
let minutosPorHora: number = 60;  // Minutos en una hora

function calcularTiempo(minutosIngresados: number) {
  const dias = Math.floor(minutosIngresados / minutosPorDia); // Días completos
  const restoMinutosDia = minutosIngresados % minutosPorDia; // Minutos sobrantes después de calcular días
  const horas = Math.floor(restoMinutosDia / minutosPorHora); // Horas completas
  const minutos = restoMinutosDia % minutosPorHora;          // Minutos restantes

  return `El tiempo que ingresaste corresponde a ${dias} día(s), ${horas} hora(s), y ${minutos} minuto(s).`;
}

console.log(calcularTiempo(1604)); // Prueba con 1604 minutos
