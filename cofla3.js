const alumnos = [{
    nombre: "Samuel Vasquez",
    email: "samuelvasquez@gmail.com",
    materia: "Matematicas"
},{
    nombre: "Emanuel Moreno",
    email: "emanuelmoreno@gmail.com",
    materia: "Fisica"
},{
    nombre: "Maxiemiliano Betancur",
    email: "maxibetancur@gmail.com",
    materia: "Sociales"
},{
    nombre: "Juan Jose",
    email: "juanjose@gmail.com",
    materia: "Biologia"
},]


const boton = document.querySelector(".boton-confirmar");

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item correo">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
            <option value="Semana 3">Semana 3</option>
            <option value="Semana 4">Semana 4</option>
        </select>
    </div>`;

    document.querySelector(".grid-container").innerHTML += htmlCode;
};

let container = document.querySelector(".grid-container");
boton.addEventListener("click", ()=>{
     let aceptar = confirm("¿Estas seguro que quieres confirmar los estudiantes?");
     if(aceptar){
        container.classList.add("list-confirmado");
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        boton.innerHTML = "Has CONFIRMADO!!";
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
     }
});

boton.removeEventListener("click");