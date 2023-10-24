import React from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import tel from '../images/telefone.png'
import gmail from '../images/gmail.png'

export default function Contact() {
    return (
        <div className='contact'>
           
            <div className='social-media'>
                <a href='https://github.com/rafaelmerlotto'>
                    <img width="64" height="64" src={github} alt="github" />
                </a >
                <a href='https://www.linkedin.com/in/rafael-merlotto-715266101/'>
                    <img width="64" height="64" src={linkedin} alt="linkedin" />
                </a>
            </div>

            <div className='contacts'>
    
                <a className='link' href='mailto:rafaelmerlotto@gmail.com'>
                <img width="24" height="24" src={gmail} alt="mail" /> 
                rafaelmerlotto@gmail.com   
                </a>
                <a className='link' href='tel:+393511099867'>
                <img width="24" height="24" src={tel} alt="tel" />
                +393511099867
                </a>

            </div>
        </div>
    )
}
