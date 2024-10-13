import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { restBase } from '../utilities/utilities';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';


function SingleWorkPage() {
 const {slug} = useParams();

  const restPathPosts = restBase + `fp-single-work/?slug=${slug}&acf_format=standard`;
  const [restDataSingleWork, setDataSingleWork] = useState([]);
  const [isLoaded, setIsLoaded]     = useState(false);

  useEffect(() =>{
    const fetchData = async () =>{
      const response_posts = await fetch(restPathPosts);
      if(response_posts.ok){
        const singleWorkData = await response_posts.json();
        setDataSingleWork(singleWorkData);
        setIsLoaded(true);
        console.log(singleWorkData);
      }else{
        console.log('hi');
        setIsLoaded(false);
      }
    }
    fetchData();
  },[restPathPosts])
 

  return (
    <main>
      {
        isLoaded?
      <div>
            <section className='single-page-landing'>
              <h1>{restDataSingleWork[0].acf.single_page_title}</h1>
              <img src={restDataSingleWork[0].acf.single_page_work_image.url} alt={restDataSingleWork[0].acf.single_page_work_image.alt}/>
              <div className='single-page-buttons'>
                <a href={restDataSingleWork[0].acf.live_site_url}>
                  Live Site
                  <img/>
                </a>
                <a href={restDataSingleWork[0].acf.github_url}>GitHub</a>
              </div>
            </section>
            <section className='detailed-section'>
              <article className='overview'>
                <h2>Overview</h2>
                <p>{restDataSingleWork[0].acf.overview_text}</p>
              </article>
              <article className='work-info'>
              <Tabs>
                  <TabList>
                    <Tab>Highlights</Tab>
                    <Tab>Insights</Tab>
                  </TabList>
                  <TabPanel>
                    {
                      restDataSingleWork[0].acf.highlight_features.map(feature=>{
                          return(
                            <div>
                              <h4>{feature.feature_title}</h4>
                              <p>{feature.feature_text}</p>
                            </div>
                          )
                       }  
                      )
                    }
                  </TabPanel>

                  <TabPanel>
                  {
                      restDataSingleWork[0].acf.single_work_tools.map(tool=>
                        
                              <p>{tool}</p> 
                      )
                    }
                  </TabPanel>
              </Tabs>
              </article>
              <article className='work-gallery'>
                    {
                      restDataSingleWork[0].acf.single_work_image_gallery.map(image=>
                      {
                          if(restDataSingleWork[0].acf.single_page_title == 'ClickFlicks Movie Database'){
                            return(
                              <video muted autoPlay>
                                  <source src={image.url} type='video/mp4'/>
                              </video>
                            )
                          } else{
                            return(
                              <img src={image.url} alt={image.alt}/>
                            )
                          }
                      }
                        
                      )
                    }
              </article>

            </section>
      </div>
     

        : 
        <p>Nothing was found</p>
      }   
    </main>
  )
}

export default SingleWorkPage