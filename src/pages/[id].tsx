import useGetDeatil from '@/movie/hooks/useGetDeatil'
import DetailMovieComponent from '@/movie/components/DetailMovie'
import { useRouter } from 'next/router'

export default function MovieDetail() {
  const router = useRouter()
  const { id } = router.query
  const { detail, error } = useGetDeatil(id as string)

  return (
    <div className="container mx-auto">
      {detail && <DetailMovieComponent detail={detail} />}
      {error && <div className="text-2xl text-red">{error}</div>}
    </div>
  )
}
