let registros = [];

document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("form-registro").addEventListener("submit",agregarRegistro ); 
});

function agregarRegistro(){
    //event.preventDefault(); 
    var nom = document.getElementById("username")?document.getElementById("username").value:undefined;
    var pass = document.getElementById("password")?document.getElementById("password").value:undefined;
    var resp = document.getElementById("respuesta_de_seguridad")?document.getElementById("respuesta_de_seguridad").values:undefined;

    const reg = {
        nombre: nom,
        password: pass,
        respuesta:  resp,
    }

    registros.push(reg)

 
        const ordenados = ordenarArreglo();
        const alfanumericos = obtenerUsername();
        const filtrar = filtrarUsername();
    
        // console.log(registros)
        console.log("registros Organizados: ", ordenados);
        // console.log("Nombres alfanuméricos: ", alfanumericos);
        // console.log("Nombre de usuario conuna longitud mayor a 10 caracteres", filtrar);
        // this.submit();


}

// function ordenarArreglo(){

//     const registrosOrdenados = registros.sort(function(a,b){
//         a.nombre< b.nombre
//     })

//     return registrosOrdenados;
// }

function ordenarArreglo(){

    const registrosOrdenados = registros.sort(function(a,b){
        return a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase());
    })

    const nombresRegistrosOrdenados = registrosOrdenados.map((item)=>{
        return item.nombre
    })

    return nombresRegistrosOrdenados;
}

function obtenerUsername(){
    let usernames = []; //arreglo de nombres alfanuméricos
    const expre = /(?=.*?[0-9])/g;

    registros.forEach((e,i) =>  {
        if(expre.test(e.nombre))
            usernames.push({nombre:e.nombre})        
    });
    return usernames;
}

function filtrarUsername(){

    let filtro = []; //arreglo de nombres filtrados  que contengan

    registros.forEach((e,i) => {
        if(e.nombre.length >10)
            filtro.push(e)

    });

    return filtro;


}

module.exports.registros = registros;
module.exports.filtrarUsername = filtrarUsername;
module.exports.obtenerUsername = obtenerUsername;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.agregarRegistro = agregarRegistro;



