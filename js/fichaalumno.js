const url = "json/alumnos.json"
fetch(url)
  .then(response => response.json())
  .then(alumnos => {

const idalumno = localStorage.getItem('idalumno');
console.log(idalumno)

let horasDual = 0;
let horasFCT = 0;

alumnos.forEach(a => {

  

    if(a.id === idalumno){

        a.actividades.forEach(act => {

        if (act.dual === "Dual") {
            horasDual += parseInt(act.horas);
        } else if (act.dual === "FCT") {
            horasFCT += parseInt(act.horas);
        }

    })
        
        console.log(a.nombre + " " + a.apellido)

        document.getElementById("nombreUser").innerHTML =  a.nombre + " " + a.apellido;

        document.getElementById("dato_nombre").innerHTML = a.nombre;
        document.getElementById("dato_apellidos").innerHTML = a.apellido;
        document.getElementById("dato_dni").innerHTML = a.dni;
        document.getElementById("dato_nacimiento").innerHTML = a.fecha;
        document.getElementById("dato_email").innerHTML = a.correo;
        document.getElementById("dato_tef").innerHTML = a.telefono;
        document.getElementById("dato_empresa").innerHTML = a.empresa;
        document.getElementById("dato_profesor").innerHTML = a.profesor;
        

    }

    document.getElementById("dato_horasDual").innerHTML = horasDual;
    document.getElementById("dato_horasFCT").innerHTML = horasFCT;
    document.getElementById("dato_horasDualRestante").innerHTML = 360-horasDual;
    document.getElementById("dato_horasFCTRestante").innerHTML = 360-horasFCT;

})

})
