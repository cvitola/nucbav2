import React from 'react'
import { MiUl } from './NavbarStyles';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <nav>
            <MiUl>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/alla">Allá</Link>
                </li>
                <li>
                    <Link to="/pikachu">Pikachu</Link>
                </li>
            </MiUl>
        </nav>
    ); 
    
}

export default Navbar
