
import {
    ADD_TODO,
    CLEAR_COMPLETE,
    COMPLETE_TODO,
    DELETE_TODO,
    EDIT_MODE,
    EDIT_TODO,
    SET_TODOS,
} from '../actions/Constants';

export const TodosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            state = state.filter(todo => todo.id !== action.payload)
            return state; //me voy al dispatch de la vista (al Todo)... --- el componente se vuelve a renderizar
        case COMPLETE_TODO:
            //mapeo estado, pregunto si es... no me queda claro por que hay 3 returns... 
            state = state.map(todo =>{
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        complete: !todo.complete,
                    };
                }
                return todo;
            })
            return state; 
        case EDIT_MODE:
            state = state.map(todo =>{
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        editMode: !todo.editMode,
                    };
                }
                return todo;
            })
            return state; 
        case EDIT_TODO:
            state = state.map(todo =>{
                if(todo.id === action.payload.id){
                    return{
                        ...todo,
                        label: action.payload.label,
                    };
                }
                return todo;
            })
            return state; 
        case SET_TODOS: //2. se genera el reducer y lo transform,a al modelo ... vamos al Store
            const nuevoArray = action.payload.map(valor =>(
                {
                    id: valor.id,
                    label: valor.title,
                    complete: valor.completed,
                    editoMode: false,
                }
            ))

            return [...state, ...nuevoArray];
        default:
            return state;
    }
}