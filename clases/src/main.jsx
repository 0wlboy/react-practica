import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import "./resources/css/output.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>hola mundo</h1>
    <Home></Home>
  </StrictMode>,
)
