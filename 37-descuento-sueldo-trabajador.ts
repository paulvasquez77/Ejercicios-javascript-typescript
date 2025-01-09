// A un trabajador le descuentan de su sueldo el 10 % si su sueldo es menor o igual a 1.000.000, por encima de 1.000.000 y hasta 2.000.000 el 5 % del adicional, y por encima de 2.000.000 el 3 % del adicional.Calcular el descuento y sueldo neto que recibe el trabajador dado su sueldo.

function descuentoTrabajador(sueldo: number){
    if (sueldo <= 1000000){
        return sueldo * 0.1;
    } else if (sueldo > 1000000 && sueldo <= 2000000){
        return sueldo * 0.05;
    } else {
        return sueldo * 0.03;
    }
}

console.log(descuentoTrabajador(1000000));