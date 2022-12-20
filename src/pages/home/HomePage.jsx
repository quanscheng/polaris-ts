import { getHomeInfo } from '@/api/home'
import { useEffect, useState } from 'react'

export const HomePage = () => {
  const [repoNote, setRepoNote] = useState('')
  const testReq = async () => {
    const { repo } = await getHomeInfo()
    setRepoNote(repo.description)
  }
  useEffect(() => {
    testReq()
  }, [])
  return <div>HomePage: {repoNote}</div>
}
