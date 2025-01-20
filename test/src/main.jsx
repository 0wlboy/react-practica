import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './resources/css/output.css'

import Home from './pages/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home></Home>
  </StrictMode>,
)
