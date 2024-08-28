import React, { useState } from 'react'
import '../assets/css/info.css'
import Container from './Container'
import { projectsData } from './projects/ContentData'
import Footer from './Footer'
import MobileProjects from './projects/MobileProjects'


export default function Info() {

  const [switchDev, setSwitchDev] = useState(true)
  const [color, setColor] = useState("#ff5722")


  return (
    <div className='info-container'>
      <div className='skills'>
        <div className='info'>
          <h4><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' height={40} /></h4>
          <p>Creating web apps and static sites using HTML and CSS, with the integration of JavaScript for dynamic functionality.</p>
        </div>
        <div className='info'>
          <h4><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' height={40} /></h4>
          <p> React and React Native development involves building user interfaces through the use of components, state management and style libraries.</p>
        </div>
        <div className='info'>
          <h4><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' height={40} /></h4>
          <p>Node.js development with express.js for creating the RESTful APIs. Access and queries on db using Prisma.
            Interactions, schema design, and data management with MongoDB, MySQL, and SQLite.</p>
        </div>
        <div className='info'>
          <h4><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' height={40} /></h4>
          <p>Typescript for the ability to type and add interfaces, facilitating better code organization.</p>
        </div>
        <div className='info'>
          <h4><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg' height={40} /></h4>
          <p>Ruby on Rails framework to deliver scalable, high-performance, and user-centric solutions. Adept at working in agile environments, following best practices, and utilizing modern development tools and methodologies.</p>
        </div>
      </div>
      <h4>Projects</h4>
      <hr />
      <div className='switch'>
        <h6 className='switchBtn' onMouseEnter={(e) => e.target.style.color= color} onMouseLeave={(e) => e.target.style.color= "#eeeeee"} onClick={() => setSwitchDev(true)}>Web development</h6>
        <h6 className='switchBtn' onMouseEnter={(e) => e.target.style.color= color} onMouseLeave={(e) => e.target.style.color= "#eeeeee"} onClick={() => setSwitchDev(false)} >Mobile development</h6>
      </div>

      {switchDev ? <ContentData /> : <MobileProjects />}
      <Footer />
    </div>
  )
}

export const ContentData = () => {
  return (
    <div className='container'>

      {
        projectsData.map(el => (
          <Container container={el} />
        ))
      }
    </div>
  )

}