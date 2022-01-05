
// Try... Catch

// Sintaxis
// el "try" debe estar acompañado obligatoriamente del "catch" o del "finally"

// en "try" ponemos el error que queremos
// si no hay error, el "Catch" no se ejecutara
try {
wdwdwfwefwe
} 

// hay 2 tipos de "catch", en incondicional que se ejecuta si no tiene condicionales adentro y el condicional que se ejecuta y tiene adentro una o mas condiciones
// automaticamente el "catch" tomara el error del "try" y se lo pasara al parametro "error", luego podemos trabajar con el error como queramos 
catch(error){
    console.log("Lo sentimos, hubo un error de referencia");

// El finally, se ejecutara pase lo que pase, no importa si no hay un error o se esta haciendo otra cosa
}finally{
    console.log("me la mama un gallinazo tu programa");

}

console.log(" ");
console.log(" ");
console.log(" ");
// AHORA CON UN CATCH CONDICIONAL

try{
    gonzaloescacorro = "pene"
}

catch(popo){
    if(3 > 2){
        console.log("efectivamente, gonzalo es cacorro");
    }else{
        console.log("chupame el peneee");
    }
}finally{
    console.log("bueno pene");
}