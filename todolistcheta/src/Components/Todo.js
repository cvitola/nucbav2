import React, {useRef, useState} from 'react';
import {useTodos} from '../Context/Todos/TodosContext'
import {deleteTodo, completeTodo, editMode, editTodo} from '../Context/Todos/TodosActions' // por cada accion importarla.
import { useEffect } from 'react';

function Todo({todo}) {

    const [inputLabel, setInputLabel] = useState(""); 
    const {dispatch} = useTodos();
    const focalizarInput = useRef(null);

    const handlerDelete = () => {
        dispatch(deleteTodo(todo.id)) //va a ir a la accion.
    }

    const handlerComplete = () => {
        dispatch(completeTodo(todo.id))
    }
    const handleEditMode = () => {
        console.log("HICISTE DOBLE CLIC MEEE AMOOOOR")
        dispatch(editMode(todo.id));
    }

    const handleEditTodo = (e) =>{
        if(e.key === "Enter"){
            dispatch(editTodo(todo.id, inputLabel))
            handleEditMode()
        }
    }

    //con un UseEffect seteamos el inputLabel

    useEffect(() => {
        if(todo.editMode){
            setInputLabel(todo.label);
        }
    }, [todo.editMode, todo.label])

    return (
        <li className={todo.complete ? "todos-complete" : ""}>
            <input type="checkbox" 
            name="checkbox" 
            id="checkbox" 
            onClick={handlerComplete} 
            checked={todo.complete ? "checked" : ""}/>
            
            {
                todo.editMode ? (
                    <input type="text" 
                    name="label" 
                    id="label" 
                    onChange={(e) => setInputLabel(e.target.value)}
                    onKeyPress={handleEditTodo}
                    value={inputLabel}
                    ref={focalizarInput}/>
                    
                ): (
                    <span onDoubleClick={handleEditMode}>{todo.label}</span> /* 1. Vista Dispara Accion.*/
                )
            }
            <button onClick={handleEditMode}>edit</button>
            <button onClick={handlerDelete}></button> {/*este seria la vista para laccion borrar.*/}
        </li>
    )
}

export default Todo;
