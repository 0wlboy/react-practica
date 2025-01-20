import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home, Hooks} from './pages/pages'
import "./resources/css/output.css"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Hooks' element={<Hooks />}></Route>
        <Route path='*' element={<h1>Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
