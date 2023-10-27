import React from 'react'
import githubImg from '../images/github.png'
import './container.css'

export default function Container({ container, children }) {
  console.log(children)
  const { title, description, img, link } = container
  return (
    <div className='box'>
        <h4>{title}</h4>
        <p>{description}</p>
        <img src={img} width={250} />
        <div className='box-link'>
         <img src={githubImg}/> <a href={link} target='_blank'>Repository</a> 
        </div>
        
        {children}
    </div>
  )
}





