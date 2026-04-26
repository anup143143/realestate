import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Style.css'
import {router} from "./Componets/Router.jsx"
import {RouterProvider} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)