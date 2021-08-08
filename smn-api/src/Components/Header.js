import React from 'react';
import logo from './../img/api-logo.png';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="img_logo" />
            <h1>API - Servicio Meteorologico Nacional Argentino</h1>
        </div>
    )
}

export default Header
