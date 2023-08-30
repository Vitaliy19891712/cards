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
import { User, useLogoutMutation, useMeQuery } from './services'
import { useEffect, useState } from 'react'

const privateRoutes: RouteObject[] = [
  {
    path: '/profile',
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
    path: '/create-password',
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
        element:  <PrivateRoutes />,
        children: privateRoutes,
      },

      ...publicRoutes,
    ],
  },
])

function WithHeader() {
  const { data, isSuccess } = useMeQuery()
  const [logout] = useLogoutMutation()
  console.log(isSuccess)
  
  return (
    <>
      <Header isAuth={!!data} userInfo={data} onSignOut={logout}></Header>
      <Outlet />
    </>
  )
}

function PrivateRoutes() {
  const { data, isSuccess, isLoading } = useMeQuery()
  console.log(isSuccess)

   if (isLoading) return <div>Loading...</div>
  
  return data ? <Outlet /> : <Navigate to="/login" />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
