import React from 'react';
import {
    DivEstilado,
    TituloEstilado,
    ParrafoEstilado,
} from './ButtonStyles'


function Button() {
    return (
        <DivEstilado>
            <TituloEstilado>HOLIS</TituloEstilado>
            <TituloEstilado azulOscuro>HOLITAS</TituloEstilado>
            <ParrafoEstilado>Lorem ipsum dolor sit amet, <span>mhmh</span> consectetur adipisicing elit. Rerum eum <span>Mhmh3</span>
            vero soluta voluptas nesciunt sit sequi veritatis minus, impedit laboriosam.</ParrafoEstilado>
        </DivEstilado>
    )
}

export default Button