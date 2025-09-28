import React from 'react'
import { Github, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import cv from '../assets/files/Rafael_Merlotto_CV.pdf'

export default function Contact() {
    return (
        <React.Fragment >
            {/* Contact Section */}
            <section id="contact" className="py-16 px-6 bg-gray-800/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Let's Build Something Together</h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Always open to new projects and exciting collaborations
                    </p>

                    <div className="grid md:grid-cols-1 gap-8 mb-12">
                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                            <Mail className="text-green-400 mx-auto mb-4" size={32} />
                            <h3 className="font-semibold mb-2">Email</h3>
                            <p className="text-gray-400"> <a href="mailto:rafaelmerlotto@gmail.com">rafaelmerlotto@gmail.com</a></p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                            <Github className="text-green-400 mx-auto mb-4" size={32} />
                            <h3 className="font-semibold mb-2">GitHub</h3>
                            <p className="text-gray-400"><Link to={'https://www.github.com/rafaelmerlotto'}>@rafaelmerlotto</Link></p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                            <Linkedin className="text-green-400 mx-auto mb-4" size={32} />
                            <h3 className="font-semibold mb-2">LinkedIn</h3>
                            <p className="text-gray-400"> <Link to={'https://www.linkedin.com/in/rafael-merlotto'}>/in/rafael-merlotto</Link></p>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <a
                            href="mailto:rafaelmerlotto@gmail.com"
                            className="bg-green-500 hover:bg-green-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Send Email
                        </a>
                        <a href={cv} target="_blank" className=" bg-gray-900 border-gray-600 border px-8 py-3 rounded-lg font-semibold transition-colors" >Download CV</a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

