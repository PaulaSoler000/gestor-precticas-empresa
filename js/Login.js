

//Login

const botonlogin = document.getElementsByClassName('login')

function login(){


let usuario = document.getElementById('usuario').value;
let contraseña = document.getElementById('contraseña').value;

const url = "json/alumnos.json"
fetch(url)
  .then(response => response.json())
  .then(alumnos => {
alumnos.forEach(a => {
 
        if(a.correo === usuario && a.contraseña === contraseña){

            console.log("Te has registrado!")

            localStorage.setItem('idalumno', a.id)
            window.open('../indexalumno.html')   
        }

        else{
            console.log("falla el if")
        }
    }

    )

})

const profesores = "json/profesores.json"
fetch(profesores)
  .then(response => response.json())
  .then(profesores => {
profesores.forEach(p => {
 
        if(p.correo === usuario && p.contraseña === contraseña){

            console.log("Te has registrado!")

            localStorage.setItem('idprofesor', p.id)
            window.open('../listadoprofesor.html')   
        }

        else{
            console.log("falla el if")
        }
    }

    )

})

}



//FIN Login