import React, {useContext} from 'react';
import MiContexto from '../Context';


function Bontoncito() {

    const mabelita = useContext(MiContexto);
    return (
        <button>{mabelita}</button>
    )
}

export default Bontoncito
