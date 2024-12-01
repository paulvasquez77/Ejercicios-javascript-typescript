// Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original y y su precio con descuento.El descuento lo hace con base a la clave, si la clave es 01 el descuento es del 10 % y si la clave es 02 el descuento es del 20 % (solo existen 2 claves)

const articulo: string = "camiseta"
const precio: number = 50000

function descuento(clave: string){
    if (clave === "01") {
        const precioDescuento = precio * 0.1
        const precioAplicado = precio - precioDescuento
        return `${articulo}, clave:${clave}, "Precio original" ${precio}, "Precio con descuento" ${precioAplicado}`
    } else if (clave === "02") {
        const precioDescuento = precio * 0.2
        const precioAplicado = precio - precioDescuento
        return `${articulo}, clave:${clave}, "Precio original" ${precio}, "Precio con descuento" ${precioAplicado}`
    }else{
        const precioDescuento = "Clave incorrecta"
        return precioDescuento
    }
}

console.log(descuento("01"))