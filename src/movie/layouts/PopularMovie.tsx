import useGetPopular from "@/movie/hooks/useGetPopular";
import Movie from "@/movie/components/Movie";

export default function PopularMovie() {
  const { popular, loading } = useGetPopular();

  return (
    <>
      {loading ? (
        <h1>Cargando..</h1>
      ) : (
        popular?.results.map((movie) => (
          <div className="" key={movie.id}>
            <Movie movie={movie} />
          </div>
        ))
      )}
    </>
  );
}
