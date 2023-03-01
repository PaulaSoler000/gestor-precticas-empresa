const url = "json/alumnos.json"
fetch(url)
  .then(response => response.json())
  .then(alumnos => {

const idalumno = localStorage.getItem('idprofesor');
console.log(idalumno)



alumnos.forEach(a => {
    let horasDual = 0;
    let horasFCT = 0;
  
        a.actividades.forEach(act => {

        if (act.dual === "Dual") {
            horasDual += parseInt(act.horas);
        } else if (act.dual === "FCT") {
            horasFCT += parseInt(act.horas);
        }

    })

    const alumnosList = document.querySelector('.alumnos');
    const horadual = document.querySelector('.horasDual');
    const horadualres = document.querySelector('.horasDualRestantes');
    const horaFCT = document.querySelector('.horasFCT');
    const horaFCTres = document.querySelector('.horasFCTRestantes');
    const linkList = document.querySelector('.link');

    const alumnosItem = document.createElement('li');
    alumnosItem.textContent = a.nombre+" "+a.apellido;
    alumnosList.appendChild(alumnosItem);

    const horadualItem = document.createElement('li')
    horadualItem.textContent = horasDual;
    horadual.appendChild(horadualItem);

    const horadualresItem = document.createElement('li');
    horadualresItem.textContent = 360-horasDual;
    horadualres.appendChild(horadualresItem);

    const horaFCTItem = document.createElement('li');
    horaFCTItem.textContent = horasFCT;
    horaFCT.appendChild(horaFCTItem);

    const horaFCTresItem = document.createElement('li');
    horaFCTresItem.textContent = 360-horasFCT;
    horaFCTres.appendChild(horaFCTresItem);

    const linkItem = document.createElement('li');
    const button = document.createElement('button');
    
    button.textContent = 'Mas informacion';
    button.addEventListener("click", function(){
    localStorage.setItem('idalumno', a.id)
    window.open('../indexalumno.html')
});

linkItem.appendChild(button);
linkList.appendChild(linkItem);

})

})