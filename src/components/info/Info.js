import React from 'react'
import './info.css'
import Container from '../container/Container'
import { nodejsData } from '../components-portfolio/nodejs/ContentData'
import Footer from '../footer/Footer'



export default function Info() {
  return (
    <div className='info-container'>
      <div className='skills'> 
        <div className='info'>
          <h4><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' height={40} /></h4>
          <p>Creating web apps and static sites using HTML and CSS, with the integration of JavaScript for dynamic functionality.</p>
        </div>
        <div className='info'>
          <h4><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' height={40} /></h4>
          <p> React development involves building user interfaces through the use of components, state management and style libraries.</p>
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
      </div>
        <h4>Projects</h4>
      <ContentData/>
      <Footer/>
    </div>
  )
}

export const ContentData = () => {
  return (
    <div className='container'>
    
     {
      nodejsData.map(el => (
        <Container container={el} />
      ))
    }
    </div>
  )

}