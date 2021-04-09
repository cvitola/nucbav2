function determinarDiaNoche(){
    const fecha = new Date;
    if(fecha.getHours() >7 && fecha.getHours() <= 19){
        return "dia";
    }else{
        return "noche";
    }
}

function devolverCiudad(lista,unaCiudad){
    console.log(unaCiudad)
    return lista.filter(
        (valor) => valor.name === unaCiudad
    );
}

function listarCiudades(lista){
    const select = document.getElementById('ciudad');
    lista.forEach(element => {
        const opcional = (element.province+" - "+element.name);
        const opc = document.createElement('option');
        opc.value = element.name; //muajaja
        opc.innerHTML = opcional;
        select.appendChild(opc);
    })
}
function determinarIconoClima(estado,elementoImg,diaNoche){
    const clave = estado.toLowerCase();
   
    if(clave.includes('lluv')){
        elementoImg.src = 'src/images/lluvioso.png';
    }else if (clave.includes('nublado')) {
        if(diaNoche==="dia"){
             elementoImg.src = 'src/images/dia-nublado.png';
        }else{
             elementoImg.src = 'src/images/noche-nublado.png';
        }
    } else if(clave.includes('cubierto')){
        elementoImg.src = 'src/images/cubierto.png';
    } else if(clave.includes('despejado')){
        if(diaNoche==="dia"){
            elementoImg.src = 'src/images/dia-despejado.png'; 
        }else{
            elementoImg.src = 'src/images/noche-despejado.png'; 
        }
    } else if(clave.includes('torm')){
        elementoImg.src = 'src/images/tormenta.png'
    }else{
        elementoImg.src = 'src/images/pregunta.png'
    }
}
function pintarTarjeta(clima, parametro){
    //Genero los elementos que necesito
    const rejilla = document.getElementById('rejilla');
    const resultadoBusqueda = document.getElementById('resultado-busqueda');
    const articulo = document.createElement('article');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const iconoClima = document.createElement('img');
    const divTemp = document.createElement('div');
    const divCielo = document.createElement('div');
    const divHumedad = document.createElement('div');
    const divViento = document.createElement('div');
    const pTemp = document.createElement('p');
    const pTempValor = document.createElement('p');
    const pCielo = document.createElement('p');
    const pCieloValor = document.createElement('p');
    const pHumedad = document.createElement('p');
    const pHumedadValor = document.createElement('p');
    const pViento = document.createElement('p');
    const pVientoValor = document.createElement('p');
    
    //Determino si es de dia o noche

    const diaNoche = determinarDiaNoche();

    //agrego estilos a los elementos
    articulo.classList.add('tarjeta');
    iconoClima.classList.add('avatar');
    divTemp.classList.add('contorno');
    divCielo.classList.add('contorno');
    divHumedad.classList.add('contorno');
    divViento.classList.add('contorno');
    pTemp.classList.add('titulo');
    pCielo.classList.add('titulo');
    pHumedad.classList.add('titulo');
    pViento.classList.add('titulo');

    //Completo informacion de titulos y la que viene en el objeto recuperado de la API
    h2.innerHTML = clima[0].province; //ENLOQUECI PARA DESCUBRIR EL [0]
    h3.innerHTML = clima[0].name;
    pTemp.innerHTML = "Temperatura";
    pTempValor.innerHTML = clima[0].weather.tempDesc; 
    pCielo.innerHTML = 'Cielo';
    pCieloValor.innerHTML = clima[0].weather.description;
    determinarIconoClima(clima[0].weather.description, iconoClima, diaNoche);
    pHumedad.innerHTML = 'Humedad';
    pHumedadValor.innerHTML = clima[0].weather.humidity;
    pViento.innerHTML = "Viento";
    pVientoValor.innerHTML = clima[0].weather.wing_deg;

    //Acomodo la estructura de la tarjeta
    if(parametro !="busca"){
        rejilla.appendChild(articulo);
    }else{
        resultadoBusqueda.appendChild(articulo);
    }
    articulo.appendChild(h2); 
    articulo.appendChild(h3);
    articulo.appendChild(iconoClima);
    articulo.appendChild(divTemp);
    articulo.appendChild(divCielo);
    articulo.appendChild(divHumedad);
    articulo.appendChild(divViento);
    divTemp.appendChild(pTemp);
    divTemp.appendChild(pTempValor);
    divCielo.appendChild(pCielo);
    divCielo.appendChild(pCieloValor);
    divHumedad.appendChild(pHumedad);
    divHumedad.appendChild(pHumedadValor);
    divViento.appendChild(pViento);
    divViento.appendChild(pVientoValor); 
   
}
function realizarBusqueda(event){ 
    event.preventDefault();
    debugger
    const selectCiudad = document.getElementById('ciudad');
    const datosMeteorologicosCiudad = devolverCiudad(datos, selectCiudad.value);
    eliminarBusquedaAnterior();
    pintarTarjeta(datosMeteorologicosCiudad, "busca");
}

function eliminarBusquedaAnterior(){

    const resultadoBusqueda = document.getElementById('resultado-busqueda');
    if(resultadoBusqueda.hasChildNodes()){
        const hijo = resultadoBusqueda.firstChild;
        resultadoBusqueda.removeChild(hijo);
    }
}

const levantarDatos = async () => {
        
    try {
        const response = await fetch('https://ws.smn.gob.ar/map_items/weather');
        if (!response.ok){
            throw new Error("Se pudrio TODO!!!")
            
        }
        datos = await response.json();
        //Setea por defecto las 3 primeras tarjetas
        const ciudadesPrincipales = ["El Palomar", "Córdoba", "Salta"];
        ciudadesPrincipales.forEach(element => {
            const datosMeteorologicosCiudad = devolverCiudad(datos, element)
            pintarTarjeta(datosMeteorologicosCiudad,"carga");
        });
        listarCiudades(datos)
    } catch (error) {
        console.log("Estamos en el bloque catch");
        console.log(error);
    }
    

 
   // return datos;
};
let datos;
levantarDatos();
//Busqueda
const botonBuscar = document.querySelector("#busca"); 
botonBuscar.addEventListener("click", realizarBusqueda)




