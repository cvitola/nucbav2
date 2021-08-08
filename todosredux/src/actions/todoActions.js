import * as constants from './Constants';
import {Todo} from '../models/TodoModel';

//primer accion. siempre son Objetos planos.
export const addTodo = tareita =>({
    type: constants.ADD_TODO,
    payload: new Todo(tareita),
});
//fin primer accion

export const deleteTodo = (id) => ({ //este objeto se pasa al Reducer
    type: constants.DELETE_TODO,
    payload: id,
});

export const completeTodo = (id) => ({
    type: constants.COMPLETE_TODO,
    payload: id,
});

export const editMode = (id) => ({
    type: constants.EDIT_MODE,
    payload: id,
})

export const editTodo = (id, label) =>({
    type: constants.EDIT_TODO,
    payload: {id, label},
})

//en este caso para Fetch devolverá otra funcion, no un objeto, sera asincrona. Presisará un middleware.

export const setTodos = (todosNuevos) => ({
    type: constants.SET_TODOS,
    payload: todosNuevos,
})

export const cargarPosts = () => async(dispatch) =>{ //1. se crea la accion asincrona y vamos al reducer
    const posts = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await posts.json();
    dispatch(setTodos(data))

}