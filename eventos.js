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