import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { restBase } from '../utilities/utilities'
import { easeInOut, motion } from "framer-motion";
import Loading from './Loading';


function LandingSectionHome() {
  const restPathItems = restBase + 'pages/7'
  const [restDataLanding, setDataLanding] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    const fetchData = async() => {
      const response_items = await fetch(restPathItems);
      if(response_items.ok){
        const landingData = await response_items.json();
        setDataLanding(landingData);
        setIsLoaded(true);
      }else{
        setIsLoaded(false);
      }
    }
    fetchData();

  },[restPathItems])

  return (
    <>
    { isLoaded?
      <section className='landing-section section'> 
        <div className='name-wrapper'>
          <h1>{restDataLanding.acf.my_name}</h1>
          <h2>{restDataLanding.acf.my_title}</h2>
          <p>{restDataLanding.acf.my_tagline}</p>
        </div>
        <Link to='/#work-section'>
          <motion.svg 
            animate={{ y:[0,-3,0,3,0] }}
            transition={{ duration:0.9 ,ease:'easeInOut', repeat:Infinity}}
            enableBackground="new 0 0 26 26" height="26px" id="Layer_1" version="1.1" viewBox="0 0 26 26" width="26px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><polygon fill="#231F20" points="0.046,2.582 2.13,0.498 12.967,11.334 23.803,0.498 25.887,2.582 12.967,15.502  "/><polygon fill="#231F20" points="0.046,13.582 2.13,11.498 12.967,22.334 23.803,11.498 25.887,13.582 12.967,26.502  "/></g></motion.svg>
        </Link>
      </section>
      :
      <Loading/>
    }
   </>
    
  )
}

export default LandingSectionHome