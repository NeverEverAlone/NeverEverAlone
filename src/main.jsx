import React from 'react'
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import router from './Router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
