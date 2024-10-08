import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Work from './Work'
import './styles/styles.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route  path='/' element={<HomePage/>}/>
          <Route  path='/work' element={<Work/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
