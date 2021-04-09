/*forma vieja para recuperar datos de una API
const traerDatos = (url, callback) =>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
           const informacion = JSON.parse(request.responseText);
           callback(undefined, informacion);
        } else if(request.readyState === 4){
            callback("Hubo un error Perri", undefined);
        }
    });
    request.open("GET", url)
    request.send();
}
*/
// const p = document.getElementById('mh');
// const traerDatos = (url) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const informacion = JSON.parse(request.responseText);

//         resolve(informacion);
//       } else if (request.readyState === 4) {
//         reject("Hubo un error perri");
//       }
//     });

//     request.open("GET", url);
//     request.send();
//   });
// };

// traerDatos('https://jsonplaceholder.typicode.com/todos')
//     .then((datosObtenidos) => {
//         console.log("Aca estan", datosObtenidos);
//         console.dir(datosObtenidos)
//        const mgmg = datosObtenidos[0].title
//        p.innerHTML = mgmg
//         return traerDatos('https://pokeapi.co/api/v2/pokemon');
//     })
//     .then((otrosDatos) => {
//         console.log("Aca tenes otros", otrosDatos);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


    //fetch es similiar a lo anterior
    //async await

    const levantarDatos = async () => {
        
        try {
            const response = await fetch('https://ws.smn.gob.ar/map_items/weather');
            if (!response.ok){
                throw new Error("Se pudrio TODO!!!")
                
            }
            const datos = await response.json();
            console.log(datos)
            
        } catch (error) {
            console.log("Estamos en el bloque catch");
            console.log(error);
        }
        
        
     
       // return datos;
    };
    levantarDatos();

 