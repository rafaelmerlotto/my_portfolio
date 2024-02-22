import React from 'react'
import picture from '../images/Rafael-Merlotto.jpg'
import './about.css'

export default function About() {
    return (
        <div className='about'>
            <div className='picture'>
                <img src={picture} height={300} />
            </div>
            <div className='description'>
                <h3>About</h3>
                <p>I am a passionate and motivated full-stack web developer with a focus on building both front-end and back-end applications. 
                    Continuously seeking opportunities to expand my skills and knowledge, I specialize in JavaScript, React, TypeScript, and Node.js.
                     Known for my organizational skills, I thrive in collaborative team environments.
                     I approach new challenges with strong motivation and a commitment to ongoing learning.
                </p>
            </div>
        </div>
    )
}
