import React from 'react'
import { nodejsData } from './ContentData'

export default function Container({ container, children }) {
  console.log(children)
  const { title, description, img, link } = container
  return (
    <div className='box'>
        <h4>{title}</h4>
        <p>{description}</p>
        <img src={img} width={300} />
        <a href={link}>github</a>
        {children}
    </div>
  )
}


export const ContentData = () => {
  return (
    <div className='container'>
     {
      nodejsData.map(el => (
        <Container container={el} />
      ))
    }
    </div>
  )

}


