const botonDefault = document.querySelector('.btn-default');

botonDefault.addEventListener('click', () =>{
    
    botonDefault.classList.toggle('btn-sobre');
    alert('Tocaste aca muy mal')
}) //ok

//quiero capturar el input y dibujar en una lista lo que tipea del usuario
const elementoInput = document.getElementById('inputcito');
const elementoBoton = document.getElementById('botoncito');
const elementoLista = document.getElementById('listita');
const productos = [];

elementoBoton.addEventListener('click', (event) => {
    event.preventDefault(); //elimino el submit que tiene el boton x default
    const dato = elementoInput.value; 
    productos.push(dato);
    //recorro Array - por cada producto debe generar un li y luego dibujo en el html -- se implementa con un .map

    const nuevoArray = productos.map((valor) =>  `<li>${valor}</li>` );
    const aux = nuevoArray.join(' '); //el .join te permite indicarle el caracter por el cual queres que se junten, en este caso 'espacio'
    console.log(aux);
    elementoLista.innerHTML = aux;

})
