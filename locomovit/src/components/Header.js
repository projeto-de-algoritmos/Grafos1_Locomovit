import React from 'react';
import './styles/Header.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png'

export default function Header() {
    let navigate = useNavigate();
    return (
        <header>
            <nav>
                <div className="logo-container" onClick={() => navigate('/')}>
                    <img src={logo} alt="Locomovit" />
                </div>
                <div className="nav-links">
                    <div onClick={() => navigate('/')}>Pagina Inicial</div>
                    <div onClick={() => navigate('/about-us')}>Sobre Nós</div>
                    <div onClick={() => navigate('/about-the-project')}>Sobre o Projeto</div>
                </div>
            </nav>
        </header>
    );
}