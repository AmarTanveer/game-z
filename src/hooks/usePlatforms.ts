import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/platforms/lists/parents", { signal: controller.signal })
      .then((res) => {
        setPlatforms(res.data.results);
      })
      .catch((err) => {
        setError(err.message || "Failed to fetch platforms");
      });
  }, []);
  return { platforms, error };
};

export default usePlatforms;
