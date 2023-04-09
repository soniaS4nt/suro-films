import Img from "@/movie/components/Img";
import { MovieDetailI } from "@/movie/types";
import Footer from "../layouts/Footer";

interface Props {
  detail: MovieDetailI;
}

export default function DetailMovieComponent({ detail }: Props) {
  const { cast, crew } = detail?.credits;

  return (
    <div className="container p-5 h-screen ">
      <h1 className="text-center font-bold my-2">{detail.title}</h1>
      <div className="flex flex-col items-center relative">
        <div
          className={` rounded-2xl`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.poster_path})`,
            objectFit: "cover",
            width: "100%",
            height: "100%",
            filter: "10px",
            opacity: "0.5",
            position: "absolute",
            zIndex: -1,
          }}
        ></div>
        <Img
          className="rounded-2xl w-96 p-2 h-auto "
          src={detail.poster_path}
          alt={detail.title}
          width={200}
          height={300}
        />
      </div>

      {/* agregar condicional de imagen */}
      <div className="flex lg:flex-row gap-2 sm:flex-col">
        <Img
          className="rounded-2xl w-56 p-2"
          alt={detail.title}
          src={detail.backdrop_path}
          width={100}
          height={150}
        />
        <p className="text-justify m-1 p-1">{detail.overview}</p>
      </div>
      <h1 className="text-center font-bold text-600 my-2">Reparto</h1>
      <div className="w-full sm:max-h-screen scrollbar-thumb-gradient flex overflow-x-scroll p-10 ">
        {cast?.map((cast) => (
          <div
            key={cast.id}
            className="sm:w-2/3 md:w-1/4 lg:w-1/5  flex-none p-2 rounded-2xl shadow-lg m-2"
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
            <div className="text-center mt-2">
              <h1 className="font-semibold">{cast.name}</h1>
              <p>{cast.character}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-center font-bold my-2">Miembros de producción</h1>
      <div className="w-full sm:max-h-screen scrollbar-thumb-gradient flex overflow-x-scroll p-10 ">
        {crew?.map((crew, index) => (
          <div
            key={index}
            className="sm:w-2/3 md:w-1/4 lg:w-1/5  flex-none p-2 rounded-2xl shadow-lg m-2"
          >
            {crew.profile_path ? (
              <Img
                className="w-full object-contain rounded-2xl"
                alt={crew.name}
                src={crew.profile_path}
                width={50}
                height={50}
              />
            ) : (
              <img
                className="w-full object-contain rounded-2xl"
                src="https://geografia.departamentos.uva.es/wp-content/uploads/2017/06/sin-foto-hombre.jpg"
                alt={crew.name}
              />
            )}
            <div className="text-center mt-2">
              <h1 className="font-semibold">{crew.name}</h1>
              <p>{crew.job}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
