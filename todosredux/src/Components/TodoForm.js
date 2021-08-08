import React, {useState} from 'react';
import {useDispatch} from 'react-redux'; //se la importa
import {addTodo} from '../actions/todoActions';

function TodoForm() {

    const [estadoDelInput, setEstadoDelInput] = useState("");
    const dispatch = useDispatch(); //se la instancia
    const handleSubmit = (e) =>{
        //despachar la accion creator.
        e.preventDefault();
        dispatch(addTodo(estadoDelInput)); //se la usa
        setEstadoDelInput("");
    }
    return (
        <form action="" name="todos" className="todos-form" onSubmit={handleSubmit}>
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
