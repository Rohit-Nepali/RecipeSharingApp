import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import Root from './routes/Root'
import './index.css'
import ErrorPage from './routes/ErrorPage'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Recipes from './pages/Recipes'
import AddRecipes from './pages/AddRecipes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <Navigate to='/home' />
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'recipes',
        element: <Recipes />
      },
      {
        path: 'addRecipes',
        element: <AddRecipes/>
      }
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
