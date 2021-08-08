import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ApiReducer} from './Reducers/ApiReducers';
import thunk from 'redux-thunk';


const reducer = combineReducers({ datosAPI: ApiReducer },
                                {filtrados: ApiReducer}
                                );


const middleware = [thunk]; //3. por la accion asincrona.. intercepta para ver si es una fn u objeto plano

export const store = createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
    );


//toda esta configuracion es la creacion del store.....