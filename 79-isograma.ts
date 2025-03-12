// Crear una función llamada esIsograma que reciba una palabra como parámetro y determine si es un isograma (palabra sin letras repetidas). La función debe devolver true si es un isograma o false en caso contrario. Ignorar espacios y considerar mayúsculas y minúsculas como la misma letra.

function esIsograma(palabra: string){
    const guardarPalabra: string[] = []
    for(const letra of palabra){
        if(guardarPalabra.includes(letra)){
            return true
        }
        guardarPalabra.push(letra)
    }
    return false
}

console.log(esIsograma("casa"))