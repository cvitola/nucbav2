import React, {createContext, useReducer, useContext} from 'react';
import { TodosReducer } from './TodosReducer';
export const TodosContext = createContext();

const initialState = [];

//MiddlerWare para Fetch... Thunk Reducer.
const useThunkReducer = (reducer, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //lo importante esta partecita
    const miDispatchNuevo = action =>{
        if(typeof action ==="function"){
            action(dispatch);
        }else{
            dispatch(action)
        }
    }
    return [state, miDispatchNuevo];
}



export const TodosProvider = ({children}) => {
    const [todosState, dispatch] = useThunkReducer(TodosReducer, initialState) //se usa aca el ThrunkREeducer.

    return (
        <TodosContext.Provider value={{
            todosState,
            dispatch,
        }}>
            {children}
        </TodosContext.Provider>
    )
}

export const useTodos = () => useContext(TodosContext); //para usarlo en algun lado...

