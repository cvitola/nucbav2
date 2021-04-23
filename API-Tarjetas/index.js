const postContainer = document.querySelector('.posts-container');
const loading = document.querySelector('.loader');
const inputFilter = document.querySelector('#filter');

let limite = 5;
let pagina = 1;

iniciarPerri();
const getPosts = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pagina}&_limit=${limite}`);
    const data = await resp.json();
    return data;
}

const pintarPosts = (posteitos) => {
    const posteosHtml = posteitos.map((valor) => {
        return `<div class="post">
                    <div class="numerito">${valor.id}</div>
                        <div class="post-info">
                            <h2 class="post-title">${valor.title}</h2>
                            <p class="post-body">${valor.body}</p>
                        </div>
                </div>`; 
        })
        
    .join("");
        

    postContainer.innerHTML += posteosHtml;

}

function iniciarPerri() {
    window.addEventListener("DOMContentLoaded",async () => {
        let posts = await getPosts();
        pintarPosts(posts);
    }) //una vez q carga el doc HTML se dispara!
}

//Pasos a Seguir
//1. Quiero que detecte cuando llego abajo de todo
//2. Cuando llego abajo, quiero q muestre el loading
//3. Despues qye me cargue otros 5 posts y lo aggregue,
//4