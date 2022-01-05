
// switch

// sintaxix

let expr = "Mandaraaaa";

// Lo que hace "switch" es analizar el contenido de la variable, es decir, segun en lo que haya en su contenido es lo que mostrara. Aqui le estamos diciendo que; Analizame la variable "expr" en caso de que su contenido sea "Banana" ejecutame algo y asi con cada uno de los casos


// los "case" serian como un "if" "else if"

//     como parametro va la variable que analizara
switch(expr){
        // como "case" ira el contenido que buscara en la variable
    case "Banana": 
        // Definimos lo que hara en caso de que encuentre el valor
        console.log("Esto es una banana");
        // terminamos el programa
        break;
    case "Pera": 
        console.log("Esto es una Pera");
        break;
    case "Mandarina": 
        console.log("Esto es una Mandarina");
        break;

    //  En Caso de que ninguna sea valida: Ejecutamos un "default:" que seria como un "else"
    default:
        console.log("No es ninguna");
}