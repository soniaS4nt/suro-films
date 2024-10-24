import Carousel from '@/movie/components/Carousel'
import useGetUpcoming from '../hooks/useGetUpcoming'
import SuperCarousel from '../components/SuperCarousel'
import { MovieI } from '../types'

export default function UpComingMovie() {
  const { upcoming } = useGetUpcoming()
  const movies: MovieI[] = upcoming?.results || []

  return <SuperCarousel movies={movies} />
}
