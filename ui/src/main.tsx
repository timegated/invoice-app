import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom';

import './main.css'
import ColorList from './components/ColorList';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/colors',
    element: <ColorList />
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)