import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {TodosReducer} from './reducers/TodosReducer';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["todosList"],
}

const reducer = combineReducers({ todosList: TodosReducer });
const rootReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk]; //3. por la accion asincrona.. intercepta para ver si es una fn u objeto plano

export const store = createStore(
    rootReducer, 
    {},
    composeWithDevTools(applyMiddleware(...middleware))
    );

export const persistor = persistStore(store); 
//toda esta configuracion es la creacion del store.....