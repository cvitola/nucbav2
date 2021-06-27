/*practicando useState
import React, {useState} from 'react';
const [estadoReCheto, setEstadoReCheto] = useState(estadoInicial);

y en algun lado con codigo JS definis setEstadoReCheto para cambiarlo
*/
import React,{useState} from 'react'

function Numero() {

    const [numeroAModificar, setnumeroAModificar] = useState(0);

    const incremente = () => {
        setnumeroAModificar( numeroAModificar+1);
    };
    const decremente = () => {
        setnumeroAModificar( numeroAModificar-1);
    };

    return (
        <div className="contenedorsito">
            <button onClick={incremente}>Incrementar</button>
            <p>El valor actual es: {numeroAModificar}</p>
            <button onClick={decremente}>Decrementar</button>
        </div>
    )
}

export default Numero;
