import axios, { AxiosResponse } from 'axios'
import { Param } from '@/movie/types'

export const URL = 'https://api.themoviedb.org/3/movie'
export const URL_IMG = 'https://image.tmdb.org/t/p/original'

export const getMovies = async (param: Param) => {
  try {
    const response: AxiosResponse = await axios.get(`${URL}/${param}`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY!,
        param: param,
        append_to_response: 'credits',
      },
    })

    const { data } = response

    return data
  } catch (error) {
    return { error }
    throw new Error('Error al obtener las películas')
  }
}
