// 54. Solicitar nombre y fecha de nacimiento de una persona y devolver la edad.

const fechaActual = new Date()
console.log(fechaActual)

function ingresarDatos(name: string, dateUser: string){
    const fechaUser = new Date(dateUser)
    let edad = fechaActual.getFullYear() - fechaUser.getFullYear()
    console.log(edad)
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const mesNacimiento = fechaUser.getMonth();
    const diaNacimiento = fechaUser.getDate();
  
    if (
      mesActual < mesNacimiento || 
      (mesActual === mesNacimiento && diaActual < diaNacimiento)
    ) {
      edad--;
    }
  
    return edad;
  }

console.log(ingresarDatos("Jean Paul", "1994-09-22"))