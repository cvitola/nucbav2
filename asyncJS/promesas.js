//Promesas
//Tiene 3 estados Pending, Fulfilled, Rejected

const holis = new Promise((resolve, reject) => {
    //reject("Con mi MHM yo genero debate");
    setTimeout(()=>{
        resolve("Con mi MHM yo genero debate");
    },2500)
})

console.log(holis);

const pandemia = false;

const vamoDeJoda = new Promise((resolve, reject) => {
    if(!pandemia){
        const jodita = {
            nombre:"MHM",
            donde:"mhm",
            fecha:",h,hh"
        };
        resolve("VAMMAAAAA");

    }else{
        reject("OLVIII")
    }
});
console.log(vamoDeJoda)

//BAJAR DEL GIT CLASE 27
vamoDeJoda.then((valor) => {
    console.log(`Será en: ${valor.nombre}`)
});