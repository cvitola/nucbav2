import React from 'react';
import { useSelector } from 'react-redux';


function Section() {
   // const datos = useSelector(state => state.datosAPI)

    return (
        <section id="rejilla">
            <ul>
            {
              /*  datos.map((valor) => (
                    <li key={valor.id}>{valor.ciudad}</li>
                ))*/
            }
            </ul>

        </section>
    )
}

export default Section;
