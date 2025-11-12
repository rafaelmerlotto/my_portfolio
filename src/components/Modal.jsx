import React from 'react'
import { X, ExternalLink, Github } from "lucide-react"

export default function Modal({ projects, index, onClose }) {
    const selectedProject = projects[index];

    if (!selectedProject) return null;

    return (
        <React.Fragment>
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-gray-800  rounded-2xl max-w-5xl w-full h-[80vh] overflow-y-auto">
                    <div className="relative">
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-[28rem] object-cover max-md:h-auto"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                        >
                            <X size={24} color='black' />
                        </button>
                        <div className="absolute bottom-4 left-4 right-4 z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-green-500 text-white text-sm font-medium rounded-full">
                                {selectedProject.type}
                            </span>
                        </div>
                    </div>

                    {/* Modal Content */}
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                        </div>
                        <p className="text-gray-400 mb-4 max-md:text-lg">{selectedProject.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {selectedProject.tech.map((tech) => (
                                <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href={selectedProject.github}
                                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
                            >
                                <Github size={16} />
                                <span className="text-sm">Code</span>
                            </a>
                            <a
                                href={selectedProject.demo}
                                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
                            >
                                <ExternalLink size={16} />
                                <span className="text-sm">Demo</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}
