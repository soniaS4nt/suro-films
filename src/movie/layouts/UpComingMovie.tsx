import Carousel from "@/movie/components/Carousel";
import useGetUpcoming from "../hooks/useGetUpcoming";

export default function UpComingMovie() {
  const { upcoming } = useGetUpcoming();

  return (
    <div className=" w-full sm:max-h-screen scrollbar-thumb-gradient flex overflow-x-scroll  p-7  mx-2">
      {upcoming?.results.map((movie) => (
        <Carousel key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
