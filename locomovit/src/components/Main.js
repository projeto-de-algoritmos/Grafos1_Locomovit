import Header from './Header';
import './styles/Main.css';
import React from 'react';
import NewCities from './NewCities';

export const Main = () => {
    return (
        <>
            <header className="App-header">
                <Header />
            </header>
            <body>
                <NewCities />
            </body>
        </>
    )
}