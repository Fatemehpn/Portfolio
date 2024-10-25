import React from 'react'
import {useState, useEffect, useRef} from 'react'
import { restBase } from '../utilities/utilities'
import { rightArrow } from '../utilities/svg';
import { Link } from 'react-router-dom';
import { motion, useScroll,useTransform, MotionValue } from 'framer-motion';


function DetailedWorkHomePage() {
  const restPathPosts = restBase + 'fp-work/?_embed=true&acf_format=standard';
  const [restDataWork, setDataWork] = useState([]);
  const [isLoaded, setIsLoaded]     = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      const response_posts = await fetch(restPathPosts);
      if(response_posts.ok){
        const workData = await response_posts.json();
        setDataWork(workData);
        setIsLoaded(true);
      }else{
        setIsLoaded(false);
      }
    }
    fetchData()
  },[restPathPosts])



  return (
    <section className='home-work-section section' id='work-section'>
     { isLoaded?
       <section id={`post-${restDataWork.id}`}> 
         <h2>Featured Works</h2>
         {
           restDataWork.map(post=>
             <article key={post.id}>
               <div className='home-page-single-work'  >
                 <h3>{post.acf.work_title}</h3>
                 <div className='top-skills'>
                   {(post.acf.tools).map(tool=>
                     <p>{tool}</p>
                   )}
                 </div>
 
                 <p className='work-short-overview'>{post.acf.work_short_description}</p>
                 <Link className='learn-more-button' to={`/${post.slug}`}>
                   <p>Learn More</p>
                   {rightArrow}
                 </Link>
               </div>
               <div className='image-container' >
                 <img src={post.acf.work_image.url} alt={post.title.rendered}/>
               </div>
             </article>
           )
         }
 
       </section>
       :
       <p>Nothing is Loaded</p>
     }
    </section>
   )
  }


export default DetailedWorkHomePage