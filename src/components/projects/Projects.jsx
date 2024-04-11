import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import {projectsData} from './ContentData'
import Container from '../Container'

export default function Projects() {
  return (
    <React.Fragment>
        <Header/> 
        <ContentData/>
        <Footer/>
    </React.Fragment>
  )
}


 const ContentData = () => {
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