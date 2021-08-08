import React, { useEffect } from 'react'
import Section from './Section';
import Form from './Form';
import { levantarInfo } from '../Actions/apiActions';
import { useDispatch  } from 'react-redux';


function Main() {
    
    const dispatch = useDispatch();

    const levantarDatos = () =>{
        dispatch(levantarInfo())
    }

    useEffect(() => {
        levantarDatos()
    }, []) //AMADA

    return (
        <header className="principal">
            <Section />
            <h2>Buscar Ciudad</h2>
            <Form />
        </header>
    )
}

export default Main
