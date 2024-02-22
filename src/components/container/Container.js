import React from 'react'
import githubImg from '../images/github.png'
import './container.css'
import { Link } from 'react-router-dom'

export default function Container({ container, children }) {
  const { title, description, img,imgLink, link } = container


  return (
    <div className='box'>
      <div className='contents-1'>
        <h4>{title}</h4>
      <p>{description}</p>
      </div>
      <div className='contents-2'>
        <Link className='link' to={imgLink} target='_blank'><img src={img} alt={img}  /> </Link> 
      <div className='box-link'>
        <img className='github-link' src={githubImg} /> <a href={link} target='_blank'>Repository</a>
      </div>
      </div> 
      {children}
    </div>
  )
}





