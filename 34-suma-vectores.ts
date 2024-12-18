// Dado dos vectores A y B de 15 elementos cada uno, obtener un vector C donde la posición i se almacene la suma de A[i] + B[i].

let sumArray: number[] = []

function sumaVectores(arrayA: number[], arrayB: number[]): number[] {
    if (arrayA.length !== arrayB.length) {
        console.error("Los vectores no tienen la misma longitud.");
        return [];
      }

      for (let i = 0; i < arrayA.length; i++) {
        sumArray.push(arrayA[i] + arrayB[i]);
      }
    
      return sumArray; // Retornar el vector con las sumas
}

const vectorA = [12, 3, 7, 2, 55, 61, 17, 8, 93, 10];
const vectorB = [14, 22, 31, 42, 15, 16, 47, 28, 19, 100];

console.log(sumaVectores(vectorA, vectorB));