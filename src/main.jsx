import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Home } from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AllEpisodes from './components/AllEpisodes.jsx'
import Episodes from './components/Episodes.jsx'
import AllCharacters from './components/AllCharacters.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/Home',
    element:<Home />
  },
  {
    path:'/AllEpisodes',
    element:<AllEpisodes />
  },
  {
    path:'/Episodes',
    element:<Episodes />
  },
  {
    path:'/AllCharacters',
    element:<AllCharacters />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
