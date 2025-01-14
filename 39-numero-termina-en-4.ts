// Leer un número entero y determinar si es un número terminado en 4.

function numTerminado(num: number) {
    if(num % 10 === 4){
        return 'Correcto, termina en 4'
    }else{
        return "Paila"
    }
}

console.log(numTerminado(24))