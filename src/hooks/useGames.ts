import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Platform {
    platform: {
        id: number;
        name: string;
        slug: string;
    }
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    platforms: Platform[];
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();
      apiClient
        .get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then((response) => setGames(response.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)});
    }, []);

    return {error, games};
}

export default useGames;