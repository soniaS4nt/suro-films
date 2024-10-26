import Link from 'next/link'
import { MovieI } from '@/movie/types'
import Img from '@/movie/components/Img'

interface Props {
  movie: MovieI
}

export default function MovieCard({ movie }: Props): JSX.Element {
  return (
    <Link
      href={`/${movie.id}`}
      key={movie.id}
      className="w-[20vw] shadow-lg rounded-2xl m-1"
    >
      <Img
        className="rounded-2xl w-auto"
        src={movie.poster_path}
        alt={movie.title}
        width={200}
        height={300}
      />
    </Link>
  )
}
