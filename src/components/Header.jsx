import React from "react"
import { Terminal } from 'lucide-react';


export default function Header() {

    return (
        <React.Fragment>
            {/* Header/Navigation */}
            <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <Terminal className="text-green-400" size={20} />
                            <span className="font-mono text-lg">rafaelmerlotto@developer:~$</span>
                        </div>
                        <nav className="hidden md:flex space-x-8 font-mono text-xl">
                            <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a>
                            <a href="#projects" className="text-gray-300 hover:text-green-400 transition-colors">Projects</a>
                            <a href="#skills" className="text-gray-300 hover:text-green-400 transition-colors">Skills</a>
                            <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
                        </nav>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}