// Mostrar el nuevo salario de un empleado si obtuvo un incremento del 8 % sobre el salario

const salario: number = 1355000

function incremento(nombre: string, aumento: boolean){
    const result = aumento ? salario*0.08 + salario : salario
    console.log(result)
    return aumento ? `${nombre} tu nuevo salario es de ${result},` : `${nombre}, tu salario actual es de ${result}`
}


console.log(incremento("Paul", true))
console.log(incremento("Paul", false))