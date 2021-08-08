

export const ApiReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_API':
            const nuevoArray = action.payload.map(valor =>(
                {
                    id: valor._id,
                    ciudad: valor.name,
                    prov: valor.province,
                    temp: valor.weather.tempDesc,
                    cielo: valor.weather.description,
                    presion: valor.weather.pressure,
                    humedad: valor.weather.humidity,
                    viento: valor.weather.wind_speed,
                    vientoDir: valor.weather.wing_deg,
                }
            ))
            return [...state, ...nuevoArray];
        
            case 'FILTRAR_API':
                const filtrados = action.state.filter( valor =>(
                    action.payload === valor.name 
                ))
                return [...state, ...filtrados]
        default:
            return state;
    }
}
