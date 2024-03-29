import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useTodos } from '../Context/Todos/TodosContext';
import { cargarPosts } from '../Context/Todos/TodosActions';

function TodoPage() {
    const {todosState} = useTodos();
    //const [cantidad, setCantidad] = useState("");
    const {dispatch} = useTodos();
    const cantidadToDosAHacer = () =>{
        
        let cuenta = 0;
        todosState.forEach(element => {
            if(!element.complete){
                cuenta++;
            }
        })
        console.log(cuenta)
        return cuenta;
    }

   // useEffect(() =>{
    //    setCantidad(cantidadToDosAHacer());
    //},)

    return (<div className="todos">
        <div className="todos-header">
            <h3 className="todos-title">Lo hice toditooo 🤕</h3>
            <div>
               {/* <p value = {cantidad}>Nos quedan { cantidad} items por hacer</p> */}
               <p>Nos quedan {() => cantidadToDosAHacer() } items</p>
                <div className="buttons-container">
                    <button className="todos-clear">Borrar Completados</button>
                    <button className="todos-clear">Borrar Todos</button>
                    <button className="todos-clear done"
                    onClick={()=>dispatch(cargarPosts())}>Cargar Todos</button>

                </div>
                <TodoForm />
                <TodoList />
            </div>
        </div>
    </div>
    )
}

export default TodoPage;
