// HEREDA LAS PROPIEDADES "EventTarget"


// todas los metodos de window, iniciar con un window.(la propiedad)

// open()
// abre una ventana en el navegado que se encuentra por defecto
// su paramentro sera el sitio web o el contexto que queremos cargar, su contenido tambien puede ser una variable con el contexto

let samuelPag = window.open("https://samuelvasquezgonzalez.github.io/portafolium");

// close()
// cierra la ventana que le decimos
// para que funcione le decimos "variableQueAbreLaVentana.close()";

samuelPag.close();


// closed()
// me informa si una ventana de nuestro sitio esta abierta o esta cerrada por medio de booleanos
// "true, si la ventana es cerrada", "false, si la ventana esta abierta"

samuelPag.closed;


// stop()
// deja de cargar la pagina mientras esta carga

// samuelPag.stop();

// print()
// nos abre una ventana del navegador, que nos permite imprimir el contenido en una hoja atravez de una impresora

// print();

// confirm()
// abre un cuadro en la ventana de confirmacion
// "si damos aceptar nos devolvera true", "si damos cancelar, nos devuelve false";

let popo = confirm("¿esta seguro que quiere salir?(prueba)");
console.log(popo);


// screen;
// screen es un objeto, que tiene como propiedades informacion de la ventana, como su alto y ancho

const pantalla = window.screen;
console.log(pantalla);
document.write(`pantalla: <b>${pantalla.pixelDepth}</b> <br>
        alto: <b>${pantalla.availHeight}</b> <br>
        ancho: <b>${pantalla.availWidth}</b> <br>
`);


// screenLeft;
// muestra los pixeles de distancia que hay entre el borde izquierdo de la pantalla y el navegador

const pantallaLeft = window.screenLeft;
document.write("<b>Izquierda: <b/>" + pantallaLeft + "<br>");


// screenTop;
// muestra los pixeles de distancia entre el borde superior de la pantalla y el navegador

const pantallaTop = window.screenTop;
document.write("<b>Arriba:<b/>" + pantallaTop + "<br>");


// scrollX;
// me muestre la cantidad de pixeles desplazados horizontalmente

// const scrollX = window.scrollX;
// alert(scrollX);

// scrollY;
// me muestre la cantidad de pixeles desplazados horizontalmente

const scrollY = window.scrollY;
alert("Tu scroll vertical he desplazado: " + scrollY + " pixeles");



// scroll()
// nos sirve para desplazar el scroll del docuemento abosulamtente, es decir, si bajamos 100 pixeles, quiere decir que estamos en 100 pixeles, si volvemos a ejecutar 100 pixeles, no funcionara porque es absoluto
// tiene dos paramentro, el primero es el eje "X", y el segundo es el eje "Y"

        // 0 = eje x, 100 = eje y
// window.scroll(0, 100);


// scrollTo()
// es casi lo mismo que "scroll()";
// window.scrollTo(0, 100);

// minimize()
// minimiza la ventana
// YA NINGUN NAVEGADOR TIENE SOPORTE PARA ESTE METODO


// resizeBy();
// Redimensiona o cambia el tamaño de la ventana actual en una cantidad especifica
// este cambio de tamaño es absoluto

samuelPag = window.resizeBy(100, 200);

// resizeTo();
// Lo mismo que resizeBy() solo que este cambia el tamaño de forma relativa

samuelPag = window.resizeTo(100, 200);


// moveBy()
// mueve la ventana a una ubicacion relativa

samuelPag = window.moveBy(100, 200);

// moveTo()
// mueve la ventana a una ubicacion absoluta

samuelPag = window.moveTo(100, 200);





// ------------------------- LOCATION ----------------------------- //


// location.href;
// nos devuelve la localizacion de nuestro archivo

const href = window.location.href;
document.write(href + "<br>");

// location.hostname;
// nos devulve el nombre del dominio del servidor web

const dominio = window.location.hostname;
document.write(dominio + "<br>");


// location.pathname
// nos devuelve la ruta de origen del archivo

const origen = window.location.pathname;
document.write(origen);

// location.protocol
// nos devulve el protocolo utilizado en el sitio

const protocol = window.location.protocol;
document.write(protocol);

// location.assing();
// nos carga el contexto que le pasemos como parametro

// window.location.assign("https://youtube.com");