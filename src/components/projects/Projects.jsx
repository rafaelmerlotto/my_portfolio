import React from 'react'
import Header from '../Header'
import View from '../View'
import Footer from '../Footer'
import {projectsData} from './ContentData'
import Container from '../Container'

export default function Projects() {
  return (
    <React.Fragment>
        <Header/>
        <View/>
        <ContentData/>
        <Footer/>
    </React.Fragment>
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