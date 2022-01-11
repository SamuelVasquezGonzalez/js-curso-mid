// PROMESAS:

// Las promesas es un objeto que adentro contiene 2 callbacks
// Uno llamado reject y el otro llamado resolve
// que a su vez representan algo, uno la terminacion de una operacion asycrona y la otra el fracaso de una operacion asyncrona

// sintaxis;

let nombre = "pedro";

const promesa = new Promise((resolve, reject)=>{
    if (nombre != "pedro") reject("lo siento, el nombre no es pedro");
    else resolve(nombre);
});

/*
 esto nos devuelve un especie de objeto con sus otros objetos encapsulados
 no podemos acceder a estos objetos simplemente llamando a su propiedad

 Para llamar a estas propiedades utilizamos un metodo llamado .then() y como parametro le pasamos una funcion que llama un callback

*/
console.log(promesa) // sin llamados a propiedades

// el .then() solo accede al "resolve" si este fue validad, en caso de no ser validada la promesa nos tira el "reject"
promesa.then((resultado)=>{
    console.log(resultado); 
    // en caso de que la promesa nos de error, podemos manejar el error con algo que ya vimos(el catch);
}).catch((e)=>{
    console.log(e);
})

// esto nos sirve si necesitamos manejar muchas validaciones y muchos errores, aparte de ser mas practico y legible, nos disminuye los recursos que utizila el programa