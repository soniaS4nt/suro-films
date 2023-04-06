import { Films, MovieDetailI, Param } from "@/types";
import axios from "axios";

export const URL = "https://api.themoviedb.org/3/movie";

export const getMovies = async (param: Param) => {
  try {
    const response = await axios.get(`${URL}/${param}`, {
      params: { api_key: process.env.NEXT_PUBLIC_API_KEY, query: param },
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = async (id: string) => {
  try {
    const response = await axios.get(`${URL}/${id}`, {
      params: { api_key: process.env.NEXT_PUBLIC_API_KEY, query: id },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
