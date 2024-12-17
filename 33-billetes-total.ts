// Dada una cantidad de billetes de 5, 10 y 20mil, mostrar la cantidad total de dinero que se tiene

function totalBilletes(de5: number, de10: number, de20: number) {
    const total5 = de5 * 5000
    const total10 = de10 * 10000
    const total20 = de20 * 20000
    return `tienes ${total5} en billetes de 5, ${total10} en billetes de 10, ${total20} en billetes de 20, para un total de ${total5 + total10 + total20}`
}

console.log(totalBilletes(4, 6, 2))