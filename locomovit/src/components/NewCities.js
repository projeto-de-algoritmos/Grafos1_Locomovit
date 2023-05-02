import React, { useState } from "react";
import './styles/NewCities.css'

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

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  String.prototype.toPascalCase = function () {
    return this.split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  };

  function handleSubmit(event) {
    event.preventDefault();
    const cityName = event.target.cityName.value;
    const neighborName = event.target.neighborName.value;
    const distance = event.target.distance.value;
    handleAddCity(cityName, neighborName, distance);

    event.target.reset();
  }

  function shortestPaths(graph, start) {
    const queue = [start];
    const visited = {};
    const distanceMap = {};
    const previousMap = {};

    visited[start] = true;
    distanceMap[start] = 0;

    while (queue.length > 0) {
      const currentCity = queue.shift();
      const neighbors = graph[currentCity] || [];

      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i].cidade;
        const distance = parseFloat(neighbors[i].distancia); // converter para float
        const tentativeDistance = distanceMap[currentCity] + distance;

        if (!visited[neighbor] || tentativeDistance < distanceMap[neighbor]) {
          visited[neighbor] = true;
          distanceMap[neighbor] = tentativeDistance;
          previousMap[neighbor] = currentCity;
          queue.push(neighbor);
        }
      }
    }

    return { distanceMap, previousMap };
  }


  function handleCalculateDistance(event) {
    event.preventDefault();
    const { distanceMap } = shortestPaths(graph, origin);

    if (distanceMap[destination] !== undefined) {
      setDistance(distanceMap[destination]);
    } else {
      setDistance(0);
    }
  }

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState(0);

  return (
    <div className="newCities">
      <title>Cadastro de cidades</title>
      <body>
        <h1>Cadastro de Cidades</h1>
        <form id="city-form" onSubmit={handleSubmit}>
          <div className="nomeCidade">
            <label htmlFor="cityName">Nome da cidade:</label>
            <input
              type="text"
              id="cityName"
              name="cityName"
              placeholder="Insira o nome da cidade"
              required
            />
          </div>

          <div className="nomeVizinho">
            <label htmlFor="neighborName">Nome da cidade vizinha:</label>
            <input
              type="text"
              id="neighborName"
              name="neighborName"
              placeholder="Insira o nome do vizinho"
              required
            />
          </div>


          <div className="distancia">
            <label htmlFor="distance">Distância:</label>
            <input
              type="number"
              id="distance"
              name="distance"
              placeholder="Insira a distância em km entre as cidades"
              min="0"
              required
            />
          </div>


          <div className="submit">
            <button type="submit">Adicionar vizinho</button>
          </div>
          <ul>
            {Object.entries(graph).map(([city, neighbors], index) => (
              <li key={index}>
                {city.toPascalCase()}:{" "}
                {neighbors.map((neighbor, index) => (
                  <span key={index}>
                    {neighbor.cidade.toPascalCase()} ({neighbor.distancia} km)
                    {index === neighbors.length - 1 ? "" : ", "}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </form>
        <hr />
        <h1>Distancia entre as cidades</h1>
        <form onSubmit={handleCalculateDistance}>
          <label htmlFor="origin">Origem:</label>
          <select id="origin" value={origin} onChange={handleOriginChange}>
            <option value="">Selecione a cidade de origem</option>
            {Object.entries(graph).map(([city]) => (
              <option key={city} value={city} onSelect={(event) => setOrigin(event.target
                .value)}>
                {city.toPascalCase()}
              </option>
            ))}
          </select>

          <label htmlFor="destination">Destino:</label>
          <select id="destination" value={destination} onChange={handleDestinationChange}>
            <option value="">Selecione a cidade de destino</option>
            {Object.entries(graph).map(([city]) => (
              <option key={city} value={city} onSelect={(event) => setDestination(event.target
                .value)}>
                {city.toPascalCase()}
              </option>
            ))}
          </select>
          <button type="submit">Calcular distância</button>
        </form>
        {distance > 0 && (
          <p>
            A distância entre {origin.toPascalCase()} e {destination.toPascalCase()} é de {distance} km.
          </p>
        )}
        {distance === 0 && origin && destination && (
          <p>Não existe caminho entre {origin.toPascalCase()} e {destination.toPascalCase()}.</p>
        )}
      </body>
    </div>
  );
}
export default NewCities;
