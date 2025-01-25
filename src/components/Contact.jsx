import React from 'react'
import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'
import gmail from '../assets/images/gmail.png'
import { Github, Mail, Linkedin } from 'lucide-react';


export default function Contact() {
    return (
        <div className='contact'>
            <div className='social-media'>
                <a href='https://github.com/rafaelmerlotto' target='_blank' >
                    <Github />
                </a >
                <a href='https://www.linkedin.com/in/rafael-merlotto-715266101/' target='_blank' >
                    <Linkedin />
                </a>
                <a href='mailto:rafaelmerlotto@gmail.com' >
                    <Mail />
                </a>
            </div>

        </div>
    )
}

