import React from 'react'
import {useState, useEffect} from 'react'
import { restBase } from '../utilities/utilities'
import { rightArrow } from '../utilities/svg';
import { Link } from 'react-router-dom';

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
   <section className='home-work-section'>
    { isLoaded?
      <section id={`post-${restDataWork.id}`}> 
        <h2>Featured Works</h2>
        {
          restDataWork.map(post=>
            <article>
              <div className='home-page-single-work'>
                <h3>{post.acf.work_title}</h3>

                {(post.acf.tools).map(tool=>
                  <span>{tool}</span>
                )}

                <p>{post.acf.work_short_description}</p>
                <Link className='learn-more-button'>
                  <p>Learn More</p>
                  {rightArrow}
                </Link>
              </div>
              <div className='image-container'>
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