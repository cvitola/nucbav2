import React from 'react';
import styles from'./../Styles/header.module.css';
import logo from './../img/logo.png';

function Header() {
    return (
        <header>
            <nav>
                <img className={styles.loguito} src={logo} alt="logo" />               
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Proximamente</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
