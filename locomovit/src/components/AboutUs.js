import React from 'react';
import './styles/AboutUs.css';
import Header from './Header';

export default function AboutUs() {
    return (
        <div className="about-us">
            <Header />
            <h2>Quem somos</h2>
            <p>Somos uma equipe de desenvolvimento de software dedicada a criar soluções inovadoras para nossos clientes.</p>
        </div>
    );
}