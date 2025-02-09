// Leer tres números enteros y mostrarlos ascendentemente.

function numOrdenados(nums: number[]) {
    const ordenados = nums.sort((a, b) => a - b)
    return ordenados
}

console.log(numOrdenados([21, 11, 43]))

