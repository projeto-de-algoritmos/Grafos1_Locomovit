import React from 'react';
import './styles/AboutUs.css';
import { Link } from 'react-router-dom';

export default function AboutUs() {
    return (
        <div className="about-us">
            <Link to="/">Retornar para a Página Inicial</Link>
            <h2>Quem somos</h2>
            <p>Somos uma equipe de desenvolvimento de software dedicada a criar soluções inovadoras para nossos clientes.</p>
        </div>
    );
}