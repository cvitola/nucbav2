import React, {useState} from 'react';
import {useTodos} from '../Context/Todos/TodosContext';
import {addTodo} from '../Context/Todos/TodosActions';

function TodoForm() {

    //traigo desde el context
    const {dispatch} = useTodos();
    const [estadoDelInput, setEstadoDelInput] = useState("");
    const handlerSubmit = (e) =>{
        //despachar la accion creator.
        e.preventDefault();
        dispatch(addTodo(estadoDelInput));
        setEstadoDelInput("");
    }
    return (
        <form action="" name="todos" className="todos-form" onSubmit={handlerSubmit}>
            <label htmlFor="todo">Yo te conozcco, escribi algo...</label>
            <input type="text" 
            name="todo" 
            id="todo" 
            placeholder="algo....." 
            onChange={e => setEstadoDelInput(e.target.value)}
            value={estadoDelInput}/>
        </form>
    );
}

export default TodoForm;
