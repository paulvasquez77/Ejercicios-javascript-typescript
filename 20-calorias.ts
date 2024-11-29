// Una persona enferma, que pesa 70kg, se encuentra en reposo y desea saber cuántas calorías consume su cuerpo durante todo el tiempo que realice una misma actividad.Las actividades que tiene permitido realizar son únicamente dormir o estar sentado en reposo.Los datos que se tienen son: que estar dormido consume 1.08 calorías por minuto y estar sentado en reposo consume 1.66 calorías por minuto

const caloriasDormido = 1.08
const caloriasreposo = 1.66

function calorias(tiempoDormido: number, tiempoReposo: number){
    const CalculoDormido: number = (tiempoDormido * 60) * caloriasDormido
    const arregloDormido: string = CalculoDormido.toFixed(2)
    const calculoReposo: number = (tiempoReposo * 60) * caloriasreposo
    const arregloReposo: string = calculoReposo.toFixed(2)
    console.log(arregloDormido, arregloReposo)
    return `Quemaste ${arregloDormido} durmiendo ${tiempoDormido} horas, y quemaste en ${arregloReposo} en reposo en ${tiempoReposo} horas`
}

console.log(calorias(6, 8))