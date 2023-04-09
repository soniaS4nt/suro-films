import useGetPopular from "@/movie/hooks/useGetPopular";
import Movie from "@/movie/components/Movie";
import Loading from "@/movie/components/Loading";

export default function PopularMovie() {
  const { popular, loading } = useGetPopular();

  return (
    <>
      {loading ? (
        <Loading />
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
