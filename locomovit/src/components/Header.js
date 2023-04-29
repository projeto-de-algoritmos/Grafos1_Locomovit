import React from 'react';
import './styles/Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    let navigate = useNavigate();
    return (
        <header>
            <nav>
                <li onClick={() => navigate('/')}>Pagina Inicial</li>
                <li onClick={() => navigate('/about-us')}>Sobre Nós</li>
                <li onClick={() => navigate('/about-the-project')}>Sobre o Projeto</li>
            </nav>
        </header>
    );
}