const grillaPokemones = document.getElementById('grilla');
const ulCarrito = document.getElementById('carro-poke');
const botonCarrito = document.getElementById('ver-carrito');
const numerito = document.getElementById("numerito");
const msgCarrito = document.getElementById("observacion");
const btnComprarCarro = document.getElementById("comprar");
const btnCerrar = document.getElementById("cerrar");

let precioCarrito=0;
let listaPokemones = []; //los que levanto del JSON
let carritoPokes = [];


levantarDatos();
document.addEventListener("click", comprarPokemon);
document.addEventListener("click", quitarPokemon);
document.addEventListener("click", sumarUnItem);
document.addEventListener("click", restarUnItem);
botonCarrito.addEventListener("click", visualizarCarrito)
btnComprarCarro.addEventListener("click", comprarCarrito);
btnCerrar.addEventListener("click", () =>{
    const obtenerCarrito = document.getElementById("carro");
    obtenerCarrito.style.display = "none"
    
});

function levantarDatos() {
    fetch('poke.json')
        .then(resp => resp.json())
        .then(resp => {dibujarTarjetasEnGrilla(resp)})
}

function dibujarTarjetasEnGrilla(pokemones){
    listaPokemones = [];//la vacio cada vez que llamo.
    const tarjetasHtml = pokemones.map((objeto) => {
        listaPokemones.push(objeto);
        if(objeto.cantidad != 0){
            return `<article key=${objeto.idPokemon} class="card-poke">
            <img src=${objeto.urlImagen} alt=${objeto.nombre}>
            <p class="">${objeto.nombre}</p>
            <p class="precio">$ ${objeto.importe}</p>
            <p class="">${objeto.peso} kg</p>
            <p class="">${objeto.tipo}</p>
            <button id="agregar" class="btn btn-grad">ATRAPAR</button>
        <article>`
        }else{
            return `<article key=${objeto.idPokemon} class="card-poke">
            <p class="sin-stock">SIN STOCK</p>
            <img src=${objeto.urlImagen} alt=${objeto.nombre}>
            <p class="">${objeto.nombre}</p>
            <p class="precio">$ ${objeto.importe}</p>
            <p class="">${objeto.peso} kg</p>
            <p class="">${objeto.tipo}</p>
            <button id="agregar" disabled class="btn btn-grad-none ">ATRAPAR</button>
        <article>`
        }

    })

    //Se resuelve como tirar las imagenes en la grilla
    tarjetasHtml.forEach(element => {
        grillaPokemones.innerHTML += element;
    });
}

function dibujarTarjetasEnCarrito(listitaCompra){
    const nuevoArray = listitaCompra.map(
        (valor) => 
            `<li>
                <article key=${valor.idPokemon} class="carro-item">
                <img src=${valor.urlImagen} alt=${valor.nombre}
                <p class="precio">$ ${valor.importe}</p>
                <div class="cantidad">
                    <button id="resta" class="btn btn-min">-</button>   
                    <input id="cantidadDePokes" type="number" value="1" disabled>
                    <button id="suma" class="btn btn-min">+</button>
                </div>    
                <button id="quitar" class="btn"><i id="suma" class="far fa-trash-alt"></i></button>
            </li>`
        );

    const arrayJoineado = nuevoArray.join("");
    ulCarrito.innerHTML = arrayJoineado;
}

function actualizarMonto(){
    let sumatoria = 0;
    carritoPokes.forEach((elemento) => {
        sumatoria+=elemento.importe*elemento.cantidadComprada;
    })
    const precioHtml = document.getElementById("precioCarrito");
    precioHtml.innerHTML = `$ ${sumatoria}`;
    numerito.innerHTML = `${carritoPokes.length}`;
}

function visualizarCarrito(){
    const obtenerCarrito = document.getElementById("carro");
    console.dir(obtenerCarrito.style.display) // por que diablos viene vacio????
    if(obtenerCarrito.style.display ==="none" || obtenerCarrito.style.display==""){
        obtenerCarrito.style.display = "flex";
    }else{
        obtenerCarrito.style.display = "none"
    }
}

function comprarPokemon(event){
    if (event.target.id ==="agregar"){
        blanquearMensaje();
        const idPoke = event.target.parentElement.attributes.key.value; //recupero el ID del poKe
        //recuperarIDPoke(idPoke)
        obtenerPokemon(idPoke)
    }
}

function obtenerPokemon(idDelPokemon){
    if(!estasEnCarrito(idDelPokemon)){
        const pokeAlCarrito = listaPokemones.filter(
            (element) => element.idPokemon === Number(idDelPokemon)
        )
        pokeAlCarrito[0].cantidadComprada = 1; 
        carritoPokes.push(pokeAlCarrito[0]);
        actualizarMonto();
        dibujarTarjetasEnCarrito(carritoPokes)
    }else{
        alert("Ese Poke ya está en el carrito");
    }

}

const estasEnCarrito = (id)=> {
   return carritoPokes.some((val) => val.idPokemon === Number(id));
}

function quitarPokemon(event){
    if(event.target.id === "quitar"){
        blanquearMensaje();
        const idPoke = event.target.parentElement.attributes.key.value; //recupero el ID del poKe
        quitarPokemonDelCarro(idPoke);
    }
}

function quitarPokemonDelCarro(identificador){
    const nuevoArray = carritoPokes.filter(
          (valor) => valor.idPokemon !== Number(identificador)
        );
        carritoPokes = nuevoArray;
        actualizarMonto()
        dibujarTarjetasEnCarrito(carritoPokes);
}


function sumarUnItem(event) {
    
    if(event.target.id ==="suma"){
        blanquearMensaje();
        let inputCantidad = Number(event.target.parentElement.childNodes[3].value);
        const idPoke = event.target.parentElement.parentElement.attributes.key.value; //recupero el ID del poKe
        const arrayPoke = listaPokemones.filter(
            (element) => element.idPokemon === Number(idPoke)
        )
        limitePokes = Number((arrayPoke[0].cantidad))

        if(inputCantidad < limitePokes){
            inputCantidad++;
        }else{
            darMensaje("No podes seguir atrapando.")
        }
        arrayPoke[0].cantidadComprada = inputCantidad
        event.target.parentElement.childNodes[3].value = inputCantidad;
        actualizarMonto();
        }
}

function restarUnItem(event){
    
    if(event.target.id ==="resta"){
        blanquearMensaje()
        let inputCantidad = Number(event.target.parentElement.childNodes[3].value);
        const idPoke = event.target.parentElement.parentElement.attributes.key.value; //recupero el ID del poKe
        const arrayPoke = listaPokemones.filter(
            (element) => element.idPokemon === Number(idPoke)
        )

        if(inputCantidad > 1){
            inputCantidad--;
        }else{
            darMensaje("Si queres desatraparlo hace clic en el tacho")
        }
        arrayPoke[0].cantidadComprada = inputCantidad
        event.target.parentElement.childNodes[3].value = inputCantidad;
        actualizarMonto();
    }
}

const darMensaje = (msg) => {
    msgCarrito.innerHTML = msg;
}

const blanquearMensaje = () => {
    msgCarrito.innerHTML="";
}

function comprarCarrito() {
    if(carritoPokes.length != 0){
        carritoPokes.forEach(
            (element) => actualizarStock(element)
        )
        const nroCarrito = Math.floor(Math.random() * 50000);
        darMensaje(`Adquiriste el carro Numero: ${nroCarrito}`);
        vaciarCarrito();
    }else{
        darMensaje("No podes comprar un carrito vacío");
    }

}


//Solamente actualiza el Stock de ListaPokemones.-

const actualizarStock = (id)=>{
    //debugger
    //const cantidadActualizada = id.cantidad - id.cantidadComprada
    const pokemonParaActualizar = listaPokemones.find(
        (element) => element.idPokemon === id.idPokemon
    )
    pokemonParaActualizar.cantidad = pokemonParaActualizar.cantidad - id.cantidadComprada
}

const vaciarCarrito = ()=>{
    carritoPokes = [];
    dibujarTarjetasEnCarrito(carritoPokes);
    actualizarMonto();
    grillaPokemones.innerHTML ="";
    dibujarTarjetasEnGrilla(listaPokemones)
}