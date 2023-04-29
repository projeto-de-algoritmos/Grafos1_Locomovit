import Header from './Header'
import './styles/Main.css'
import React from 'react'

export const Main = () => {
    return (
        <>
            <header className="App-header">
                <h1>Locomovit</h1>
                <Header />
            </header>
            <body>
                <ul>
                    This is the cities that we are going to consider
                    <li>Águas Claras</li>
                    <li>Brazlândia</li>
                    <li>Candangolândia</li>
                    <li>Ceilândia</li>
                    <li>Cidade Estrutural</li>
                    <li>Cidade do Guará</li>
                    <li>Cruzeiro</li>
                    <li>Fercal</li>
                    <li>Gama</li>
                    <li>Itapoã</li>
                    <li>Jardim Botânico</li>
                    <li>Lago Norte</li>
                    <li>Lago Sul</li>
                    <li>Núcleo Bandeirante</li>
                    <li>Paranoá</li>
                    <li>Park Way</li>
                    <li>Planaltina</li>
                    <li>Recanto das Emas</li>
                    <li>Riacho Fundo</li>
                    <li>Riacho Fundo II</li>
                    <li>Samambaia</li>
                    <li>Santa Maria</li>
                    <li>São Sebastião</li>
                    <li>SCIA (Setor Complementar de Indústria e Abastecimento)</li>
                    <li>SIA (Setor de Indústria e Abastecimento)</li>
                    <li>Sobradinho</li>
                    <li>Sobradinho II</li>
                    <li>Taguatinga</li>
                    <li>Varjão</li>
                </ul>
            </body>
        </>
    )
}