import { useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer';
import HomePage from './pages/HomePage'
import './styles/styles.css'
import SingleWorkPage from './pages/SingleWorkPage'
import Loading from './components/Loading';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoaded(true);
    }, 2500);

    return()=> clearTimeout(timer)
  })

  return (
    <BrowserRouter>
    {
      isLoaded ? (
        <>
      <Header/>
      <ScrollToTop/>
        <Routes>
          <Route  path='/' element={<HomePage/>}/>
          <Route  path='/:slug' element={<SingleWorkPage />}/>
        </Routes>
      <footer>
        <Footer/>
      </footer >
        </>
      )
      :
      <Loading/>
    }
    </BrowserRouter>
  )
}

export default App
