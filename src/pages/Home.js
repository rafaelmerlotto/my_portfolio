import React from 'react'
import Header from '../components/header/Header'
import Content from '../components/content/Content'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <>
        <Header/>
        <Content/>
        <About />
        <Contact/>
        <Footer/>
    </>
  )
}