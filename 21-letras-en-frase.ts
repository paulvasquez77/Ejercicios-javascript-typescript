//Escribe una función que tome como entrada una cadena de texto y un caracter y que devuelva el numero de veces que está el caracter dentro de la cadena

function contarCaracteres(cadena: string, letra: string){
    let contador: number = 0
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] === letra){
            contador++
        }
    }
    return contador
}

console.log(contarCaracteres("parangaricutirimuara", "a"))