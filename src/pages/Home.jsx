import React from 'react'
import Header from '../components/Header'

import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { dataProjects, skills } from '../data/data'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Header />
        <Hero />
        <Projects projects={dataProjects} />
        <Skills skills={skills} />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  )
}