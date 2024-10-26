import useGetPopular from '@/movie/hooks/useGetPopular'
import MovieCard from '@/movie/components/MovieCard'

export default function PopularMovie() {
  const { popular } = useGetPopular()

  return (
    <div className="flex flex-wrap justify-center overflow-x-hidden">
      {popular?.results.map((movie) => (
        <div
          key={movie.id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 hover:scale-105 transition-transform duration-200"
        >
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  )
}
