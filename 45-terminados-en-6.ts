// Mostrar en pantalla todos los números terminados en 6 comprendidos entre 25 y 205.

function termiandosEn6() {
    for (let i = 25; i < 205; i++) {
        if (i % 10 === 6) {
            console.log(i)
        }
    }
}

console.log(termiandosEn6())