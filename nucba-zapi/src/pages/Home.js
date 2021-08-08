import React, { useState } from 'react';
import styled from 'styled-components';

export const Primero = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 50px;
    background: ${(p) => p.fondo ? p.fondo: "red"};
    `
export const Titulo = styled.h1`
    text-align: center;
    color: ${(p) => p.colorcito ? p.colorcito: "pink"};
    `
export const BotonPiola = styled.button`
    border: none;
    border-radius: 20px;
    padding: 10px;
    background: orange;
    color: black;
    `
function Home() {

    const [colorFondo, setColorFondo] = useState(true)
    return (
        <Primero fondo={colorFondo ? "salmon" : "palevioletred"}>
            <BotonPiola onClick={() => setColorFondo(!colorFondo)}>Cambiar</BotonPiola>
            <Titulo colorcito="white">Holiiis, soy la home</Titulo>
        </Primero>
    )
}

export default Home
