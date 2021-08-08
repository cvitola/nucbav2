import React, {useState, useMemo} from 'react'

function UseMemo() {
    const [contador, setcontador] = useState(0);
    const [dark, setdark] = useState(false);

    
    const sumarNumero = () =>{
        setcontador(contador+1)
    }
    const restarNumero = () =>{
        setcontador(contador-1)
    }
    
    

    const funcionRecontraLenta = (numero) =>{
        for(let i=0;i<=1000000000;i++) {}
        return numero*2;
    }
    
    //si entre re-renderizados el [CONTADOR] no cambia, entonces la funcion dentro del memo no se ejecuta!
    const numeroMultiplicado = useMemo(() => funcionRecontraLenta(contador), [contador]);

    //const numeroMultiplicado = funcionRecontraLenta(contador);
    const estilitos = {
        backgroundColor: dark ? "black" : "grey",
        color: dark ? "white" : "black",
        width: "300px",
        height: "300px",
    };
    return (
        <div>
            <button onClick={restarNumero}>Restar</button>      
            <p>{contador}</p>
            <button onClick={sumarNumero}>SUMAR</button>
            <button onClick={() => setdark(!dark)}>CAMBIAR TEMA</button>

            <div style={estilitos}>HOLIS
            {numeroMultiplicado}</div>
        </div>
    )
}

export default UseMemo
