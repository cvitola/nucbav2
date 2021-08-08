import React, {useState, useCallback} from 'react'
import Listirijilla from './Components/Listirijilla';

function UseCallbackEjem() {

    const [contador, setcontador] = useState(0);
    const [dark, setdark] = useState(false);

    
    const sumarNumero = () =>{
        setcontador(contador+1)
    }
    const restarNumero = () =>{
        setcontador(contador-1)
    }
    
    
    const estilitos = {
        backgroundColor: dark ? "black" : "grey",
        color: dark ? "white" : "black",
        width: "300px",
        height: "300px",
    };

   // const pintarNumeritos = () =>{
    //    return [contador, contador+1, contador+2];
   // }

   const pintarNumeritos = useCallback(() => {
        return [contador, contador+1, contador+2]
       },
       [contador],
   )
    return (
        <div>
            <button onClick={restarNumero}>Restar</button>      
            <p>{contador}</p>
            <button onClick={sumarNumero}>SUMAR</button>
            <button onClick={() => setdark(!dark)}>CAMBIAR TEMA</button>

            <div style={estilitos}>HOLIS</div>
            <Listirijilla pintarNumeritos={pintarNumeritos}/>
        </div>

    )
}

export default UseCallbackEjem
