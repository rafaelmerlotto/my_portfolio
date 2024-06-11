import React from 'react'
import githubImg from '../assets/images/github.png'
import '../assets/css/container.css'
import { Link } from 'react-router-dom'

export default function Container({ container, children }) {
  const { title, description, img, imgLink, link, techUsed, techUsed2, techUsed3, techUsed4, techUsed5 } = container


  return (
    <div className='box'>
      <div className='contents-1'>
        <h5>{title}</h5>
        <p>{description}</p>
        <div class='tech'>
          <span>Main technologies used:</span>
          <div className='techUsed'>
            <img src={techUsed} alt="" height={25} />
            <img src={techUsed2} alt="" height={25} />
            <img src={techUsed3} alt="" height={25} />
            <img src={techUsed4} alt="" height={25} />
            <img src={techUsed5} alt="" height={25} />
          </div>
        </div>

      </div>
      <div className='contents-2'>
        <Link className='link' to={imgLink} target='_blank'><img src={img} alt={img} /> </Link>
        <div className='box-link'>
          <img className='github-link' src={githubImg} /> <a href={link} target='_blank'>Repository</a>
        </div>
      </div>
      {children}
    </div>
  )
}





