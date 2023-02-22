import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import './main.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/invoices',
    element: <div>Invoice Component</div>
  },
  {
    path: '/invoices/:id',
    element: <div>Invoice by ID</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)