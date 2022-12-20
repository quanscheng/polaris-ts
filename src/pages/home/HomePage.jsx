import { useEffect, useState } from 'react'
import { getHomeInfo } from '../../api/home'

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
