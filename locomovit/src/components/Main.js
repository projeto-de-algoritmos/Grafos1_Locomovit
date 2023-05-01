import Header from './Header'
import './styles/Main.css'
import React, { useState } from 'react'
import City from './City'

export const Main = () => {
    const [cities, setCities] = useState([]);
    const [cityName, setCityName] = useState('');
    const [cityLatitude, setCityLatitude] = useState('');
    const [cityLongitude, setCityLongitude] = useState('');

    // Function to add a new city to the list
    const addCity = (name, latitude, longitude) => {
        const newCity = new City(name, latitude, longitude);
        setCities([...cities, newCity]);
    }

    return (
        <>
            <header className="App-header">
                <Header />
            </header>
            <div className="App-body">
                <input type='text' placeholder='cidade' value={cityName} onChange={e => setCityName(e.target.value)} />
                <input type='text' placeholder='latitude' value={cityLatitude} onChange={e => setCityLatitude(e.target.value)} />
                <input type='text' placeholder='longitude' value={cityLongitude} onChange={e => setCityLongitude(e.target.value)} />
                <button onClick={() => addCity(cityName, cityLatitude, cityLongitude)}>Add</button>
                <ul>
                    {cities.map(city => (
                        <li key={city.getName()}>
                            {city.getName()} ({city.getLatitude()}, {city.getLongitude()})
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
