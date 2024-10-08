import React from 'react'
import { useState, useEffect } from 'react'
import { restBase } from '../utilities/utilities'
import {Tab, Tabs, TabList,TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import Marquee from "react-fast-marquee";

function AboutSection() {
  const restPathItems = restBase + 'pages/7?acf_format=standard'
  const [restDataAbout, setDataAbout] = useState([]);
  const [isLoaded, setIsLoaded]     = useState(false);

  useEffect(()=>{
    const fetchData = async() => {
      const response_items = await fetch(restPathItems);
      if(response_items.ok){
        const aboutItems = await response_items.json();
        setDataAbout(aboutItems);
        setIsLoaded(true);
      }else{
        setIsLoaded(false)
      }
    }
    fetchData();
  },[restPathItems])

  return (
    <section className='about-me-section'>
    <h2>About Me</h2>
    {
      isLoaded?
        
      <div className='about-me-text'>
          <p>{restDataAbout.acf.about_me}</p>
          <article>
            <h3>Skills</h3>
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Development</Tab>
                <Tab>Design</Tab>
              </TabList>

                <TabPanel className='skill-tab-panel'>
                  <Marquee autoFill={true} pauseOnHover={true}>
                    {
                      restDataAbout.acf.all_skills_label_and_icon.map(skill=>
                        <figure className='single-skill'>
                        <img src={skill.skill_image.url} alt={skill.skill_image.alt} />
                        <figcaption>{skill.skill_label}</figcaption>
                        </figure>
                      )
                    }
                  </Marquee>
                </TabPanel>
                <TabPanel className='skill-tab-panel'>
                  <Marquee autoFill={true} pauseOnHover={true}>
                  {
                      restDataAbout.acf.all_skills_label_and_icon.map(skill=>{
                        if(skill.skill_category[1] == 'Development'){
                          return(
                          <figure className='single-skill'>
                          <img src={skill.skill_image.url} alt={skill.skill_image.alt} />
                          <figcaption>{skill.skill_label}</figcaption>
                          </figure>
                          )
                        }
                      }
                      )
                    }
                 </Marquee>
                </TabPanel>
                <TabPanel className='skill-tab-panel'>
                  <Marquee autoFill={true} pauseOnHover={true}>
                    {
                      restDataAbout.acf.all_skills_label_and_icon.map(skill=>{
                        if(skill.skill_category[1] == 'Design'){
                          return(
                          <figure className='single-skill'>
                          <img src={skill.skill_image.url} alt={skill.skill_image.alt} />
                          <figcaption>{skill.skill_label}</figcaption>
                          </figure>
                          )
                        }
                      }
                      )
                    }
                  </Marquee>
                </TabPanel>
            </Tabs>
          </article>
      </div>
        :
        <p>It's not Loaded</p>
    }
    </section>
  )
}

export default AboutSection