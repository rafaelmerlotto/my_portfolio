import React from 'react'
import Header from '../../header/Header'
import View from '../../view/View'
import Footer from '../../footer/Footer'
import { reactData } from './ContentData'
import Container from '../../container/Container'

export default function Reactjs() {
  return (
    <>
        <Header/>
        <View/>
        <ContentData/>
        <Footer/>
    </>
  )
}


export const ContentData = () => {
  return (
    <div className='container'>
     {
      reactData.map(el => (
        <Container container={el} />
      ))
    }
    </div>
  )

}