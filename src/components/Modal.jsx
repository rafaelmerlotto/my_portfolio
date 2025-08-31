import React, { useState } from 'react'
import { X } from "lucide-react"

export default function Modal({ projects, index, onClose }) {
    const selectedProject = projects[index];

    if (!selectedProject) return null;

    return (
        <React.Fragment>
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="aspect-video overflow-hidden">
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}
