import useGetUpcoming from '../hooks/useGetUpcoming'
import SuperCarousel from './SuperCarousel'
import { MovieI } from '../types'

export default function UpComingMovie() {
  const { upcoming } = useGetUpcoming()
  const movies: MovieI[] = upcoming?.results || []

  return <SuperCarousel movies={movies} />
}
