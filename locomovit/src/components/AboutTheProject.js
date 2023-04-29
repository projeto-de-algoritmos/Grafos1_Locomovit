import React from 'react';
import './styles/AboutTheProject.css';
import { Link } from 'react-router-dom';

function AboutTheProject() {
    return (
        <div className="about-the-project">
            <Link to="/">Retornar para a Página Inicial</Link>
            <h2>Sobre o projeto</h2>
            <p>O projeto é um aplicativo web criado para ajudar as pessoas a gerenciar suas tarefas diárias de forma eficiente.</p>
        </div>
    );
}

export default AboutTheProject;