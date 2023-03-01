const url = "json/alumnos.json"
fetch(url)
  .then(response => response.json())
  .then(alumnos => {



const idalumno = localStorage.getItem('idalumno');
console.log(idalumno)

alumnos.forEach(a => {

    if(a.id === idalumno){

       
        
        console.log(a.nombre + " " + a.apellido)

        document.getElementById("nombreUser").innerHTML =  a.nombre + " " + a.apellido;

        document.getElementById("dato_nombre").innerHTML = a.nombre;
        document.getElementById("dato_apellidos").innerHTML = a.apellido;
        document.getElementById("dato_empresa").innerHTML = a.empresa;
        document.getElementById("dato_profesor").innerHTML = a.profesor;
        document.getElementById("dato_horasDual").innerHTML = a.dual;
        document.getElementById("dato_horasFCT").innerHTML = a.fct;


        let horasDual = 0;
        let horasFCT = 0;

        
        a.actividades.forEach(act => {

            if (act.dual === "Dual") {
                horasDual += parseInt(act.horas);
            } else if (act.dual === "FCT") {
                horasFCT += parseInt(act.horas);
            }

            // Agregar el elemento correspondiente a la lista adecuada
            const fechaList = document.querySelector('.fecha');
            const dualList = document.querySelector('.dual');
            const horasList = document.querySelector('.horas');
            const actividadList = document.querySelector('.actividad');
            const observacionesList = document.querySelector('.observaciones');
      
            const fechaItem = document.createElement('li');
            fechaItem.textContent = act.fecha;
            fechaList.appendChild(fechaItem);
      
            const dualItem = document.createElement('li');
            dualItem.textContent = act.dual;
            dualList.appendChild(dualItem);
      
            const horasItem = document.createElement('li');
            horasItem.textContent = act.horas;
            horasList.appendChild(horasItem);
      
            const actividadItem = document.createElement('li');
            actividadItem.textContent = act.actividad;
            actividadList.appendChild(actividadItem);
      
            const observacionesItem = document.createElement('li');
            observacionesItem.textContent = act.observaciones;
            observacionesList.appendChild(observacionesItem);
          });

          document.getElementById("dato_horasDual").innerHTML = horasDual;
        document.getElementById("dato_horasFCT").innerHTML = horasFCT;


    }

})

})

