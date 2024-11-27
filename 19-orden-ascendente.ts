// Realizar un programa que lea 2 números y los imprima en orden ascendente

function ordenNum(num1: number, num2: number){
    const newNumbers = [num1, num2]
    const algo = newNumbers.sort()
    console.log(algo)
}

console.log(ordenNum(5, 4))