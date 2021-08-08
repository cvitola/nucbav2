import styled from 'styled-components';

export const DivEstilado = styled.div`
    width: 100%;
    max-width: 500px;
    height: auto;
    padding: 20px;
    background-color: tomato;
    margin: 0 auto; /*Efectos Resposive*/
`;
export const TituloEstilado = styled.h1`
    font-size: 45px;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.azulOscuro ? "blue": "black"};
    
    `;
export const ParrafoEstilado = styled.p`
    color: orange;
    font-size: 25px;

    & span {
        color: blue;
        font-weight: bold;
    }
`;

