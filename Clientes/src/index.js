const inputNombre = document.getElementById('nombre');
const inputDni = document.getElementById('dni');
const inputDolar = document.getElementById('dolar');
const botonAgregar = document.getElementById('agregar');
const labelError = document.getElementById('error');
const listarClientes = document.getElementById('listar-clientes');
const inputCliente = document.getElementById('cliente');
const listarBusqueda = document.getElementById('listar-busqueda');
let listaClientes = [];

botonAgregar.addEventListener("click", agregarCliente);
document.addEventListener("click", eliminarCliente);
inputCliente.addEventListener('keyup', buscarClientes); //por cada vez que hace clic en el input
//botonBuscar.addEventListener("click", buscarClientes);

function buscarClientes(){
    
    const clienteABuscar = inputCliente.value.toUpperCase();
    const nuevoArray = listaClientes.filter( element => element.nombre.toUpperCase().includes(clienteABuscar)  )
    console.log(nuevoArray)
    escribirHtml(nuevoArray, listarBusqueda);
}
function agregarCliente(event){
    event.preventDefault();
    labelError.innerHTML = '';
    const repiteDNI =  listaClientes.some((valor) => valor.dni === inputDni.value);
    const error = podesAvanzar(repiteDNI);
    if(error)
        escribirError(error);
    else{
        const clave = Math.floor(Math.random() * 50000);
        listaClientes.push({
            id: clave,
            dni: inputDni.value,
            nombre: inputNombre.value,
            dolar: inputDolar.value,
        });
        escribirHtml(listaClientes, listarClientes);
    }

    blanquear();
}

function eliminarCliente(event){
    if (event.target.id === "eliminar") {
        const idABuscar = event.target.parentElement.attributes.key.value;
        const nuevoArray = listaClientes.filter(
          (valor) => valor.id !== Number(idABuscar)
        );
        listaClientes = nuevoArray;
        escribirHtml(listaClientes, listarClientes);
      }
}

function podesAvanzar(flag){
    let error = 0;
    if(flag)
        error = 1;
    else if(inputDni.value ==='' || inputNombre.value ==='')
        error = 2;
    return error;    
}
function blanquear(){
    inputDni.value = '';
    inputNombre.value = '';
}
function escribirError(tipo){
    if(tipo == 1)
        labelError.innerHTML = "El DNI ya existe";
    if(tipo == 2)
        labelError.innerHTML = "Revise los campos DNI y Nombre";
}

function escribirHtml(unaLista, elementoUl){
     const nuevoArray = unaLista.map(
        (valor) =>
        `<li key=${valor.id}> <div class="item">${valor.id}</div> <div class="item">${valor.dni}</div> <div class="item">${valor.nombre}</div> <div class="item">${valor.dolar}</div> <button id="eliminar">Eliminar</button></li>`
      );
      const nuevoArrayJoineado = nuevoArray.join("");
      elementoUl.innerHTML = `<li> <div class="item-titulo">CLAVE</div> <div class="item-titulo">DNI</div> <div class="item-titulo">NOMBRES</div> <div class="item-titulo">U$S</div> <div class="item-titulo">Acción</div> </li>` + nuevoArrayJoineado;
}
