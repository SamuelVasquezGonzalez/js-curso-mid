// ---------- COFLA 5 PROBLEMAS ----------- //

/*

    Problema 1:

    .Crear un sistema que muetre toda la informacion de las materias y las muestre de forma ordenada

*/

const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "fisica",
        nota: 7
    },
    
    {
        nombre: "Algebra",
        nota: 9
    },
    
    {
        nombre: "Quimica",
        nota: 4
    },
    
    {
        nombre: "Etica",
        nota: 8
    },
    
    {
        nombre: "Biologia",
        nota: 6
    }
]
const obtenerMaterias = (id) =>{
    return new Promise ((resolve, reject)=>{
        materia = materias[id];
        if(materia == undefined) reject("la materia no existe");
        else setTimeout(resolve(materia),5000);
    })
}


const devolverMateria = async ()=>{
    let materia = [];

    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMaterias(i);
        let htmlCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>
        `;
        materiasHTML.innerHTML += htmlCode;
        
    }
}

devolverMateria()