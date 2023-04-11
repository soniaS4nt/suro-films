import Link from "next/link";
import Img from "@/movie/components/Img";

export default function Carousel({ movie }) {
  return (
    <div
      className="sm:w-1/2 lg:w-1/5  flex-none px-2 rounded-2xl shadow-lg mx-2 p-2"
      key={movie.id}
    >
      <Link href={`/${movie.id}`}>
        <Img
          className="w-full object-contain rounded-2xl"
          alt={movie.title}
          src={movie.poster_path}
          width={50}
          height={50}
        />
        <h1 className="text-center font-bold my-2">{movie.title}</h1>
      </Link>
    </div>
  );
}
