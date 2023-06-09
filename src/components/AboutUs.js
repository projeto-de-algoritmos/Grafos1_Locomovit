import React from 'react';
import './styles/AboutUs.css';
import Header from './Header';
import pedro from '../assets/images/predo.jpg'
import davi from '../assets/images/davi.jpg'

export default function AboutUs() {
    return (
        <>
            <Header />
            <div className="about-us">
                <div className='intro-text'>
                    <h2>Quem somos</h2>
                    <p>Somos um time com um único intuito: preservar o que de mais precioso você tem, o seu TEMPO. Pensando nisso nos dedicamos a criar uma solução prática que te ajude no seu dia a dia, seja a caminho do trabalho ou a um evento social. Esse é o Locomovit, pronto pra te ajudar e fazer parte da sua história!</p>
                </div>
                <div className='intro-participants'>
                    <div className='davi'>
                        <div className='davi-photo'>
                            <a href='https://github.com/davirany/' target="_blank" rel="noreferrer">
                                <img src={davi} alt='Davi Ranieri Fonseca' />
                            </a>
                        </div>
                        <h4><a href='https://github.com/davirany/' target="_blank" rel="noreferrer">Davi Ranieri Fonsêca</a></h4>
                        <h6>Sou desenvolvedor Full-Stack, focado, atualmente, no Front End, especialmente em ReactJS. Tenho experiência em desenvolvimento orientado a testes, padrões de projeto e metodologias ágeis tais como Kanbam e Scrum. Tendo experiência programação em Orientada a Objeto, e metodologia SOLID em Java. Sou auto-ditadata e muito interessado em aprender tecnologias diferentes das que ja conheço.</h6>
                    </div>
                    <div className='pedro'>
                        <div className='pedro-photo'>
                            <a href='https://github.com/pehenobra2/' target="_blank" rel="noreferrer">
                                <img src={pedro} alt='Pedro Henrique Nogueira Bragança' />
                            </a>
                        </div>
                        <h4><a href='https://github.com/pehenobra2/' target="_blank" rel="noreferrer">Pedro Henrique Nogueira</a></h4>
                        <h6>Estudante do 5º semestre de Engenharia de Software na Universidade de Brasília. Sei o básico de java, javaScript, css, html, linux e windows.</h6>
                    </div>
                </div>
            </div>
        </>
    );
}