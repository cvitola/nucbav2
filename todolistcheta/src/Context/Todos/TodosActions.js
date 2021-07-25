//vista depachará una accion -> Redux -> devolvera un nuevo estado.
import * as constants from './Constants';
import {Todo} from './TodoModel';

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

