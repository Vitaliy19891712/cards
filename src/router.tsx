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

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/check-email',
    element: <CheckEmail />,
  },
  {
    path: '/create-password',
    element: <CreateNewPassword />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/register',
    element: <SignUp />,
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
const router = createBrowserRouter([
  {
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
  return (
    <>
      <Header isAuth={true} name={'Vitaliy'}></Header>
      <Outlet />
    </>
  )
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export const Router = () => {

  return <RouterProvider router={router} />
}
