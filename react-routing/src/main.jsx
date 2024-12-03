import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider ,  createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Roots from './roots.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Service from './components/Service/Service.jsx'
import Why from './components/Why/Why.jsx'
import Team from './components/Team/Team.jsx'
import User from './components/user/User.jsx'
import Github from './components/Github/Github.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots />,
    children : [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'service',
        element: <Service />,
      },
      {
        path: 'why-us',
        element: <Why />,
      },
      {
        path: 'github',
        element: <Github />,
      },
      {
        path: 'user/:id',
        element: <User />,
      }

    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
