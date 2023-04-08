import { getMovies } from "@/movie/api";
import { MovieDetailI, Param } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useGetDeatail = () => {
  const [detail, setDetail] = useState<MovieDetailI>();
  const [error, setError] = useState(false);
  const [id, setId] = useState(null);

  const router = useRouter();
  const idM = router.query.id as string;

  useEffect(() => {
    localStorage.setItem("idMovie", idM);
    const id = localStorage.getItem("idMovie");
    setId(id);
  }, [idM]);

  async function getDetail() {
    const data = await getMovies(id);

    setDetail(data);
    setError(false);
  }

  useEffect(() => {
    getDetail();
  }, [id]);

  return { detail, error };
};

export default useGetDeatail;
