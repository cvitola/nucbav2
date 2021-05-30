const listaPokemons = document.getElementById('grilla');

function levantarDatos() {
    fetch('poke.json')
        .then(resp => resp.json())
        .then(resp => {dibujarTarjetas(resp)})
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
            <button dataId=${objeto.idPokemon} class="btn">COMPRAR</button>
        <article>`
        }else{
            return `<article key=${objeto.idPokemon} class="card-poke">
            <p class="sin-stock">SIN STOCK</p>
            <img src=${objeto.urlImagen} alt=${objeto.nombre}>
            <p class="nombre-poke">${objeto.nombre}</p>
            <p class="precio">$ ${objeto.importe}</p>
            <p class="precio">${objeto.peso} kg</p>
            <p class="precio">${objeto.tipo}</p>
            <button dataId=${objeto.idPokemon} disabled class="btn">COMPRAR</button>
        <article>`
        }

    })

    //Se resuelve como tirar las imagenes en la grilla
    tarjetasHtml.forEach(element => {
        listaPokemons.innerHTML += element;
    });
}

document.addEventListener("click", comprarPokemon);

function comprarPokemon(event){
    console.log(event.target.parentElement.attributes.key.value)
    console.log(event.target)
}