import useGetPopular from "@/movie/hooks/useGetPopular";
import MovieCard from "@/movie/components/MovieCard";

export default function PopularMovie() {
  const { popular } = useGetPopular();

  return (
    <>
      {popular?.results.map((movie) => (
        <div key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </>
  );
}
