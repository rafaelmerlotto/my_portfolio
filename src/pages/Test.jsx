

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code2, Database, Server, Cpu, GitBranch, Coffee, Calendar } from 'lucide-react';

export default function Test() {
    const [activeTab, setActiveTab] = useState('projects');
    const [typedText, setTypedText] = useState('');
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

    const projects = [
        {
            title: "SaaS platform",
            description: "T-Todoc is a SaaS platform for small professional firms (accountants, lawyers, consultants, etc.) to securely store, organize, and share documents in the cloud. It simplifies deadline tracking and team collaboration.",
            tech: ["React", "Typescript", "TailwinCSS", "Ruby on Rails", "PostgreSQL", "API RESTful"],
            github: "https://github.com/example/microservices",
            demo: "https://t-todoc.it",
            image: "https://i.imgur.com/UNZl5tT.png",
            type: "Full Stack"
        },
        {
            title: "Real-time Chat App",
            description: "Applicazione di chat in tempo reale con WebSocket, autenticazione JWT e file sharing",
            tech: ["React", "Socket.io", "Express", "MongoDB", "AWS S3"],
            github: "https://github.com/example/chat-app",
            demo: "https://chat.example.com",
            image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop",
            type: "Full Stack"
        },
        {
            title: "DevOps Dashboard",
            description: "Dashboard per monitoraggio CI/CD pipeline con metriche, logs e deploy automation",
            tech: ["Vue.js", "Python", "Jenkins", "Prometheus", "Grafana", "Terraform"],
            github: "https://github.com/example/devops-dashboard",
            demo: "https://devops.example.com",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
            type: "DevOps"
        },
        {
            title: "ML Data Pipeline",
            description: "Pipeline per processamento dati e machine learning con Apache Airflow e TensorFlow",
            tech: ["Python", "TensorFlow", "Apache Airflow", "Docker", "GCP", "BigQuery"],
            github: "https://github.com/example/ml-pipeline",
            demo: "https://ml.example.com",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
            type: "Data Science"
        }
    ];

    const skills = {
        languages: [
            { name: "JavaScript", level: 100, years: 3 },
            { name: "TypeScript", level: 100, years: 3 },
            { name: "Ruby", level: 100, years: 1 },
        ],
        frontend: [
            { name: "React", level: 100 },
            { name: "TypeScript", level: 100 },
            { name: "Tailwind CSS", level: 100 },
        ],
        backend: [
            { name: "Node.js/Express", level: 100 },
            { name: "Ruby on Rails", level: 100 },
            { name: "PostgreSQL/MongoDB/MySQL", level: 100 },
            { name: "REST APIs", level: 100 }
        ],
        devops: [
            { name: "Docker", level: 100 },
            { name: "Git, CI/CD", level: 100 },
            { name: "Linux Ubuntu", level: 100 }

        ]
    };



    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Header/Navigation */}
            <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <Terminal className="text-green-400" size={20} />
                            <span className="font-mono text-lg">rafaelmerlotto@developer:~$</span>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">./home</a>
                            <a href="#projects" className="text-gray-300 hover:text-green-400 transition-colors">./projects</a>
                            <a href="#skills" className="text-gray-300 hover:text-green-400 transition-colors">./skills</a>
                            <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">./contact</a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="pt-24 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                                        {fullElements.slice(0, currentIndex)}
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

                        <div className="relative">
                            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="bg-gray-700 p-4 rounded-lg text-center">
                                        <Code2 className="text-blue-400 mx-auto mb-2" size={24} />
                                        <div className="text-sm text-gray-300">Clean Code</div>
                                    </div>
                                    <div className="bg-gray-700 p-4 rounded-lg text-center">
                                        <Database className="text-green-400 mx-auto mb-2" size={24} />
                                        <div className="text-sm text-gray-300">Databases</div>
                                    </div>
                                    <div className="bg-gray-700 p-4 rounded-lg text-center">
                                        <Server className="text-purple-400 mx-auto mb-2" size={24} />
                                        <div className="text-sm text-gray-300">Cloud</div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span>System Uptime</span>
                                        <span className="text-green-400">99.9%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-green-400 h-2 rounded-full w-full"></div>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Code Quality</span>
                                        <span className="text-green-400">A+</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-green-400 h-2 rounded-full w-5/6"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating stats */}
                            <div className="absolute -top-4 -right-4 bg-green-500 text-gray-900 p-3 rounded-lg font-bold">
                                <div className="text-lg">3+</div>
                                <div className="text-xs">Years</div>
                            </div>
                            {/* <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-lg font-bold">
                                <div className="text-lg">50+</div>
                                <div className="text-xs">Projects</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 px-6 bg-gray-800/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-gray-400 text-lg">Alcuni dei progetti più significativi su cui ho lavorato</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all group">
                                <div className="aspect-video overflow-hidden">
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
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
                        <p className="text-gray-400 text-lg">Tecnologie e strumenti che utilizzo quotidianamente</p>
                    </div>

                    <div className="mb-8 ">
                        <div className="flex justify-center gap-3 mb-8 max-md:flex max-md:flex-col">
                            {Object.keys(skills).map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === category
                                        ? 'bg-green-500 text-gray-900'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                        }`}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills[activeTab]?.map((skill, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="font-semibold">{skill.name}</h3>

                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                                    <div
                                        className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1000"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                {skill.years && (
                                    <p className="text-gray-400 text-sm">{skill.years} years experience</p>
                                )}
                            </div>
                        ))}
                    </div>


                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-6 bg-gray-800/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Let's Build Something Together</h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Sempre aperto a nuovi progetti e collaborazioni interessanti
                    </p>

                    <div className="grid md:grid-cols-1 gap-8 mb-12">
                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                            <Mail className="text-green-400 mx-auto mb-4" size={32} />
                            <h3 className="font-semibold mb-2">Email</h3>
                            <p className="text-gray-400">rafaelmerlotto@gmail.com</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                            <Github className="text-green-400 mx-auto mb-4" size={32} />
                            <h3 className="font-semibold mb-2">GitHub</h3>
                            <p className="text-gray-400">@rafaelmerlotto</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                            <Linkedin className="text-green-400 mx-auto mb-4" size={32} />
                            <h3 className="font-semibold mb-2">LinkedIn</h3>
                            <p className="text-gray-400">/in/rafael-merlotto</p>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <a
                            href="mailto:rafaelmerlotto@gmail.com"
                            className="bg-green-500 hover:bg-green-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Send Email
                        </a>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-gray-800">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <Terminal className="text-green-400" size={16} />
                        <span className="font-mono text-sm">Built with React + Tailwind CSS</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                        © 2025 Rafael Merlotto. Open source on GitHub.
                    </div>
                </div>
            </footer>
        </div>
    );
}
