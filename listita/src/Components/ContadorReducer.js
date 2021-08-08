import React, {useReducer} from 'react'
import Bontoncito from './Bontoncito';

function ContadorReducer() {


    const reducer = (state,action) =>{
        let resultado;
        switch (action.type) {
            case "CAMBIAR_TITULO":
                resultado = {
                    ...state,
                    titulo : action.payload,
                }
                break;
            case "SUMAR_NUMERO":
                resultado = {
                    ...state,
                    contador : state.contador + 1,
                    msgError: "",
                }
                break;
            case "RESTAR_NUMERO":
                if(state.contador - 1 < 0){
                    resultado = {
                        ...state,
                        msgError: "Ya no se puede restar",
                    }
                }else{
                    resultado = {
                        ...state,
                        contador: state.contador -1,
                        msgError:"",
                    }
                }
                
                break;
            default:
                resultado = {state}
                break;
        }
        return resultado;
    }
    const restarNumero = () =>{
        dispatch({type: "RESTAR_NUMERO"});
    }
    const sumarNumero = () =>{
        dispatch({type: "SUMAR_NUMERO"});
    }

    const initialState = {
        contador: 0,
        msgError: "",
        titulo: "Titulo Inicial",
    };

    const cambiarTitulo = (payload) =>{
        dispatch({
            type: "CAMBIAR_TITULO",
            payload,
            })
    }
    const [estado, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>{estado.titulo}</h1>    
            <button onClick={() =>cambiarTitulo("mhmhm mh")}>Cambiate titulinn</button>
            <button onClick={restarNumero}>RESTAR</button>
            <p>{estado.contador}</p>
            <p>{estado.msgError}</p>
            {/*<p
                style={{
                    fontSize:"16px",
                    color: "red",
                }}>
                    {mensajeDeError && mensajeDeError}
            </p>*/}
            <button onClick={sumarNumero}>SUMAR</button>
            <Bontoncito />
        </div>
    )
}

export default ContadorReducer;
