// Dado un monto calcular el descuento considerando que por encima de 1.000.000 el descuento es el 10 % y por debajo de 1.000.000 el descuento es el 2 %.

function calcularDescuento(monto: number): number {
    if (monto > 1000000) {
        return monto * 0.1;
    } else {
        return monto * 0.02;
    }
}

console.log(calcularDescuento(10000));
 