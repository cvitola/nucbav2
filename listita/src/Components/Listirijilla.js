import React, {useEffect, useState} from 'react'

function Listirijilla({pintarNumeritos}) {
    const [numeritos, setnumeritos] = useState([]);

    useEffect(() => {
        setnumeritos(pintarNumeritos());
        console.log("Estoy ejecutando el USEEFFECT");
    }, [pintarNumeritos]);

    return (
        <div>
            
            {numeritos.map((valor) => 
                <h2>{valor}</h2>)
            }        
        </div>
    )
}

export default Listirijilla
