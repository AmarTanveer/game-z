
import apiClient from "../services/api-client";
import { useState, useEffect } from "react";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map(game => {return <li key={game.id}>{game.name}</li>})}
      </ul>
    </>
  );
}

export default GameGrid;
