import React from 'react'
import { useTodos } from '../Context/Todos/TodosContext';
import Todo from './Todo';
function TodoList() {

    //acceder a los todos q viene del contexto

    const {todosState} = useTodos();


    
    return (
        <ul className="todos-list">
            {
                
                todosState?.map((valor) => (
                    <Todo todo={valor} key={valor.id} />
                ))
            }
        </ul>
    )
}

export default TodoList;
