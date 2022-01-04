// -------------------------------- EVENTOS ------------------------------- //

// para remover el "addEventListener" de un elemento podemos utilizar: 
// "elemento.removeEventListener('evento', nombreDeLaFuncion);"
// Ejemplo:

const button = document.querySelector(".button");

// addEventListener()
// le asignamos una escucha de eventos al elemento y como parametros le pasamos primero el nombre del evento y luego la funcion. La funcion puede ser aparte o dentro del EventListener
button.addEventListener('click', enviarMensaje);

function enviarMensaje (){
    alert("Hola, Guapo Hermoso");
    // Removemos la escucha de eventos con "elemento.removeEventListener('evento', nombreDeLaFuncion);"
    button.removeEventListener('click', enviarMensaje);
}


/*
    // ---------------------- EVENTOS DE MOUSE ---------------------------------- //

    .click - el evento ocurre con un doble click
    . dblclick - el evento ocurre con un doble click
    .mouseover - el evento ocurre cuando el puntero pasa por el elemento
    .mouseout - el evento ocurre cuando el mouse deja de tocar del elemento
    .contextmenu - abre un cuadro del navegador al hacer click derecho
    .mouseleave - el evento ocurre cada que el mouse se mueve dentro del elemento
    .mouseup - el evento ocurre cuando damos click en un elemento y sin dejar de presionar el boton, lo llevamos a otro elemento
*/


/*
    // --------------------------------------- EVENTOS DEL TECLADO --------------------------- //

    .keypress - el evento ocurre cuando se presiona una tecla y se deja de presionar
    .keydown - el evento ocurre  cuando se presiono la tecla
    .keyup - el evento ocurre cuando se suelta una tecla dentro del elemento, si se deja de presionar afuera, no se ejecuta

*/

/*
    // -------------------------------------- EVENTOS DE INTERFAZ ------------------------------ //

    .error - ocurre cuando sucede un error durante la carga de un archivo multimedia
    .load - ocurre el evento cuando el sitio ha terminado de cargar
    .beforeunload - ocurre el evento cuando te vas del sitio
    .unload - ocurre el evento antes de que te vayas del sitio
    .resize - el evento ocurre cuando cambia la resolucion del documento html
    .scroll - el evento ocurre cuando se hace scroll en el documento html
    .select - el evento ocurre despues de que se selecciona in <input> o un <textarea>

*/

// let img = document.querySelector(".imagen");

// img.addEventListener("load", ()=> {
//     alert("la imagen ha cargado");
// });

addEventListener("resize", ()=>{
    console.log("el tamaño ha cambiado");
});

addEventListener("scroll", ()=> {
    console.log("se ha scrolleado la pagina");
});


const pene = document.querySelector(".pene");
const contenido = document.querySelector(".contenido");

pene.addEventListener("select", ()=> {
    console.log("SE ha seleccionado el texto");
})

pene.addEventListener("keyup", (e)=> {
    letra = e.key;
    nuevoCont = `La ultima tecla presionada fue <b>${letra}</b>`;
    contenido.innerHTML = nuevoCont;

});


// ------------------------------------------------- TIMERS O TEMPORIZADORES --------------------- //

// setTimeout()
// ejecuta un bloque de codigo UNA VEZ en un tiempo definido por nosotros
const popo = setTimeout(()=>{
        console.log("Hola ");
    // al final de la llave, definimos el parametro del tiempo como lo vemos aqui abajo(el tiempo debe ser en milisegundos)
},5000);

// para hacer que el temporizador nunca se ejecute lo guardamos en una variable y despues de nuestro temporizador colocamos: clearTimeout(nombre de la variable donde se guardo el temporizador)

// clearTimeout(popo);


// serInterval()
// nos ejecuta un bloque de codigo cada vez que pase el tiempo definido por nosotros

const popo2 = setInterval(() => {
    document.write("hola mi amor    ");
}, 1000);


// para terminar el intervalo, asigamos una variable y con clearInterval(nombre de la variable)

clearInterval(popo2);


// PARA LLAMAR A LOS EVENTOS DEFINIDOS POR EL NAVEGADOR PONEMOS COMO PARAMETRO EN UNA FUNCION DE UN ELEMENTO "(e)" Y LUEGO EN EL BLOQUE DE LA FUNCION LE HAVEMOS UN LLAMADO AL "PARAMETRO.EVENTO", 