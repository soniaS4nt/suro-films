import Img from "@/movie/components/Img";
import { MovieDetailI } from "@/types";

interface Props {
  detail: MovieDetailI;
}

export default function DetailMovieComponent({ detail }: Props) {
  return (
    <div className="container m-4 p-10 border">
      <h1 className="text-center font-bold text-600 my-2">{detail.title}</h1>
      <div className="border  flex flex-col items-center">
        <Img
          className="rounded-2xl w-96 p-2"
          src={detail.poster_path}
          alt={detail.title}
          width={200}
          height={300}
        />
      </div>

      <div className="flex lg:flex-row gap-2 sm:flex-col border">
        <Img
          className="rounded-2xl w-56 p-2"
          alt={detail.title}
          src={detail.backdrop_path}
          width={100}
          height={150}
        />
        <p className="text-justify m-1 p-1">{detail.overview}</p>
      </div>
      <h1 className="text-center font-bold text-600 my-2">Cast</h1>
      <div className="w-full sm:max-h-screen snap-x-mandatory scrollbar-thumb-gradient flex overflow-x-scroll p-10 ">
        {detail.credits?.cast.map((cast) => (
          <div
            key={cast.id}
            className="sm:w-1/2 lg:w-1/5  flex-none px-2 rounded-2xl shadow-lg m-2 p-2"
          >
            {!cast.profile_path ? (
              <img
                className="w-full object-contain rounded-2xl"
                src="https://geografia.departamentos.uva.es/wp-content/uploads/2017/06/sin-foto-hombre.jpg"
                alt={cast.name}
              />
            ) : (
              <Img
                className="w-full object-contain rounded-2xl"
                alt={cast.name}
                src={cast.profile_path}
                width={50}
                height={50}
              />
            )}

            <h1 className="font-semibold">{cast.name}</h1>
            <p>{cast.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
