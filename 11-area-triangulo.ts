// Mostrar el área de un triángulo

function areaTriangulo(base: number, altura: number){
    const calcular: number = base * altura / 2
    return `El area de un triangulo es ${calcular} metros cuadrados`
}

console.log(areaTriangulo(5, 7))