import React from 'react'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import tel from './images/telefone.png'
import gmail from './images/gmail.png'
import './assets/css/contact.css'

export default function Contact() {
    return (
        <div className='contact'>   
            <div className='social-media'>
                <a href='https://github.com/rafaelmerlotto' target='_blank' >
                    <img width="40" height="40" src={github} alt="github"   />
                </a >
                <a href='https://www.linkedin.com/in/rafael-merlotto-715266101/' target='_blank' >
                    <img width="40" height="40" src={linkedin} alt="linkedin" />
                </a>
                <a href='mailto:rafaelmerlotto@gmail.com' >
                    <img width="40" height="40" src={gmail} alt="gmail" />
                </a>
            </div>

        </div>
    )
}
