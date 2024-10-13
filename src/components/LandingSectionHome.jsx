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
        <div>
          <h1>{restDataLanding.acf.my_name}</h1>
          <h2>{restDataLanding.acf.my_title}</h2>
          <p>{restDataLanding.acf.my_tagline}</p>
        </div>
        <svg enable-background="new 0 0 26 26" height="26px" id="Layer_1" version="1.1" viewBox="0 0 26 26" width="26px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><polygon fill="#231F20" points="0.046,2.582 2.13,0.498 12.967,11.334 23.803,0.498 25.887,2.582 12.967,15.502  "/><polygon fill="#231F20" points="0.046,13.582 2.13,11.498 12.967,22.334 23.803,11.498 25.887,13.582 12.967,26.502  "/></g></svg>
     
      </section>
      :
      <p>Nothing is Loaded</p>
    }
   </>
    
  )
}

export default LandingSectionHome