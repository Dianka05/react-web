import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { Home } from './components/Pages/Home.jsx'
import { NotFound } from './components/Pages/NotFound.jsx'
import CurrentArticle from './components/OptionalComponents/Article/CurrentArticle.jsx'
import { Main } from './components/MainComponents/Main.jsx'
import Add from './components/Pages/Add.jsx'

const router = createBrowserRouter([
  {
    path: 'news',
    element: <Main />,
    errorElement: <NotFound />,
  },
  {
    path: 'news/:articleId',
    element: <CurrentArticle />,
    errorElement: <NotFound />
    
  },
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: 'add',
    element: <Add />,
    errorElement: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
