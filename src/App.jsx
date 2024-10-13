import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import './styles/styles.css'
import SingleWorkPage from './pages/SingleWorkPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <ScrollToTop/>
        <Routes>
          <Route  path='/' element={<HomePage/>}/>
          <Route  path='/singleworkpage/:slug' element={<SingleWorkPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
