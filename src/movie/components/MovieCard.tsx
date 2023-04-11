import Link from "next/link";
import { MovieI } from "@/movie/types";
import Img from "@/movie/components/Img";

interface Props {
  movie: MovieI;
}

export default function MovieCard({ movie }: Props): JSX.Element {
  return (
    <div
      key={movie.id}
      className="xl:w-80 lg:w-72 md:w-64 sm:w-auto shadow-lg rounded-2xl m-2 p-2"
    >
      <Link href={`/${movie.id}`}>
        <Img
          className="rounded-2xl w-auto p-2"
          src={movie.poster_path}
          alt={movie.title}
          width={200}
          height={300}
        />
        <h1 className="text-center font-bold my-2">{movie.title}</h1>
      </Link>
    </div>
  );
}
