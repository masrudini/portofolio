import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/404';
import Portfolio from './pages/portofolio';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />
  // },
  // {
  //   path: "/register",
  //   element: <RegisterPage />
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
