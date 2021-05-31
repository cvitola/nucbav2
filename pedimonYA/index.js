const listaPokemons = document.getElementById('grilla');
const carrito = document.getElementById('carro-poke');
let precioCarrito=0;
let carritoPokes = [];
function levantarDatos() {
    fetch('poke.json')
        .then(resp => resp.json())
        .then(resp => {dibujarTarjetas(resp)})
}

function recuperarIDPoke(idDelPokemon){
    fetch('poke.json')
    .then(resp => resp.json())
    .then(resp => {
        const obj = resp.filter(
            (valor) => valor.idPokemon === Number(idDelPokemon)
        )
        carritoPokes.push(obj[0]);
        actualizarMonto(obj[0].importe)
        dibujarTarjetasEnCarrito(carritoPokes)
    });   
}
levantarDatos();
function dibujarTarjetas(pokemones){
    const tarjetasHtml = pokemones.map((objeto) => {
        if(objeto.cantidad != 0){
            return `<article key=${objeto.idPokemon} class="card-poke">
 
            <img src=${objeto.urlImagen} alt=${objeto.nombre}>
            <p class="nombre-poke">${objeto.nombre}</p>
            <p class="precio">$ ${objeto.importe}</p>
            <p class="precio">${objeto.peso} kg</p>
            <p class="precio">${objeto.tipo}</p>
            <button id="agregar" class="btn">COMPRAR</button>
        <article>`
        }else{
            return `<article key=${objeto.idPokemon} class="card-poke">
            <p class="sin-stock">SIN STOCK</p>
            <img src=${objeto.urlImagen} alt=${objeto.nombre}>
            <p class="nombre-poke">${objeto.nombre}</p>
            <p class="precio">$ ${objeto.importe}</p>
            <p class="precio">${objeto.peso} kg</p>
            <p class="precio">${objeto.tipo}</p>
            <button id="agregar" disabled class="btn">COMPRAR</button>
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
                <button id="quitar" class="btn">QUITAR</button>
                <article>
            </li>`
        );

    const arrayJoineado = nuevoArray.join("");
   // console.log(arrayJoineado)
    carrito.innerHTML = arrayJoineado;
}

function actualizarMonto(importe){
    precioCarrito+=importe;
    const precioHtml = document.getElementById("precioCarrito");
    precioHtml.innerHTML = `$ ${precioCarrito}`;
}
document.addEventListener("click", comprarPokemon);
document.addEventListener("click", quitarPokemon);
function comprarPokemon(event){
    if (event.target.id ==="agregar"){
        const idPoke = event.target.parentElement.attributes.key.value; //recupero el ID del poKe
        recuperarIDPoke(idPoke)
    }
}
function quitarPokemon(event){
    if(event.target.id === "quitar"){
        const idPoke = event.target.parentElement.attributes.key.value; //recupero el ID del poKe
        quitarPokemonDelCarro(idPoke);
    }
}