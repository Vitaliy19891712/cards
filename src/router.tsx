import { createBrowserRouter, RouterProvider, RouteObject, Outlet, Navigate, useNavigate } from 'react-router-dom'
import { CheckEmail, ForgotPassword, Login, SignUp, CreateNewPassword, Profile, PacksList, CardsList } from './pages'
import { Header } from './components/ui/header'
import { useGetMeQuery, useLogoutMutation } from './services'
import { LearnRandomCards } from './pages/learnRandomCards'
import { LearnCard } from './pages/learnCard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { memo, useCallback } from 'react'

const PrivateRoutes = memo(() => {
  const { data, isLoading } = useGetMeQuery()

  if (isLoading) return <div>Loading...</div>

  return data ? <Outlet /> : <Navigate to="/login" />
})

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Profile />,
  },

  {
    path: '/packs',
    element: <PacksList />,
  },

  {
    path: '/packs/:id/cards',
    element: <CardsList />,
  },
  {
    path: '/packs/:id/learn',
    element: <LearnRandomCards />,
  },
  {
    path: '/packs/:id/card',
    element: <LearnCard />,
  },
]
const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/check-email',
    element: <CheckEmail />,
  },
  {
    path: '/create-password/:token',
    element: <CreateNewPassword />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/register',
    element: <SignUp />,
  },
]
const router = createBrowserRouter([
  {
    path: '/',
    element: <WithHeader />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },

      ...publicRoutes,
    ],
  },
])

function WithHeader() {
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()
  const onSignOutHandler = useCallback(() => {
    logout()
      .unwrap()
      .then(() => {
        navigate('/login')
      })
  }, [])
  return (
    <>
      <Header onSignOut={onSignOutHandler} />
      <Outlet />
      <ToastContainer />
    </>
  )
}

export const Router = () => {
  return <RouterProvider router={router} />
}
