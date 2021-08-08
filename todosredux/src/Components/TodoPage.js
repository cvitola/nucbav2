import { cargarPosts } from '../actions/todoActions';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {useDispatch} from 'react-redux';

function TodoPage() {
    
    const dispatch = useDispatch();
    
    const handleLoadAll = () => {
        dispatch(cargarPosts())
    }
    return (<div className="todos">
        <div className="todos-header">
            <h3 className="todos-title">Lo hice toditooo 🤕</h3>
            <div>
               {/* <p value = {cantidad}>Nos quedan { cantidad} items por hacer</p> */}
               <p>Nos quedan X items</p>
                <div className="buttons-container">
                    <button className="todos-clear">Borrar Completados</button>
                    <button className="todos-clear">Borrar Todos</button>
                    <button className="todos-clear done"
                    onClick={handleLoadAll}>Cargar Todos</button>

                </div>
                <TodoForm />
                <TodoList />
            </div>
        </div>
    </div>
    )
}

export default TodoPage;
