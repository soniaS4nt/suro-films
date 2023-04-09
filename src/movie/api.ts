import axios from "axios";
import { Param } from "@/types";

export const URL = "https://api.themoviedb.org/3/movie";

export const getMovies = async (param: Param) => {
  try {
    const response = await axios.get(`${URL}/${param}`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        query: param,
        append_to_response: "credits",
      },
    });

    const { data } = response;
    return data;
  } catch (error) {
    throw new Error("Error al obtener las películas");
  }
};
