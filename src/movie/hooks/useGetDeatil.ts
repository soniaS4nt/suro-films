import { getMovies } from "@/movie/api";
import { MovieDetailI } from "@/movie/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useGetDetail = () => {
  const [detail, setDetail] = useState<MovieDetailI>();
  const [error, setError] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    localStorage.setItem("id", id as string);
  }, [id]);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const data = await getMovies(id as string);
        setDetail(data);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }

    if (id) {
      fetchDetail();
    }
  }, [id]);

  return { detail, error };
};

export default useGetDetail;
