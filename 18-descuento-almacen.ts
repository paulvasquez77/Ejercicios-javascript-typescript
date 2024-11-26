// En un almacén se hace un 20 % de descuento a los clientes cuya compra supere los $100.000.Cuál sería la cantidad que pagara una persona por su compra ?

const compraSuperior: number = 100000
const descuento: number = -0.2

function compraAlmacen(compra: number){
    if (compra >= compraSuperior) {
       const descuentoAplicado: number = compra * (descuento)
       const total = compra + descuentoAplicado
        return `Porque realizaste una compra superior a ${compraSuperior} te obsequiamos el "20%" de descuento, Tu total es de ${total}`
    }else{
        return `Tu total es de ${compra}`
    }
}

console.log(compraAlmacen(150000))
console.log(compraAlmacen(99000))