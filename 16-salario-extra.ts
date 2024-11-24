// A un trabajador le pagan según sus horas trabajadas y la tarifa está a un valor por hora.Si la cantidad de horas trabajadas es mayor a 40 horas, la tarifa por hora se incrementa en un 50 % para las horas extras.Calcular el salario del trabajador dadas las horas trabajadas y la tarifa.

const tarifa = 5416

function salarioHorasExtras(horasTrabajadas: number, horasExtras?: number){
    if(horasTrabajadas >= 40){
        const salario: number = tarifa * horasTrabajadas
        const nuevaTarifa: number =  tarifa * 0.5 + tarifa
        const salarioExtra: number = nuevaTarifa * horasExtras
        const total = salario + salarioExtra
        return `Su salario este mes es de ${total} con un valor en horas extras de ${salarioExtra}`
    }else{
        const salario: number = tarifa * horasTrabajadas
        return `Su salario esta semana es de: ${salario}`
    }
}

console.log(salarioHorasExtras(40, 4))