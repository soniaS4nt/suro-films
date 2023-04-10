import useGetPopular from "@/movie/hooks/useGetPopular";
import Movie from "@/movie/components/Movie";

export default function PopularMovie() {
  const { popular } = useGetPopular();

  return (
    <>
      {popular?.results.map((movie) => (
        <div key={movie.id}>
          <Movie movie={movie} />
        </div>
      ))}
    </>
  );
}
