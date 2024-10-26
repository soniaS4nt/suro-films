import { getMovies } from '@/movie/api'
import { MovieDetailI } from '@/movie/types'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useGetDetail = (id: string) => {
  const [detail, setDetail] = useState<MovieDetailI>()
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchDetail() {
      try {
        const data = await getMovies(id)
        setDetail(data)
        setError(false)
      } catch (error) {
        setError(error)
      }
    }

    if (id) {
      fetchDetail()
    }
  }, [id])

  return { detail, error }
}

export default useGetDetail
