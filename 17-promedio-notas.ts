// Determinar si un alumno aprueba o reprueba un curso, sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a 3, 5 y reprueba en caso contrario.

function promedio(nota1:number , nota2:number , nota3:number){
    const sumatoria = (nota1 + nota2 + nota3) / 3
    if (sumatoria >= 3) {
        return `Tu promedio es de ${sumatoria}, APROBASTE EL CURSO`
    }else{
        return `Lo siento tienes que repetir el año, perdedor`
    }
}

console.log(promedio(4, 2, 4))