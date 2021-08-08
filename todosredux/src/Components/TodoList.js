import React from 'react';
import Todo from './Todo';
import {useSelector} from 'react-redux';
function TodoList() {

  //tengo q recuperar el array c/el Hook UseSelector, importado desde react-redux
  const todosList = useSelector(state => state.todosList)



    
    return (
        <ul className="todos-list">
            {
                
                todosList.map((valor) => (
                    <Todo todo={valor} key={valor.id} />
                ))
            }
        </ul>
    )
}

export default TodoList;
