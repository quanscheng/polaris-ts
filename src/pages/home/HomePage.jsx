import { getFetcher } from '@/api/fetcher'
import { TEST_GET_URL } from '@/api/home'
import useSWR from 'swr'

export const HomePage = () => {
  const { data, error, isLoading } = useSWR([TEST_GET_URL], getFetcher)

  if (isLoading) return <>loading...</>
  if (error) return <>error !</>

  return <div>HomePage: {data.repo.description}</div>
}
