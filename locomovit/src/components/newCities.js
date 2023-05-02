import React, { useState } from "react";

function NewCities() {
  const [city, setCity] = useState({ name: "", neighbors: [] });
  const [neighbor, setNeighbor] = useState({ name: "", distance: "" });

  function handleChange(e) {
    if (e.target.name === "city-name") {
      setCity({ ...city, name: e.target.value });
    } else {
      setNeighbor({ ...neighbor, [e.target.name]: e.target.value });
    }
  }

  function addNeighbor() {
    setCity({
      ...city,
      neighbors: [...city.neighbors, { ...neighbor }],
    });
    setNeighbor({ name: "", distance: "" });
  }

  function removeNeighbor(index) {
    const newNeighbors = [...city.neighbors];
    newNeighbors.splice(index, 1);
    setCity({ ...city, neighbors: newNeighbors });
  }

  return (
    <>
      <head>
        <title>Cadastro de cidades</title>
      </head>
      <body>
        <h1>Cadastro de Cidades</h1>
        <form id="city-form">
          <label htmlFor="city-name">Nome da cidade:</label>
          <input
            type="text"
            id="city-name"
            name="city-name"
            placeholder="Insira o nome da cidade"
            onChange={handleChange}
            value={city.name ? city.name : ""}
            required
          />

          <label htmlFor="neighbor-name">Nome da cidade vizinha:</label>
          <input
            type="text"
            id="neighbor-name"
            name="name"
            placeholder="Insira o nome do vizinho"
            onChange={handleChange}
            value={neighbor.name}
            required
          />
          <label htmlFor="distance">Distância:</label>
          <input
            type="number"
            id="distance"
            name="distance"
            placeholder="Insira a distância entre as cidades"
            min="0"
            value={neighbor.distance}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={addNeighbor}>
            Adicionar vizinho
          </button>
          <ul>
            {city.neighbors.map((neighbor, index) => (
              <li key={index}>
                {neighbor.name} - {neighbor.distance} km
                <button type="button" onClick={() => removeNeighbor(index)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </form>
      </body>
    </>
  );
}

export default NewCities;
