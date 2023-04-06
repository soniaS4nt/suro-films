/* eslint-disable @next/next/no-img-element */
import { MovieI } from "@/types";

interface Props {
  movie: MovieI;
}

export default function MovieComponent({ movie }: Props): JSX.Element {
  return (
    <div key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
      />
      <h1>{movie.title}</h1>
    </div>
  );
}
