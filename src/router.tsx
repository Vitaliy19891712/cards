import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Outlet,
  Navigate,
} from 'react-router-dom'
import {
  CheckEmail,
  ForgotPassword,
  Login,
  SignUp,
  CreateNewPassword,
  Profile,
  PacksList,
} from './pages'
import { Header } from './components/ui/header'
import { useGetMeQuery, useLogoutMutation } from './services'

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Profile />,
  },

  {
    path: '/packs',
    element: <PacksList />,
  },
  // {
  //   path: 'cards/:id',
  //   element: <CardsList />,
  // },
  // {
  //   path: 'learn/:id/',
  //   element: <LearnPage />,
  // },
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
  const { data } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  return (
    <>
      <Header isAuth={!!data} userInfo={data} onSignOut={logout}></Header>
      <Outlet />
    </>
  )
}

function PrivateRoutes() {
  const { data, isLoading } = useGetMeQuery()

  if (isLoading) return <div>Loading...</div>

  return data ? <Outlet /> : <Navigate to="/login" />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
