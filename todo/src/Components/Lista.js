import React, { useState } from 'react';
import styles from './../Styles/lista.module.css';
import Header from './Header';
import Footer from './Footer';
import { v4 as uuidv4 } from 'uuid';

function Lista() {

    const [misToDos, setmisToDos] = useState([]);
    const [itemInput, setitemInput] = useState("");
    const [fechaInput, setfechaInput] = useState("");
    const [modoEdicion, setmodoEdicion] = useState(false)
    const [itemAEditar, setitemAEditar] = useState(null)
    const [error, seterror] = useState("");

    const cuandoCambieElItemInput = (e) => {
        setitemInput(e.target.value);
    }

    const cuandoCambieElItemInputAEditar = (e) =>{
        setitemAEditar({...itemAEditar, texto: e.target.value})
    }
    const cuandoCambieElFechaInput = (e) => {
        setfechaInput(e.target.value);
    }
    const cuandoCambieElFechaInputAEditar = (e) =>{
        setitemAEditar({...itemAEditar, fecha: e.target.value})
    }

    const agregarUnItem = (e) => {
        e.preventDefault();
        if(itemInput === "" || fechaInput === ""){
            seterror("Verificá la Fecha o el Recordatorio")
        }else{
            setmisToDos([...misToDos,
                {
                    id: uuidv4(),
                    fecha: fechaInput,
                    texto: itemInput,
                },
            ]);
            setitemInput("");
            setfechaInput("");
            seterror("");
        }
    }

    const editarUnItem = (e) =>{
        e.preventDefault();
        debugger
       
            const nuevoArray = misToDos.map(valor =>
                valor.id === itemAEditar.id ? itemAEditar : valor
            );
            setmisToDos(nuevoArray);
            seterror("");
            setmodoEdicion(false);
        
    }
    const borrarUnItem = (aEliminar) =>{
        const nuevoArray = misToDos.filter(valor => valor.id !== aEliminar); //no estaria filtrando una chotis
        setmisToDos(nuevoArray);
    }

    const editarUnaTarea = (item) =>{
        setmodoEdicion(true)
        setitemAEditar(item)
    }
    return (
        <>
        <Header/>
        <section className={styles.contenedorPrincipal}>
            <h1>ACA VA EL TITULOTE DE LA LISTA</h1>
            <div className={styles.contenedorLista}>
                <article className={styles.contenedorListado}>
                    <h2>Listado de Items</h2>
                    <ul className={styles.listaResultado}>
                        {misToDos.length > 0 ? (
                            misToDos.map( valor => (
                                <li key={valor.id} className={styles.listaItem}> 
                                <p>{valor.fecha}</p>
                                <p className={styles.motivo}>{valor.texto}</p>
                                <button className={`${styles.btn} ${styles.borrar}`} onClick={() => borrarUnItem(valor.id)}>Borrar</button> {/*por qué se escribe así el onClick*/}
                                <button className={`${styles.btn} ${styles.editar}`} onClick={() => editarUnaTarea(valor)}>Editar</button>
                            </li>
                            ))
                        ):(<p>No hay nada por aquí ....</p>)}
                        {}

                    </ul>
                </article>
                <article className={styles.contenedorFormulario}>
                    <h2>Nuevo Item</h2>
                    <form action="" onSubmit={modoEdicion ? editarUnItem :  agregarUnItem}>
                        <input type="date"
                            name=""
                            id=""
                            className=""
                            onChange={modoEdicion ? cuandoCambieElFechaInputAEditar : cuandoCambieElFechaInput}
                            placeholder="fecha..."
                            value={modoEdicion ? itemAEditar.fecha : fechaInput}
                        />

                        <input type="text"
                            name=""
                            id=""
                            className=""
                            onChange={modoEdicion ? cuandoCambieElItemInputAEditar : cuandoCambieElItemInput}
                            placeholder="escribí tú recordatorio..."
                            value={modoEdicion ? itemAEditar.texto : itemInput}
                        />
                        <button className={`${styles.btn} ${styles.nuevo}`}> {modoEdicion ? "Editamee" : "Agregame!"}</button>
                        {error}
                    </form>
                </article>
            </div>
            
        </section>
        <Footer />
        </> //Tuve que poner un fragmento .
    )
}

export default Lista
