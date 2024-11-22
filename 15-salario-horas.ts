// Dada las horas trabajadas de una persona y el valor por hora.Calcular su salario e imprimirlo.Si su salario es menor a 500.000 pesos debe sacar un mensaje que diga “Gana menos del mínimo”

const valorHoras:number = 3500

function horasTrabajadas(horas: number){
    const valor: number = valorHoras * horas
    console.log(valor)
    return valor >= 500000 ? `Su salario actual es de ${valor}, gana mas del minimo` : "usted gana menos del minimo actual"
}

console.log(horasTrabajadas(160))