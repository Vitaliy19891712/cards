import { Router } from './router'
import { useGetMeQuery } from './services'

export function App() {
  useGetMeQuery()
  return (
    <>
      <Router />
    </>
  )
}
