// Elaborar un programa que solicite la edad de 5 personas y muestre cuantos son mayores y menores de edad

function edades(edad: number[]) {
    const mayores = edad.filter((edad) => (edad >= 18))
    const menores = edad.filter((edad) => (edad <= 18))

    return {
        mayores: mayores.length, 
        menores: menores.length
    }
}


console.log(edades([14, 41, 31, 15, 63]))