import useGetDeatil from "@/movie/hooks/useGetDeatil";
import DetailMovieComponent from "@/movie/components/DetailMovie";

export default function MovieDetail() {
  const { detail, error } = useGetDeatil();

  return (
    <div className="container mx-auto">
      {detail && <DetailMovieComponent detail={detail} />}
      {error && <div className="text-2xl text-red">{error}</div>}
    </div>
  );
}
