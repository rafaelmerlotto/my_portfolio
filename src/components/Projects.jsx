import React, { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react';
import Modal from './Modal';


export default function Projects({ projects }) {

  const [openModal, setOpenModal] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState()
  const [closeModal, setCloseModal] = useState()
  const [viewAllProjects, setViewAllProjects] = useState(true)
  const [viewProjects, setViewProjects] = useState([0, 1, 2, 3])

  const handleClick = (idx) => {
    setOpenModal(true)
    setSelectedIndex(idx)
  }

  const handleCloseModal = () => {
    setCloseModal(true)
    setSelectedIndex(null);
  }

  const handleSeeProjects = () => {
    setViewProjects(prev => [...prev, 4, 5, 6])
    setViewAllProjects(false)
  }
  console.log(viewProjects)
  return (
    <React.Fragment>
      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">Some of the most significant projects I’ve worked on</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter((_, index) => viewProjects.includes(index)).map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all group">
                <div onClick={() => handleClick(index)} className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {viewAllProjects && <button onClick={handleSeeProjects} className="bg-green-500 mt-10 hover:bg-green-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors max-md:text-lg">See all projects</button>}
        </div>
      </section>
      {openModal && <Modal projects={projects} index={selectedIndex} onClose={handleCloseModal} />}
    </React.Fragment>
  )
}





