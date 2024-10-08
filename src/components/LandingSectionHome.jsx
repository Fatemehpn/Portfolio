import React from 'react'
import {useState, useEffect} from 'react'
import { restBase } from '../utilities/utilities'

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
        console.log(restDataLanding);
        console.log('hi');
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
      <section className='landing-section'> 
        <h1>{restDataLanding.acf.my_name}</h1>
        <h2>{restDataLanding.acf.my_title}</h2>
        <p>{restDataLanding.acf.my_tagline}</p>
      </section>
      :
      <p>Nothing is Loaded</p>
    }
   </>
    
  )
}

export default LandingSectionHome