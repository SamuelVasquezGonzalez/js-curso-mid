/* PROBLEMA 1 

    .LA PANTALLA DEBE SER AL MENOS FULL HD
    .PREGUNTARLE SI ESTA SEGURO DE COMPRAR
*/

/* PROBLEMA 2

    .CREAR UN SISTEMA QUE MUESTRE LOS DATOS NECESARIO DEL SITIO WEB

*/


// -------------------------- SOLUCION #1 ---------------------- //

function crearProducto (){

    let container = document.querySelector(".container");

    const pantallaCard = document.createElement("DIV");
    pantallaCard.classList.add("pantalla-card");

    const imagen = document.createElement("img");
    imagen.src = "monitor.jfif";
    imagen.classList.add("monitor");

    const info = document.createElement("DIV");
    info.classList.add("info");

    const pNombre = document.createElement("P");
    pNombre.classList.add("nombre");
    pNombre.innerHTML = "<b>Nombre:</b> Monitor";

    let altura = window.screen.availHeight;
    let anchura = window.screen.availWidth;

    const pResolucion = document.createElement("P");
    pResolucion.classList.add("resolucion");
    pResolucion.innerHTML = `<b>Resolucion:</b> ${altura}x${anchura}`;

    const pPrecio = document.createElement("P");
    pPrecio.classList.add("precio");
    pPrecio.innerHTML = "<b>Precio:</b> " + Math.round(Math.random()*10000);

    const wrapper = document.createElement("DIV");
    wrapper.classList.add("wrapper");

    const boton = document.createElement("button");
    boton.classList.add("comprar");
    boton.innerHTML = "COMPRAR";

    pantallaCard.appendChild(imagen);
    info.appendChild(pNombre);
    info.appendChild(pResolucion);
    info.appendChild(pPrecio);
    pantallaCard.appendChild(info);
    wrapper.appendChild(boton);
    pantallaCard.appendChild(wrapper);
    container.appendChild(pantallaCard);

}

crearProducto()

let comprado = document.querySelector(".comprar");

comprado.addEventListener('click', function (){

    compra = confirm("¿Quieres comprar este monitor?");

    if(compra){
        alert("Monito comprado");
    }else {
        alert("compra cancelada");
    }

});


// ----------------------------------- SOLUCION 2 ----------------------------------- //

const URL = window.location.href;
const hostname = window.location.hostname;
const pathname = window.location.pathname;

document.write(`<b>La URL de este sitio es:</b> ${URL}. <br>
                <b>El dominio de este sitio es:</b> ${hostname}. <br>
                <b>Y este sitio esta en la direccion:</b> ${pathname}. 
`);
