import React, { useState } from "react";

function NewCities() {
  const [graph, setGraph] = useState({});

  function handleAddCity(cityName, neighborName, distance) {
    // Verifica se a cidade já existe no grafo
    if (graph[cityName]) {
      // Adiciona vizinho à cidade existente
      graph[cityName].push({ cidade: neighborName, distancia: distance });
    } else {
      // Cria um novo nó no grafo para a cidade
      graph[cityName] = [{ cidade: neighborName, distancia: distance }];
    }
    // Verifica se o vizinho já existe no grafo
    if (!graph[neighborName]) {
      // Cria um novo nó no grafo para o vizinho
      graph[neighborName] = [{ cidade: cityName, distancia: distance }];
    } else {
      // Verifica se a cidade já é vizinha do vizinho
      const hasNeighbor = graph[neighborName].some(
        (edge) => edge.cidade === cityName
      );
      if (!hasNeighbor) {
        // Adiciona cidade como vizinha do vizinho existente
        graph[neighborName].push({ cidade: cityName, distancia: distance });
      }
    }
    // Atualiza o estado do componente com o novo grafo
    setGraph({ ...graph });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const cityName = event.target.cityName.value;
    const neighborName = event.target.neighborName.value;
    const distance = event.target.distance.value;
    handleAddCity(cityName, neighborName, distance);
    event.target.reset();
  }

  return (
    <>
      <head>
        <title>Cadastro de cidades</title>
      </head>
      <body>
        <h1>Cadastro de Cidades</h1>
        <form id="city-form" onSubmit={handleSubmit}>
          <label htmlFor="cityName">Nome da cidade:</label>
          <input
            type="text"
            id="cityName"
            name="cityName"
            placeholder="Insira o nome da cidade"
            required
          />

          <label htmlFor="neighborName">Nome da cidade vizinha:</label>
          <input
            type="text"
            id="neighborName"
            name="neighborName"
            placeholder="Insira o nome do vizinho"
            required
          />
          <label htmlFor="distance">Distância:</label>
          <input
            type="number"
            id="distance"
            name="distance"
            placeholder="Insira a distância entre as cidades"
            min="0"
            required
          />
          <button type="submit">Adicionar vizinho</button>
          <ul>
            {Object.entries(graph).map(([city, neighbors], index) => (
              <li key={index}>
                {city}:{" "}
                {neighbors.map((neighbor, index) => (
                    <span key={index}>
                        {neighbor.cidade} ({neighbor.distancia} km)
                        {index === neighbors.length - 1 ? "" : ", "}
                    </span>
                ))}
              </li>
            ))}
        </ul>
        </form>
    </body>
</>
);
}

export default NewCities;
