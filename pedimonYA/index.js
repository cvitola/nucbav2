const listaPokemons = document.getElementById('grilla');
const carrito = document.getElementById('carro-poke');
const botonCarrito = document.getElementById('ver-carrito');
const numerito = document.getElementById("numerito");

let precioCarrito=0;
let listaPokemones = []; //los que levanto del JSON
let carritoPokes = [];


function levantarDatos() {
    fetch('poke.json')
        .then(resp => resp.json())
        .then(resp => {dibujarTarjetas(resp)})
}



levantarDatos();

function dibujarTarjetas(pokemones){
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
            <button id="agregar" disabled class="btn btn-grad">ATRAPAR</button>
        <article>`
        }

    })

    //Se resuelve como tirar las imagenes en la grilla
    tarjetasHtml.forEach(element => {
        listaPokemons.innerHTML += element;
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
                <article>
            </li>`
        );

    const arrayJoineado = nuevoArray.join("");
   // console.log(arrayJoineado)
    carrito.innerHTML = arrayJoineado;
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



document.addEventListener("click", comprarPokemon);
document.addEventListener("click", quitarPokemon);
document.addEventListener("click", sumarUnItem);
document.addEventListener("click", restarUnItem);
botonCarrito.addEventListener("click", visualizarCarrito)

function visualizarCarrito(){
    const obtenerCarrito = document.getElementById("carro");
    console.dir(obtenerCarrito.style.display) // por que diablos viene vacio????
    if(obtenerCarrito.style.display ==="none"){
        obtenerCarrito.style.display = "flex";
    }else{
        obtenerCarrito.style.display = "none"
    }

}

function comprarPokemon(event){
    if (event.target.id ==="agregar"){
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

    /*fetch('poke.json')
    .then(resp => resp.json())
    .then(resp => {
        const obj = resp.filter(
            (valor) => valor.idPokemon === Number(idDelPokemon)
        )*/  


function estasEnCarrito(id){
   return carritoPokes.some((val) => val.idPokemon === Number(id));
}

function quitarPokemon(event){
    if(event.target.id === "quitar"){
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


function sumarUnItem(event){
    
    if(event.target.id ==="suma"){
        let inputCantidad = Number(event.target.parentElement.childNodes[3].value);
        const idPoke = event.target.parentElement.parentElement.attributes.key.value; //recupero el ID del poKe
        const arrayPoke = listaPokemones.filter(
            (element) => element.idPokemon === Number(idPoke)
        )
        limitePokes = Number((arrayPoke[0].cantidad))

        if(inputCantidad < limitePokes){
            inputCantidad++;
        }
        arrayPoke[0].cantidadComprada = inputCantidad
        event.target.parentElement.childNodes[3].value = inputCantidad;
        actualizarMonto();
        }
}

function restarUnItem(event){
    if(event.target.id ==="resta"){
        let inputCantidad = Number(event.target.parentElement.childNodes[3].value);
        const idPoke = event.target.parentElement.parentElement.attributes.key.value; //recupero el ID del poKe
        const arrayPoke = listaPokemones.filter(
            (element) => element.idPokemon === Number(idPoke)
        )

        if(inputCantidad > 1){
            inputCantidad--;
        }
        arrayPoke[0].cantidadComprada = inputCantidad
        event.target.parentElement.childNodes[3].value = inputCantidad;
        actualizarMonto();
    }
}