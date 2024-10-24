import { getMovies } from '@/movie/api'
import { Films, Param } from '@/movie/types'
import { useEffect, useState } from 'react'

const useGetUpcoming = () => {
  const [upcoming, setUpcoming] = useState<Films>()
  const [loading, setLoading] = useState<boolean>(true)

  async function getUpcomingMovie() {
    const data = await getMovies('upcoming')
    setUpcoming(data)
    setLoading(false)
  }
  useEffect(() => {
    getUpcomingMovie()
  }, [])

  return {
    upcoming,
    loading,
  }
}

export default useGetUpcoming
