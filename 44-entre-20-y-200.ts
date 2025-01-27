// Mostrar en pantalla todos los pares comprendidos entre 20 y 200.

function entre20y200() {
    for (let i = 20; i <= 200; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

console.log(entre20y200())