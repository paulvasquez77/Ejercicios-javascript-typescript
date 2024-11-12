// Dados dos números calcula la suma, la resta, la multiplicación y división

function operaciones(num1: number, num2: number){
    const sum: number = num1 + num2
    const rest: number = num1 - num2
    const multi: number = num1 * num2
    const divi: number = num2 / num1
    console.log({sum, rest, multi, divi}) 
}

operaciones(4, 8)