import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {  createBrowserRouter, RouterProvider} from 'react-router-dom'
import { MainPage } from './pages/MainPage.tsx'
import { CreateRoute } from './pages/CreateRoute.tsx'

const router1 = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
       {
        path: '',
        element: <MainPage/>,
       },
       {
        path: '/create',
        element: <CreateRoute/>,
       }
    ]
  }])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router1} />
  </React.StrictMode>,
)
