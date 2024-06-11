import React from 'react'
import picture from '../assets/images/Rafael-Merlotto.jpg'
import '../assets/css/about.css'

export default function About() {
    return (
        <div className='about'>
            <div className='picture'>
                <img src={picture} height={300} />
            </div>
            <div className='description'>
                <h3>About me</h3>
                <p>I am a passionate and motivated full-stack web developer with a focus on building both front-end and back-end applications.<br/>
                    Continuously seeking opportunities to expand my skills and knowledge, I specialize in JavaScript, React, TypeScript, Node.js and Ruby on Rails.<br/>
                     Known for my organizational skills, I thrive in collaborative team environments.<br/>
                     I approach new challenges with strong motivation and a commitment to ongoing learning.
                </p>
            </div>
        </div>
    )
}
