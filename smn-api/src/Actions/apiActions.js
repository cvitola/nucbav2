
//en este caso para Fetch devolverá otra funcion, no un objeto, sera asincrona. Presisará un middleware.

export const setInfo = (apiNuevos) => ({
    type: 'SET_API',
    payload: apiNuevos,
})


export const levantarInfo = () => async(dispatch) =>{ //1. se crea la accion asincrona y vamos al reducer
    const posts = await fetch('https://ws.smn.gob.ar/map_items/weather');
    const data = await posts.json();
    dispatch(setInfo(data))

}

export const filtrar = (dato) => ({
    type: 'FILTRAR_API',
    payload: dato,
})

