import React from 'react';
import './styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <li><Link to="/">Pagina Inicial</Link></li>
                <li><Link to="/about-us">Sobre Nós</Link></li>
                <li><Link to="/about-the-project">Sobre o Projeto</Link></li>
                <ul>
                </ul>
            </nav>
        </header>
    );
}