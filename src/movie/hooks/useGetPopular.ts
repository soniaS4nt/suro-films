import { getMovies } from "@/movie/api";
import { Films } from "@/movie/types";
import { useEffect, useState } from "react";

const useGetPopular = () => {
  const [popular, setPopular] = useState<Films>();
  const [loading, setLoading] = useState<boolean>(true);

  async function getPopularMovie() {
    const data = await getMovies("popular");
    setPopular(data);
    setLoading(false);
  }

  useEffect(() => {
    getPopularMovie();
  }, []);

  return {
    popular,
    loading,
  };
};

export default useGetPopular;
