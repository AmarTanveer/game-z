import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./useGenres";

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
    metacritic: number;
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = (selectedGenre: Genre | null, deps?: any[]) => { 
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    deps = [selectedGenre?.id];
    useEffect(() => {
        // const controller = new AbortController();
        setLoading(true);

      apiClient
        .get<FetchGamesResponse>("/games",{params: {genres: selectedGenre?.id}})
        .then((response) => {
            setGames(response.data.results);
        })
        .then(() => setLoading(false))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)});
            
     
    }, deps ? [...deps] : []);

    return {error, games, loading};
}

export default useGames;