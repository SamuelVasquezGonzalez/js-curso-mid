// Primero ejemplo para entender bien el await n' async;

const objeto = {
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3",
    propiedad4 : "valor4"
}

const obtenerInformacion = (text)=> {
    return new Promise((res, rej)=>{
        setTimeout(()=> {res(text)},Math.random()*200);
    })
}

// obtenerInformacion().then(resultado => console.log(resultado));

// para utiliar el await necesitamos tener una funcion asincrona, la crearemos ahora


// el await accede al valor al que retorna la promesa, y hasta que un await no haya devuelto nada, no devolvera otro await dentro de una funcion

// // las funciones asincronas trabajan con promesas
// const mostrarResultado = async ()=>{
//     resultado = await obtenerInformacion();
//     console.log(resultado);
// }

// mostrarResultado();

const obtenerData = async ()=> {
    data1 = await obtenerInformacion("1: pito");
    data2 = await obtenerInformacion("2: jose");
    data3 = await obtenerInformacion("3: mario");
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

obtenerData();

