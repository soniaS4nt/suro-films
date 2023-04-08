import useGetDeatil from "@/movie/hooks/useGetDeatil";
import DetailMovieComponent from "@/movie/components/DetailMovie";

export default function MovieDetail() {
  const { detail } = useGetDeatil();

  return (
    <div className="container mx-auto">
      {detail && <DetailMovieComponent detail={detail} />}
    </div>
  );
}
