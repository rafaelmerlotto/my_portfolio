import React, { useState, useEffect } from 'react'
import { Coffee, GitBranch } from 'lucide-react';


export default function About() {

    const [isTyping, setIsTyping] = useState(true);

    // const fullText = "const developer = new SoftwareDeveloper('Rafael Merlotto');";
    const fullElements = [
        <span className="text-cyan-400">const </span>,
        <span className="text-gray-200">developer </span>,
        <span className="text-stone-500">= new </span>,
        <span className="text-orange-400">SoftwareDeveloper</span>,
        <span className="text-green-400">("Rafael Merlotto")</span>,
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isTyping && currentIndex < fullElements.length) {
            const timeout = setTimeout(() => {
                setCurrentIndex((prev) => prev + 1);
            }, 300);
            return () => clearTimeout(timeout);
        } else if (currentIndex === fullElements.length) {
            setIsTyping(false);
        }
    }, [currentIndex, isTyping]);



    return (
        <React.Fragment>
            <div>
                <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700">
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">terminal.js</span>
                    </div>
                    <div className="font-mono text-sm">
                        <div className="text-green-400 mb-2">$ whoami</div>
                        <div className="text-gray-300 mb-4">Rafael Merlotto - Software Developer</div>
                        <div className="text-green-400 mb-2">$ cat about.js</div>
                        <div className="text-gray-300 mb-4">
                            {Array.from(fullElements).slice(0, currentIndex)}
                            {isTyping && <span className="animate-pulse">|</span>}
                        </div>
                    </div>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                    Building the
                    <span className="text-green-400 block">Digital Future</span>
                </h1>

                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    Full-stack developer con 3+ anni di esperienza in architetture scalabili,
                    microservizi e tecnologie cloud. Appassionato di clean code e best practices.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
                        <Coffee className="text-yellow-400" size={16} />
                        <span className="text-sm">Coffee Driven Development</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
                        <GitBranch className="text-green-400" size={16} />
                        <span className="text-sm">Git Workflow</span>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <a
                        href="#projects"
                        className="bg-green-500 hover:bg-green-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="border border-gray-600 hover:border-green-400 px-6 py-3 rounded-lg transition-colors"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}
