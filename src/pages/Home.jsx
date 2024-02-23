import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <React.Fragment>
        <Header/>
        <Content/>
        <About />
        <Contact/>
        <Footer/>
    </React.Fragment>
  )
}