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
    <>
      <head>
        <title>Cadastro de cidades</title>
        </head>
      <body>
        <h1>Cadastro de cidades</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="cityName">Nome da cidade:</label>
          <input type="text" id="cityName" name="cityName" />
          <label htmlFor="neighborName">Nome da cidade vizinha:</label>
          <input type="text" id="neighborName" name="neighborName" />
          <label htmlFor="distance">Distância entre as cidades:</label>
          <input type="number" id="distance" name="distance" />
          <button type="submit">Adicionar cidade</button>
        </form>
        
        <h2>Lista de cidades e vizinhos</h2>
        <ul>
            {Object.keys(graph).map((cityName, index) => (
            <li key={index}>
                {cityName} - Vizinhos:{" "}
                {graph[cityName].map((edge, index) => (
                <span key={index}>
                    {edge.cidade} ({edge.distancia} km){" "}
                </span>
                ))}
            </li>
            ))}
        </ul>
        <hr />
        <h1>Distancia entre as cidades</h1>
        <form onSubmit={handleCalculateDistance}>
          <label htmlFor="origin">Cidade de origem:</label>
          <input type="text" id="origin" name="origin" value={origin} onChange={(event) => setOrigin(event.target.value)} />
          <label htmlFor="destination">Cidade de destino:</label>
          <input type="text" id="destination" name="destination" value={destination} onChange={(event) => setDestination(event.target.value)} />
          <button type="submit">Calcular distância</button>
        </form>
        <p>A distância entre {origin} e {destination} é de {distance} km.</p>
      </body>
    </>
  );
}
export default NewCities;