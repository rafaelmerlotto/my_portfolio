import React, { useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code2, Database, Server, Cpu, GitBranch, Coffee, X } from 'lucide-react';


export default function Project() {

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Piattaforma e-commerce completa con gestione prodotti, carrello e pagamenti.',
            longDescription: 'Una piattaforma e-commerce full-stack sviluppata con React, Node.js e MongoDB. Include autenticazione utenti, gestione prodotti, carrello avanzato, integrazione pagamenti Stripe e dashboard admin completa.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'Full Stack',
            github: 'https://github.com',
            live: 'https://demo.com',
            features: ['Autenticazione JWT', 'Pagamenti Stripe', 'Dashboard Admin', 'API RESTful']
        }

    ]
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(projects[0]);


    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="relative">
                    <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-64 object-cover"
                    />
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                    <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-full">
                            {selectedProject.category}
                        </span>
                    </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        {selectedProject.longDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Caratteristiche principali:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {selectedProject.features.map(feature => (
                                <div key={feature} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Tecnologie utilizzate:</h4>
                        <div className="flex flex-wrap gap-3">
                            {selectedProject.technologies.map(tech => (
                                <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => window.open(selectedProject.github, '_blank')}
                            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                        >
                            <Github size={20} />
                            Vedi il codice
                        </button>
                        <button
                            onClick={() => window.open(selectedProject.live, '_blank')}
                            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                        >
                            <ExternalLink size={20} />
                            Demo live
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
