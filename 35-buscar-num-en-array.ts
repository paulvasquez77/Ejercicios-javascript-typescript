// Dado una secuencia de número leídos y almacenados en un vector A y un número leído determinar si dicho número se encuentra o no en el vector.

function buscarNum(arrayA: number[], num: number) {
    for (let i = 0; i < arrayA.length; i++) {
        if(arrayA[i] === num){
            return `Número ${num} encontrado en la posición ${i}`;
        }
    }
    return `Número ${num} no se encuentra en el array.`;
}


const arrayA = [3, 6, 7, 12, 1, 41, 37, 2, 16]
console.log(buscarNum(arrayA, 3))