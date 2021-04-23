const form = document.querySelector('#form');
const search = document.querySelector('#search');
const resultados = document.querySelector('#resultados');
const botonesMasMEnos = document.querySelector('#masResultados')

//https://api.lyrics.ovh/suggest/calamaro

const URL = 'https://api.lyrics.ovh/';
const getSongs = (valor) => {
    
    fetch(`${URL}/suggest/${valor}`)
        .then((resultado) => resultado.json())
        .then((data) => {pintarCanciones(data)
        console.log(data)
    });
};

const pintarCanciones = (arrayDeCanciones) => {
    const codigoHtml = `
            <h1>Busquedas relacionadas a ${search.value}</h1>
            <ul>
                ${arrayDeCanciones.data.map(
                    (valor) => `
                        <li>
                            <p><strong>${valor.artist.name}</strong> - ${valor.title}</p>
                            <audio controls>
                                <source src=${valor.preview} type="audio/mp3">
                            </audio>
                        </li>`
                )
                .join("")}
            </ul>    
                        `;
    resultados.innerHTML = codigoHtml;

    if (arrayDeCanciones.next || arrayDeCanciones.prev){
        botonesMasMEnos.innerHTML = `
            ${arrayDeCanciones.prev ? `<button onClick="hacerAlgo('${arrayDeCanciones.prev}')">Anterior</button>` :""}
            ${arrayDeCanciones.next ? `<button onClick="hacerAlgo('${arrayDeCanciones.next}')">Siguiente</button>` :""}
                                    `;
    }
    
}

const hacerAlgo = async (url) => {
    //Habilitar cors para poder fetchear de cualq lado
    console.log(url)
    const urlParaFetchear = "https://cors-anywhere.herokuapp.com/"+url
    const fecheaPerri = await fetch(urlParaFetchear);
    const nuevosResultados = await fecheaPerri.json();
    pintarCanciones(nuevosResultados);
}

const iniciar = () => {
    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        const entrada = search.value;
        console.log(entrada)
        if(!entrada){
            return;
        }
        getSongs(entrada);
    })
}
//getSongs("calamaro");
iniciar();
