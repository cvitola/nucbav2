import React, {useRef, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo, editMode, editTodo } from '../actions/todoActions';

function Todo({todo}) {

    const [inputLabel, setInputLabel] = useState(""); 
    const focalizarInput = useRef(null);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id)) //va a ir a la accion.
    }

    const handleCheck = () => {
        dispatch(completeTodo(todo.id))
    }

    
    const handleEditMode = () => {
        dispatch(editMode(todo.id));
    }
    
    //con un UseEffect seteamos el inputLabel
    
        useEffect(() => {
            if(todo.editMode){
                focalizarInput.current.focus();
                setInputLabel(todo.label);
            }
        }, [todo.editMode, todo.label])

    const handleEditTodo = (e) =>{
        if(e.key === "Enter"){
            dispatch(editTodo(todo.id, inputLabel))
            handleEditMode()
        }
    }



    return (
        <li className={todo.complete ? "todos-complete" : ""}>
            <input type="checkbox" 
            name="checkbox" 
            id="checkbox" 
            checked={todo.complete ? "checked" : ""}
            onChange={handleCheck}/>
            
            {
                todo.editMode ? (
                    <input type="text" 
                        name="label" 
                        id="label" 
                        onChange={(e) => setInputLabel(e.target.value)}
                        value={inputLabel}
                        ref={focalizarInput}
                        onKeyPress={handleEditTodo}
                    />
                    
                ): (
                    <span onDoubleClick={handleEditMode}>{todo.label}</span> /* 1. Vista Dispara Accion.*/
                )
            }
            <button onClick={handleDelete}></button> {/*este seria la vista para laccion borrar.*/}
        </li>
    )
}

export default Todo;
