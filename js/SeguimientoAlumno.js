//añadir actividad
var plantilla = document.querySelector("template")
var tabla = document.querySelector("tbody")


function getActividad() {

  return {
    fecha: document.querySelector("input#fecha").value,
    dual: document.querySelector("select#tipoPracticas").value,
    horas: document.querySelector("input#horasRealizadas").value,
    actividad: document.querySelector("input#Actividad").value,
    observaciones: document.querySelector("textarea#comment").value,
  }
}

function agregarActividad(actividad) {


  let nuevaFila = plantilla.content.cloneNode(true)


  nuevaFila.querySelector(".fecha").textContent = actividad.fecha
  nuevaFila.querySelector(".dual").textContent = actividad.dual
  nuevaFila.querySelector(".horas").textContent = actividad.horas
  nuevaFila.querySelector(".actividad").textContent = actividad.actividad
  nuevaFila.querySelector(".observaciones").textContent = actividad.observaciones

  var editbtn = document.createElement("button")
  editbtn.className = "btn btn-link" + "bi bi-pencil"

  var delbtn = document.createElement("button")
  delbtn.className = "btn btn-link" + "bi bi-trash"
  delbtn.setAttribute("data-id", "boton-2")

  delbtn.addEventListener("click", function (event) {
    var fila = event.target.parentElement.parentElement;
    fila.parentElement.removeChild(fila);
  })

  nuevaFila.querySelector(".botones").appendChild(editbtn)
  nuevaFila.querySelector(".botones").appendChild(delbtn)

  tabla.appendChild(nuevaFila)
  document.querySelector("form").reset()

}



document.querySelector("form").addEventListener("submit",
  (ev) => {


    ev.preventDefault()

    agregarActividad(getActividad())
  })

//cargar datos

const url = "json/alumnos.json"
fetch(url)
  .then(response => response.json())
  .then(alumnos => {

    const idalumno = localStorage.getItem('idalumno');

    alumnos.forEach(a => {
      if (a.id === idalumno) {

        const tbody = document.querySelector('tbody');

        a.actividades.forEach(activ => {

          let nuevaFila = plantilla.content.cloneNode(true)


          nuevaFila.querySelector(".fecha").textContent = activ.fecha
          nuevaFila.querySelector(".dual").textContent = activ.dual
          nuevaFila.querySelector(".horas").textContent = activ.horas
          nuevaFila.querySelector(".actividad").textContent = activ.actividad
          nuevaFila.querySelector(".observaciones").textContent = activ.observaciones


          var editbtn = document.createElement("button")
          editbtn.className = "btn btn-link" + "bi bi-pencil"

          var delbtn = document.createElement("button")
          delbtn.className = "btn btn-link" + "bi bi-trash"
          delbtn.setAttribute("data-id", "boton-2")

          delbtn.addEventListener("click", function (event) {
            var fila = event.target.parentElement.parentElement;

            a.actividades.splice(fila.dataset.index, 1);
            console.log(a.actividades)

            fila.parentElement.removeChild(fila);

            fetch('alumnos.json',{
              method: 'POST',
              body: JSON.stringify(alumnos)
            });

          })

          nuevaFila.querySelector(".botones").appendChild(editbtn)
          nuevaFila.querySelector(".botones").appendChild(delbtn)

          tbody.appendChild(nuevaFila)
        })
      }


    })

  })